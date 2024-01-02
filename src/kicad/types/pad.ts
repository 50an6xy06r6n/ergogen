import {
    CanonicalLayer,
    Coordinate2D,
    Position,
    UUID,
    ZoneConnect,
} from "./common.js"
import {
    GraphicalArc,
    GraphicalBoundingBox,
    GraphicalCircle,
    GraphicalCurve,
    GraphicalLine,
    GraphicalPolygon,
    GraphicalRectangle,
} from "./graphical.js"
import { Net } from "./net.js"

export type Pad = {
    tstamp: UUID
    type: "thru_hole" | "smd" | "connect" | "np_thru_hole"
    shape: "circle" | "rect" | "oval" | "trapezoid" | "roundrect" | "custom"
    at: Position
    size: {
        width: number
        height: number
    }

    number: number | string // naming is a bit confusing
    net?: Net
    pinfunction?: string // Schematic symbol pin name
    pintype?: string // Schematic symbol pin electrical type
    die_length?: number

    solder_mask_margin?: number
    solder_paste_margin?: number
    solder_paste_ratio?: number
    clearance?: number
    zone_connection?: ZoneConnect
    thermal_width?: number
    thermal_gap?: number

    layers: CanonicalLayer[]
    remove_unused_layer?: boolean
    keep_end_layers?: boolean
    drill?: PadDrill

    property?: { [key in PadProperty]?: string } // Unclear if these are all strings
    options?: PadOptions
    primitives: PadPrimitives

    roundrect_rratio?: number // [0, 1]
    chamfer_ratio?: number // [0, 1]
    chamfer?: "top_left" | "top_right" | "bottom_left" | "bottom_right"

    locked?: boolean
}

enum PadProperty {
    BGA = "pad_prop_bga",
    FIDUCIAL_GLOB = "pad_prop_fiducial_glob",
    FIDUCIAL_LOC = "pad_prop_fiducial_loc",
    TESTPOINT = "pad_prop_testpoint",
    HEATSINK = "pad_prop_heatsink",
    CASTELLTED = "pad_prop_castellated",
}

type PadDrill = {
    diameter: number
    offset?: Coordinate2D
} & (
        {} | {
            width: number
            oval: true
        }
    )

type PadOptions = {
    clearance: "outline" | "convexhull"
    anchor: "rect" | "circle"
}

type PadPrimitives = {
    width: number
    fill?: "yes"

    lines: GraphicalLine[]
    rectangles: GraphicalRectangle[]
    circles: GraphicalCircle[]
    arcs: GraphicalArc[]
    polygons: GraphicalPolygon[]
    curves: GraphicalCurve[]
    bounding_boxes: GraphicalBoundingBox[]
}

