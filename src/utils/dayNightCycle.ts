export const DAY = 300
export const NIGHT = 180
export const RAINY = 200
export const SUNNY = 350

export type phase = 'day'|'night'
export interface dayNight{
    phase: phase,
    elapsed: number,
    remaining: number
}

export function handleDayNight(totalElapsed: number): dayNight{
    const normalDur = DAY+NIGHT
    const timeLeft = totalElapsed%normalDur
    if(timeLeft<DAY){
        return{
            phase: 'day',
            elapsed: timeLeft,
            remaining: DAY-timeLeft
        }
    }

    const nightLeft = timeLeft-DAY
    return{
        phase: 'night',
        elapsed: nightLeft,
        remaining: NIGHT-nightLeft
    }
}