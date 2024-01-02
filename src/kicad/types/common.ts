export enum CanonicalLayer {
    // Copper Layers
    CU = "*.Cu", // Wildcard
    F_CU = "F.Cu", // Front copper layer
    IN1_CU = "In1.Cu", // Inner copper layer 1
    IN2_CU = "In2.Cu", // Inner copper layer 2
    IN3_CU = "In3.Cu", // Inner copper layer 3
    IN4_CU = "In4.Cu", // Inner copper layer 4
    IN5_CU = "In5.Cu", // Inner copper layer 5
    IN6_CU = "In6.Cu", // Inner copper layer 6
    IN7_CU = "In7.Cu", // Inner copper layer 7
    IN8_CU = "In8.Cu", // Inner copper layer 8
    IN9_CU = "In9.Cu", // Inner copper layer 9
    IN10_CU = "In10.Cu", // Inner copper layer 10
    IN11_CU = "In11.Cu", // Inner copper layer 11
    IN12_CU = "In12.Cu", // Inner copper layer 12
    IN13_CU = "In13.Cu", // Inner copper layer 13
    IN14_CU = "In14.Cu", // Inner copper layer 14
    IN15_CU = "In15.Cu", // Inner copper layer 15
    IN16_CU = "In16.Cu", // Inner copper layer 16
    IN17_CU = "In17.Cu", // Inner copper layer 17
    IN18_CU = "In18.Cu", // Inner copper layer 18
    IN19_CU = "In19.Cu", // Inner copper layer 19
    IN20_CU = "In20.Cu", // Inner copper layer 20
    IN21_CU = "In21.Cu", // Inner copper layer 21
    IN22_CU = "In22.Cu", // Inner copper layer 22
    IN23_CU = "In23.Cu", // Inner copper layer 23
    IN24_CU = "In24.Cu", // Inner copper layer 24
    IN25_CU = "In25.Cu", // Inner copper layer 25
    IN26_CU = "In26.Cu", // Inner copper layer 26
    IN27_CU = "In27.Cu", // Inner copper layer 27
    IN28_CU = "In28.Cu", // Inner copper layer 28
    IN29_CU = "In29.Cu", // Inner copper layer 29
    IN30_CU = "In30.Cu", // Inner copper layer 30
    B_CU = "B.Cu", // Back copper layer

    // Adhesive Layers
    ADHES = "*.Adhes", // Wildcard
    B_ADHES = "B.Adhes", // Back adhesive layer
    F_ADHES = "F.Adhes", // Front adhesive layer

    // Paste Layers
    PASTE = "*.Paste", // Wildcard
    B_PASTE = "B.Paste", // Back solder paste layer
    F_PASTE = "F.Paste", // Front solder paste layer

    // Silkscreen Layers
    SILKS = "*.Silk", // Wildcard
    B_SILKS = "B.SilkS", // Back silk screen layer
    F_SILKS = "F.SilkS", // Front silk screen layer

    // Mask Layers
    MASK = "*.Mask", // Wildcard
    B_MASK = "B.Mask", // Back solder mask layer
    F_MASK = "F.Mask", // Front solder mask layer

    // User Layers
    USER = "*.User", // Wildcard
    DWGS_USER = "Dwgs.User", // User drawing layer
    CMTS_USER = "Cmts.User", // User comment layer
    ECO1_USER = "Eco1.User", // User engineering change order layer 1
    ECO2_USER = "Eco2.User", // User engineering change order layer 2

    EDGE_CUTS = "Edge.Cuts", // Board outline layer

    // Courtyard Layers
    CRTYD = "*.CrtYd", // Wildcard
    F_CRTYD = "F.CrtYd", // Footprint front courtyard layer
    B_CRTYD = "B.CrtYd", // Footprint back courtyard layer

    // Fab Layers
    FAB = "*.Fab", // Wildcard
    F_FAB = "F.Fab", // Footprint front fabrication layer
    B_FAB = "B.Fab", // Footprint back fabrication layer

    // User-Definable Layers
    USER_1 = "User.1", // User definable layer 1
    USER_2 = "User.2", // User definable layer 2
    USER_3 = "User.3", // User definable layer 3
    USER_4 = "User.4", // User definable layer 4
    USER_5 = "User.5", // User definable layer 5
    USER_6 = "User.6", // User definable layer 6
    USER_7 = "User.7", // User definable layer 7
    USER_8 = "User.8", // User definable layer 8
    USER_9 = "User.9", // User definable layer 9
}

export enum LayerType {
    JUMPER = "jumper",
    MIXED = "mixed",
    POWER = "power",
    SIGNAL = "signal",
    USER = "user",
}

export enum ZoneConnect {
    NOT_CONNECTED = 0,
    THERMAL_RELIEFS = 1,
    SOLID_FILL = 2,
}

export type UUID = `${string}-${string}-${string}-${string}-${string}`

export type Properties = { [key: string]: string }

export type Position = {
    x: number
    y: number
    angle?: number
}

export type Coordinate2D = {
    x: number
    y: number
}

export type Coordinate3D = {
    x: number
    y: number
    z: number
}

export type StrokeDefinition = {
    width: number
    type: (
        "dash" |
        "dash_dot" |
        "dash_dot_dot" |
        "dot" |
        "default" |
        "solid"
    )
    color: {
        r: number
        g: number
        b: number
        a: number
    }
}

export type TextEffects = {
    font: {
        face?: string
        size: {
            height: number
            width: number
        }
        thickness?: number
        bold?: boolean
        italic?: boolean
        line_spacing?: number // Not supported
    }
    justify?: {
        x?: "left" | "right"
        y?: "top" | "bottom"
        mirror?: boolean
    }
    hide?: boolean
}
