export type Tiles = 'campfire'| 'valley'| 'earth'| 'minerals'| 'obelisk'| 'gem'| 'locked'| 'gemReceiver'

export interface Tile{
    id: number,
    type: Tiles,
    x: number,
    y: number,
    unlocked: boolean
}