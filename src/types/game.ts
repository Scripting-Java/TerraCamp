export type Tiles = 'campfire'| 'valley'| 'earth'| 'minerals'| 'obelisk'| 'gem'| 'locked'

export interface Tile{
    id: number,
    type: Tiles,
    x: number,
    y: number,
    unlocked: boolean
}