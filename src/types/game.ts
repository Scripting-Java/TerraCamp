import type { resourceCarrier } from "../utils/getProd"

export type Tiles = 'campfire'| 'valley'| 'earth'| 'minerals'| 'obelisk'| 'gem'| 'gemReceiver'

export interface Tile{
    id: number,
    type: Tiles,
    x: number,
    y: number,
    unlocked: boolean
    cost?: resourceCarrier
}