import { UUID } from "./common.js"

export type Group = {
    id: UUID
    name: string
    members: UUID[]
}
