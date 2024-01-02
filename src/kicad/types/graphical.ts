import {
    CanonicalLayer,
    Coordinate2D,
    Position,
    StrokeDefinition,
    TextEffects,
    UUID,
} from "./common.js"

export type GraphicalItem = (
    GraphicalText |
    GraphicalTextBox |
    GraphicalBoundingBox |
    GraphicalDimension |
    GraphicalShape
)

export type GraphicalShape = (
    GraphicalLine |
    GraphicalRectangle |
    GraphicalCircle |
    GraphicalArc |
    GraphicalPolygon |
    GraphicalCurve
)

export type GraphicalText = {
    tstamp: UUID
    layer: CanonicalLayer
    text: string
    at: Position
    knockout?: boolean
    effects: TextEffects
}

export type GraphicalTextBox = {
    tstamp: UUID
    layer: CanonicalLayer
    text: string
    effects: TextEffects
    stroke?: StrokeDefinition
    render_cache?: unknown
    locked?: boolean
} & (
        {
            start: Coordinate2D
            end: Coordinate2D
            angle?: 0 | 90 | 180 | 270
        } | {
            pts: [Coordinate2D, Coordinate2D, Coordinate2D, Coordinate2D]
            angle: number
        }
    )

export type GraphicalLine = {
    tstamp: UUID
    layer: CanonicalLayer
    start: Coordinate2D
    end: Coordinate2D
    width: number
}

export type GraphicalRectangle = {
    tstamp: UUID
    layer: CanonicalLayer
    start: Coordinate2D
    end: Coordinate2D
    width: number
    fill?: "solid" | "none"
}

export type GraphicalCircle = {
    tstamp: UUID
    layer: CanonicalLayer
    center: Coordinate2D
    end: Coordinate2D
    width: number
    fill?: "solid" | "none"
}

export type GraphicalArc = {
    tstamp: UUID
    layer: CanonicalLayer
    start: Coordinate2D
    mid: Coordinate2D
    end: Coordinate2D
    width: number
}

export type GraphicalPolygon = {
    tstamp: UUID
    layer: CanonicalLayer
    pts: Coordinate2D[]
    width: number
    fill?: "solid" | "none"

}

export type GraphicalCurve = {
    tstamp: UUID
    layer: CanonicalLayer
    pts: Coordinate2D[]
    width: number
}

export type GraphicalBoundingBox = {
    start: Coordinate2D
    end: Coordinate2D
}

export type GraphicalDimension = {
    tstamp: UUID
    layer: CanonicalLayer
    type: GraphicalDimensionType
    pts: [Coordinate2D, Coordinate2D]
    height?: number
    orientation?: number
    leader_length?: number
    gr_text?: GraphicalText
    format?: GraphicalDimensionFormat
    style?: GraphicalDimensionStyle
    locked?: boolean
}

type GraphicalDimensionType = (
    "aligned" |
    "leader" |
    "center" |
    "orthodonal" |
    "radial"
)

type GraphicalDimensionFormat = {
    prefix?: string
    suffix?: string
    units: GraphicalDimensionUnit
    units_format: GraphicalDimensionUnitFormat
    precision: number // 0-9
    override_value?: string
    suppress_zeros?: boolean
}

enum GraphicalDimensionUnit {
    INCHES = 0,
    MILS = 1,
    MILLIMETERS = 2,
    AUTOMATIC = 3,
}

enum GraphicalDimensionUnitFormat {
    NO_SUFFIX = 0,
    BARE_SUFFIX = 1,
    WRAP_SUFFIX = 2,
}

type GraphicalDimensionStyle = {
    thickness: number
    arrow_length: number
    extension_height?: number
    extension_offset?: number
    text_position_mode: GraphicalDimensionTextPositionMode
    text_frame?: GraphicalDimensionTextFrame
    keep_text_aligned?: boolean
}

enum GraphicalDimensionTextPositionMode {
    OUTSIDE = 0,
    INLINE = 1,
    MANUAL = 2,
}

enum GraphicalDimensionTextFrame {
    NONE = 0,
    RECTANGLE = 1,
    CIRCLE = 2,
    ROUNDED_RECTANGLE = 3,
}
