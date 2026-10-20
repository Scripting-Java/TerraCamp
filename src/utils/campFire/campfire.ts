export type campfireTiers = 'small' | 'medium' | 'large'| 'beacon'
export type campfireStyle = 'default' |'cozy' | 'redFlameDecor' | 'blueFlameDecor'| 'blueBeacon'|'olympicTorch'
//cozy is a visually smaller campfire, but carries the same buffs as large.
//All decor flames also carry the same tier as large

export interface campfireStatus {
    lit: boolean,
    elapsed: number,
    grace: number,
    tier: campfireTiers,
    style: campfireStyle
}
export const dayFuel = 120
export const nightFuel = 30
export const gracePeriod = 30

