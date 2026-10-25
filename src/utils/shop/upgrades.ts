export type upgradeType = 'wood'|'fur'|'gas'|'minerals'
export type buy = 'decor'|'upgrade'

interface upgrade{
    max:number,
    bonusPerLevel: number,
    maxBonus: number
}

const upgrades: Record<upgradeType, upgrade> = {wood: {max:10,bonusPerLevel:0.015,maxBonus:.15}, fur: {max:10,bonusPerLevel:0.015,maxBonus:.15}, gas: {max:5,bonusPerLevel:0.02,maxBonus:.1}, minerals: {max:5,bonusPerLevel:0.02,maxBonus:.1}}
export type upgradeLevels = Record<upgradeType, number>

export const starting: upgradeLevels = {wood:0,fur:0,gas:0,minerals:0}

interface buyResult{
    levels:upgradeLevels,
    gas:number
}
export function getUpgradeCost(type: upgradeType, level:number): number{
    const upgrade = upgrades[type]
    if(level>=upgrade.max)
        return 0
    return Math.round(3+(level/(upgrade.max-1))*12)
}
export function buyUpgrade(type:upgradeType, levels:upgradeLevels, gas:number): buyResult|null{
    const upgrade = upgrades[type]
    const lev = levels[type]
    if(lev>=upgrade.max)
        return null
    const cost = getUpgradeCost(type,lev)
    if(gas<cost)
        return null
    return{levels: {...levels,[type]:lev+1}, gas:gas-cost}
}
export function getUpgradeBonus(type:upgradeType, level:number): number{
    return Math.min(level*upgrades[type].bonusPerLevel, upgrades[type].maxBonus)
}


