import { CanonicalLayer, Coordinate2D, UUID } from "./common.js"
import { Net } from "./net.js"

export type Zone = {
    tstamp: UUID
    name?: string
    net: Net
    layer: CanonicalLayer
    hatch: "none" | "edge" | "full"
    priority?: number
    connect_pads: {
        type: "thru_hole_only" | "full" | "no"
        clearance: number
    }
    min_thickness: number
    filled_areas_thickness?: "no"
    keepout?: ZoneKeepoutSettings
    fill: ZoneFillSettings
    polygon: Coordinate2D[]
    filled_polygon?: ZoneFillPolygon[]
    fill_segments?: ZoneFillSegment[] // pre-v4 only
}

enum KeepoutSetting {
    ALLOWED = "allowed",
    NOT_ALLOWED = "not_allowed",
}

type ZoneKeepoutSettings = {
    tracks: KeepoutSetting
    vias: KeepoutSetting
    pads: KeepoutSetting
    copperpour: KeepoutSetting
    footprints: KeepoutSetting
}

enum IslandRemovalMode {
    ALWAYS = 0,
    NEVER = 1,
    MINIMUM = 2,
}

enum HatchSmoothingLevel {
    NONE = 0,
    FILLED = 1,
    ARC_MIN = 2,
    ARC_MAX = 3,
}

enum HatchBorderAlgorithm {
    ZONE_MINIMUM = 0,
    HATCH_THICKNESS = 1,
}

type ZoneFillSettings = {
    yes?: boolean
    mode?: "hatched"
    thermal_gap?: number
    thermal_bridge_width?: number
    smoothing?: "chamfer" | "fillet"
    island_removal_mode?: IslandRemovalMode
    island_area_min?: number
    hatch_thickness?: number
    hatch_gap?: number
    hatch_orientation?: number
    hatch_smoothing_level?: HatchSmoothingLevel
    hatch_smoothing_value?: number
    hatch_border_algorithm?: HatchBorderAlgorithm
    hatch_min_hole_area?: number
}

type ZoneFillPolygon = {
    layer: CanonicalLayer
    pts: Coordinate2D[]
}

type ZoneFillSegment = {
    layer: CanonicalLayer
    pts: Coordinate2D[]
}

