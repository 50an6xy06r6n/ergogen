import { UUID } from "crypto"
import {
    CanonicalLayer,
    Coordinate2D,
    LayerType,
    Position,
    Properties,
} from "./common.js"
import { Footprint } from "./footprint.js"
import {
    GraphicalLine,
    GraphicalRectangle,
    GraphicalCircle,
    GraphicalArc,
    GraphicalPolygon,
    GraphicalCurve,
    GraphicalBoundingBox,
    GraphicalDimension,
    GraphicalText,
    GraphicalTextBox,
} from "./graphical.js"
import { Net } from "./net.js"
import { Zone } from "./zone.js"
import { Group } from "./group.js"

export type PCB = {
    version: string // YYYYMMDD
    generator: string
    general: PCBGeneral
    paper: PageSettings
    title_block: TitleBlock
    layers: PCBLayer[] // Ordinals correspond to array indices
    setup: PCBSetup
    properties: Properties
    nets: Net[] // array index should match ordinal
    footprints: Footprint[]

    texts: GraphicalText[]
    text_boxes: GraphicalTextBox[]
    bounding_boxes: GraphicalBoundingBox[]
    dimensions: GraphicalDimension[]

    lines: GraphicalLine[]
    rectangles: GraphicalRectangle[]
    circles: GraphicalCircle[]
    arcs: GraphicalArc[]
    polygons: GraphicalPolygon[]
    curves: GraphicalCurve[]

    images: Image[]

    track_segments: TrackSegment[]
    track_vias: TrackVia[]
    track_arcs: TrackArc[]

    zones: Zone[]
    groups: Group[]
}

type PCBGeneral = {
    thickness: number
}

type PageSettings = {
    size: (
        "A0" | "A1" | "A2" | "A3" | "A4" | "A5" |
        "A" | "B" | "C" | "D" | "E" |
        {
            width: number
            height: number
        }
    )
    portrait?: boolean
}

type TitleBlock = {
    title: string
    date: string // YYYY-MM-DD
    rev: string
    company: string
    comment: string[] // Max 9
}

type PCBLayer = {
    canonical_name: CanonicalLayer
    type: LayerType
    user_name?: string
}

type PCBSetup = {
    stackup?: StackupSettings
    pcbplotparams: PlotSettings
    pad_to_mask_clearance: number
    solder_mask_min_width?: number
    pad_to_paste_clearance?: number
    pad_to_paste_clearance_ratio?: number
    aux_axis_origin?: Coordinate2D
    grid_origin?: Coordinate2D
}

type StackupSettings = {
    layers: StackupLayerSettings[] // indices correspond to stack order
    copper_finish?: string
    dielectric_constraints?: "yes" | "no"
    edge_connector?: "yes" | "bevelled"
    castellated_pads?: "yes"
    edge_plating?: "yes"
}

type StackupLayerSettings = (
    {
        name: CanonicalLayer
    } | {
        name: "dielectric ID"
        epsilon_r: number
        loss_tangent: number
    }
) & {
    type: string
    color?: string
    thickness?: number
    material?: string
}

type PlotSettings = {
    layerselection: string // hex bit set
    disableapertmacros: boolean

    usegerberextensions: boolean
    usegerberattributes: boolean
    usegerberadvancedattributes: boolean
    creategerberjobfile: boolean

    svguseinch: boolean
    svgprecision: number

    excludeedgelayer: boolean
    plotframeref: boolean
    viasonmask: boolean
    mode: string
    useauxorigin: boolean

    hpglpennumber: number
    hpglpenspeed: number
    hpglpendiameter: number

    dxfpolygonmode: boolean
    dxfimperialunits: boolean
    dxfusepcbnewfont: boolean

    psnegative: boolean
    psa4output: boolean

    plotreference: boolean
    plotvalue: boolean
    plotinvisibletext: boolean

    sketchpadsonfab: boolean
    subtractmaskfromsilk: boolean
    outputformat: PCBOutputFormat
    mirror: boolean
    drillshape: string
    scaleselection: 1 // Unclear what this is from the docs
    outputdirectory: string // filepath
}

enum PCBOutputFormat {
    GERBER = 0,
    POSTSCRIPT = 1,
    SVG = 2,
    DXF = 3,
    HPGL = 4,
    PDF = 5,
}

type Image = {
    uuid: UUID
    data: Blob // PNG base64
    at: Position
    scale?: number
    layer?: CanonicalLayer
}

type TrackSegment = GraphicalLine & {
    net: number
    locked?: boolean
}

type TrackVia = {
    tstamp: UUID
    type: "blind" | "micro"
    net: number
    at: Position
    size: number
    drill: number
    layers: CanonicalLayer[]
    remove_unused_layers?: boolean
    keep_end_layers?: boolean
    free?: boolean
    locked?: boolean
}

type TrackArc = GraphicalArc & {
    net: number
    locked?: boolean
}
