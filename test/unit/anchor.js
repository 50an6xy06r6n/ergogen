const {parse} = require('../../build/anchor')
const Point = require('../../build/point')
const {check} = require('../helpers/point')

describe('Anchor', function() {

    const points = {
        o: new Point(0, 0, 0, {label: 'o'}),
        rotated_o: new Point(0, 0, 90, {label: 'rotated_o'}),
        o_five: new Point(0, 5, 0, {label: 'o_five'}),
        five_o: new Point(5, 0, 0, {label: 'five_o'}),
        five: new Point(5, 5, 90, {label: 'five'}),
        ten: new Point(10, 10, -90, {label: 'ten'}),
        mirror_ten: new Point(-10, 10, 90, {mirrored: true})
    }

    it('params', function() {
        // an empty anchor definition leads to the default point
        check(
            parse({}, 'name')(),
            [0, 0, 0, {}]
        )
        // single reference
        check(
            parse({ref: 'o'}, 'name', points)(),
            [0, 0, 0, {label: 'o'}]
        )
        // default point can be overridden
        check(
            parse({}, 'name', {}, new Point(1, 1))(),
            [1, 1, 0, {}]
        )
        // mirrored references can be forced
        check(
            parse({ref: 'ten'}, 'name', points, undefined, true)(),
            [-10, 10, 90, {mirrored: true}]
        )
    })

    it('recursive', function() {
        // recursive references are supported (keeping metadata)
        check(
            parse({
                ref: {
                    ref: 'o',
                    shift: [2, 2]
                }
            }, 'name', points)(),
            [2, 2, 0, {label: 'o'}]
        )
    })

    it('aggregate', function() {
        // average of multiple references (metadata gets ignored)
        check(
            parse({
                aggregate: {
                    parts: ['o', 'ten']
                }
            }, 'name', points)(),
            [5, 5, -45, {}]
        )
        // empty parts
        check(
            parse({
                aggregate: {
                }
            }, 'name', points)(),
            [0, 0, 0, {}]
        )
        // can't have aggregate and ref together
        parse({
          aggregate: {
            parts: ['o', 'ten']
          },
          ref : 'ten'
        }, 'name', points).should.throw()
    })
    it('intersect', function() {
        // points that intersect on a negative Y axis
        check(
            parse({
                aggregate: {
                    parts: ['o','ten'],
                    method: 'intersect'
                }
            }, 'name', points)(),
            [0,10,0,{}]
        )

        // points that have parallel Y axis, i.e. never intersect
        parse({
            aggregate: {
                parts: ['o','five_o'],
                method: 'intersect'
            }
        }, 'name', points).should.throw(`The points under "name.aggregate.parts" do not intersect!`)

        // points intersect on their positive Y axis
        check(
            parse({
                aggregate: {
                    parts: ['o','five'],
                    method: 'intersect'
                }
            }, 'name', points)(),
            [0, 5, 0, {}]
        )

        // intersecting points with the same coordinates, but different rotations
        check(
            parse({
                aggregate: {
                    parts: ['o','rotated_o'],
                    method: 'intersect'
                }
            }, 'name', points)(),
            [0, 0, 0, {}]
        )
        
        // points with overlapping Y axis
        parse({
            aggregate: {
                parts: ['o','o_five'],
                method: 'intersect'
            }
        }, 'name', points).should.throw(`The points under "name.aggregate.parts" do not intersect!`)

        // more than two parts
        parse({
            aggregate: {
                parts: ['o', `five`, `ten`],
                method: 'intersect'
            }
        }, 'name', points).should.throw(`Intersect expects exactly two parts, but it got 3!`)

        // only one part
        parse({
            aggregate: {
                parts: ['o'],
                method: 'intersect'
            }
        }, 'name', points).should.throw(`Intersect expects exactly two parts, but it got 1!`)

        // no parts
        parse({
            aggregate: {
                method: 'intersect'
            }
        }, 'name', points).should.throw(`Intersect expects exactly two parts, but it got 0!`)
    })

    it('shift', function() {
        // normal shift
        check(
            parse({shift: [1, 1]}, 'name')(),
            [1, 1, 0, {}]
        )
        // shift should respect mirrored points (and invert along the x axis)
        check(
            parse({ref: 'mirror_ten', shift: [1, 1]}, 'name', points)(),
            [-11, 9, 90, {mirrored: true}]
        )
    })

    it('orient', function() {
        // an orient by itself is equal to rotation
        check(
            parse({orient: 10}, 'name')(),
            [0, 0, 10, {}]
        )
        // orient acts before shifting
        // so when we orient to the right, an upward shift goes to the right
        check(
            parse({orient: -90, shift: [0, 1]}, 'name')(),
            [1, 0, -90, {}]
        )
        // orient towards another point (and then move a diagonal to get to [1, 1])
        check(
            parse({orient: 'ten', shift: [0, Math.SQRT2]}, 'name', points)(),
            [1, 1, -45, {}]
        )
    })

    it('rotate', function() {
        // basic rotation
        check(
            parse({rotate: 10}, 'name')(),
            [0, 0, 10, {}]
        )
        // rotate acts *after* shifting
        // so even tho we rotate to the right, an upward shift does go upward
        check(
            parse({shift: [0, 1], rotate: -90}, 'name')(),
            [0, 1, -90, {}]
        )
        // rotate towards another point
        check(
            parse({rotate: {shift: [-1, -1]}}, 'name')(),
            [0, 0, 135, {}]
        )
    })

    it('affect', function() {
        // affect can restrict which point fields (x, y, r) are affected by the transformations
        check(
            parse({orient: -90, shift: [0, 1], rotate: 10, affect: 'r'}, 'name')(),
            [0, 0, -80, {}]
        )
        check(
            parse({orient: -90, shift: [0, 1], rotate: 10, affect: 'xy'}, 'name')(),
            [1, 0, 0, {}]
        )
        // affects can also be arrays (example same as above)
        check(
            parse({orient: -90, shift: [0, 1], rotate: 10, affect: ['x', 'y']}, 'name')(),
            [1, 0, 0, {}]
        )
    })

    it('resist', function() {
        const p = new Point(0, 0, 0, {mirrored: true}) // origin, but mirrored
        
        // resistance should be correctly propagated for shifts
        check(
            parse({shift: [1, 1]}, 'name', {}, p)(),
            [-1, 1, 0, {mirrored: true}]
        )
        check(
            parse({shift: [1, 1], resist: true}, 'name', {}, p)(),
            [1, 1, 0, {mirrored: true}]
        )

        // ...and orients/rotations too
        check(
            parse({rotate: 10}, 'name', {}, p)(),
            [0, 0, -10, {mirrored: true}]
        )
        check(
            parse({rotate: 10, resist: true}, 'name', {}, p)(),
            [0, 0, 10, {mirrored: true}]
        )
    })

    it('string', function() {
        // basic string form
        check(
            parse('ten', 'name', points)(),
            [10, 10, -90, {label: 'ten'}]
        )
    })

    it('array', function() {
        // basic multi-anchor
        check(
            parse([
                {shift: [1, 1]},
                {rotate: 10}
            ], 'name')(),
            [1, 1, 10, {}]
        )
    })
})