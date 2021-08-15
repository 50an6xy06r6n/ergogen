// TRRS-PJ-320A-dual
//     _________________
//    | (1)     (3) (4)|
//    |                |
//    |___(2)__________|
//
// Nets
//    A: corresponds to pin 1
//    B: corresponds to pin 2
//    C: corresponds to pin 3
//    D: corresponds to pin 4
// Params
//    reverse: default is false
//      if true, will flip the footprint such that the pcb can be reversible
//    symmetric: default is false
//      if true, will only work if reverse is also true
//      this will cause the footprint to be symmetrical on each half
//      pins 1 and 2 must be identical if symmetric is true, as they will overlap

module.exports = {
  nets: {
    A: undefined,
    B: undefined,
    C: undefined,
    D: undefined
  },
  params: {
    class: 'TRRS',
    reverse: false,
    symmetric: false
  },
  body: p => {
    return `
    (module PJ-320A (layer F.Cu) (tedit 6118E900)
      ${p.at /* parametric position */}
      (fp_text reference "${p.ref}" (at 0 -1.016 ${p.rot + 90}) (layer F.Fab) ${p.ref_hide}
        (effects (font (size 1 1) (thickness 0.15)))
      )
      (fp_text value PJ-320A (at 0 14 ${p.rot + 90}) (layer F.Fab) hide
        (effects (font (size 1 1) (thickness 0.15)))
      )
      (fp_line (start -2.9 11.9) (end -2.9 0.15) (layer F.SilkS) (width 0.15))
      (fp_line (start 2.9 11.9) (end -2.9 11.9) (layer F.SilkS) (width 0.15))
      (fp_line (start 2.9 0.15) (end 2.9 11.9) (layer F.SilkS) (width 0.15))
      (fp_line (start -2.9 0.15) (end 2.9 0.15) (layer F.SilkS) (width 0.15))
      (fp_line (start -2.9 0.15) (end -2.9 11.9) (layer B.SilkS) (width 0.15))
      (fp_line (start -2.9 11.9) (end 2.9 11.9) (layer B.SilkS) (width 0.15))
      (fp_line (start 2.9 0.15) (end -2.9 0.15) (layer B.SilkS) (width 0.15))
      (fp_line (start 2.9 11.9) (end 2.9 0.15) (layer B.SilkS) (width 0.15))
      (fp_text user TRRS (at 0 5.08 90) (layer F.SilkS)
        (effects (font (size 1 1) (thickness 0.15)))
      )
      (fp_text user TRRS (at 0 5.08 90) (layer B.SilkS)
        (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
      )
      (pad "" np_thru_hole circle (at 0 1.5) (size 1.2 1.2) (drill 1.2) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at 0 8.5) (size 1.2 1.2) (drill 1.2) (layers *.Cu *.Mask))
      (pad B thru_hole oval (at 2.1 3.3 ${p.rot}) (size 1.7 2.2) (drill oval 1 1.5) (layers *.Cu B.Mask) ${p.net.B.str})
      (pad C thru_hole oval (at 2.1 6.3 ${p.rot}) (size 1.7 2.2) (drill oval 1 1.5) (layers *.Cu B.Mask) ${p.net.C.str})
      (pad "" thru_hole oval (at -2.1 11.05 ${p.rot + 180}) (size 1.7 3.7) (drill oval 1 3) (layers *.Cu *.Mask)
        (clearance 0.15))
      (pad "" np_thru_hole circle (at 0 8.5 ${p.rot + 180}) (size 1.2 1.2) (drill 1.2) (layers *.Cu *.Mask))
      (pad B thru_hole oval (at -2.1 3.3 ${p.rot + 180}) (size 1.7 2.2) (drill oval 1 1.5) (layers *.Cu F.Mask) ${p.net.B.str})
      (pad C thru_hole oval (at -2.1 6.3 ${p.rot + 180}) (size 1.7 2.2) (drill oval 1 1.5) (layers *.Cu F.Mask) ${p.net.C.str})
      (pad "" np_thru_hole circle (at 0 1.5 ${p.rot + 180}) (size 1.2 1.2) (drill 1.2) (layers *.Cu *.Mask))
      (pad A smd custom (at -4.064 11.8 ${p.rot + 270}) (size 1.2 0.5) (layers B.Cu B.Mask)
        (clearance 0.1) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives
          (gr_poly (pts
             (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
    ) (width 0))
        ) ${p.net.A.str})
      (pad D smd custom (at 4.064 10.3 ${p.rot + 90}) (size 1.2 0.5) (layers B.Cu B.Mask)
        (clearance 0.1) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives
          (gr_poly (pts
             (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
    ) (width 0))
        ) ${p.net.D.str})
      (pad "" thru_hole oval (at 2.1 11.05 ${p.rot + 180}) (size 1.7 3.7) (drill oval 1 3) (layers *.Cu *.Mask)
        (clearance 0.15))
      (pad "" smd custom (at -3.048 11.8 ${p.rot + 270}) (size 0.1 0.1) (layers B.Cu B.Mask)
        (clearance 0.1) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives
          (gr_poly (pts
             (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
    ) (width 0))
        ))
      (pad "" smd custom (at 3.048 10.3 ${p.rot + 90}) (size 0.1 0.1) (layers B.Cu B.Mask)
        (clearance 0.1) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives
          (gr_poly (pts
             (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
    ) (width 0))
        ))
      (pad "" smd custom (at -3.048 10.3 ${p.rot + 270}) (size 0.1 0.1) (layers F.Cu F.Mask)
        (clearance 0.1) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives
          (gr_poly (pts
             (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
    ) (width 0))
        ))
      (pad D smd custom (at -4.064 10.3 ${p.rot + 270}) (size 1.2 0.5) (layers F.Cu F.Mask)
        (clearance 0.1) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives
          (gr_poly (pts
             (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
    ) (width 0))
        ) ${p.net.D.str})
      (pad A smd custom (at 4.064 11.8 ${p.rot + 90}) (size 1.2 0.5) (layers F.Cu F.Mask)
        (clearance 0.1) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives
          (gr_poly (pts
             (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
    ) (width 0))
        ) ${p.net.A.str})
      (pad "" smd custom (at 3.048 11.8 ${p.rot + 90}) (size 0.1 0.1) (layers *.Mask F.Cu)
        (clearance 0.1) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives
          (gr_poly (pts
             (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
    ) (width 0))
        ))
    )
    `
  }
}
