import {
    CanonicalLayer,
    Coordinate3D,
    Position,
    Properties,
    StrokeDefinition,
    UUID,
    ZoneConnect,
} from "./common.js"
import {
    GraphicalArc,
    GraphicalCircle,
    GraphicalCurve,
    GraphicalLine,
    GraphicalPolygon,
    GraphicalRectangle,
    GraphicalShape,
    GraphicalText,
    GraphicalTextBox,
} from "./graphical.js"
import { Group } from "./group.js"
import { Pad } from "./pad.js"
import { Zone } from "./zone.js"

export type Footprint = {
    // Metadata
    name: string
    version: string // YYYYMMDD
    generator: string

    // Content
    LIBRARY_LINK?: string
    locked?: boolean
    placed?: boolean

    layer: CanonicalLayer
    private_layers?: CanonicalLayer[]
    tedit: string
    tstamp?: UUID
    at?: Position

    descr?: string // Description
    tags?: string
    properties?: Properties
    path?: unknown

    autoplace_cost90?: number // 1-10
    autoplace_cost180?: number // 1-10
    solder_mask_margin?: number
    solder_paste_margin?: number
    solder_paste_ratio?: number
    clearance?: number
    zone_connect?: ZoneConnect
    thermal_width?: number
    thermal_gap?: number

    attr?: FootprintAttributes
    net_tie_pad_groups?: NetTiePadGroup[]

    // Primitives
    texts?: FootprintText[]
    text_boxes?: FootprintTextBox[]
    lines?: FootprintLine[]
    rectangles?: FootprintRectangle[]
    circles?: FootprintCircle[]
    arcs?: FootprintArc[]
    polygons?: FootprintPolygon[]
    curves?: FootprintCurve[]

    pads: Pad[] // Pads
    zones: Zone[] // Zones
    groups: Group[] // Grouped items

    // 3D Model
    model: Footprint3DModel
}

enum FootprintType {
    SMD = "smd",
    THROUGH_HOLE = "through_hole"
}

type FootprintAttributes = {
    type: FootprintType
    board_only?: boolean
    exclude_from_pos_files?: boolean
    exclude_from_bom?: boolean
}

type NetTiePadGroup = string[] // List of pad names

type Footprint3DModel = {
    filepath: string
    at: Position
    scale: Coordinate3D
    rotate: Coordinate3D
}


// Footprint Graphical Items
type FootprintItem = (
    FootprintText |
    FootprintTextBox |
    FootprintShape<GraphicalShape>
)

type FootprintText = Omit<GraphicalText, "knockout"> & {
    type: "reference" | "value" | "user"
    unlocked?: boolean
    hide?: boolean
}

type FootprintTextBox = GraphicalTextBox

type FootprintShape<G extends GraphicalShape> = G & {
    stroke: StrokeDefinition
    locked?: boolean
}

type FootprintLine = FootprintShape<GraphicalLine>

type FootprintRectangle = FootprintShape<GraphicalRectangle>

type FootprintCircle = FootprintShape<GraphicalCircle>

type FootprintArc = FootprintShape<GraphicalArc>

type FootprintPolygon = FootprintShape<GraphicalPolygon>

type FootprintCurve = FootprintShape<GraphicalCurve>
