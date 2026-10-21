import './ResBar.css'
import formatRes from '../../utils/formatters/formatters'

interface resBar{
    wood: number,
    gas: number,
    fur: number,
    minerals: number,
    rates:{woodGain: number, woodUse:number,gasGain:number,furGain:number,mineralsGain:number}
}
function ResBar({wood, gas,fur, minerals, rates}:resBar){
    const resources = [
        {name: 'Wood', amt: wood, gain: rates.woodGain, use:rates.woodUse},
        {name:'Gas', amt:gas, gain:rates.gasGain, use:0},
        {name:'Fur', amt:fur, gain:rates.furGain, use:0},
        {name:'Minerals', amt:minerals, gain:rates.mineralsGain, use:0},
    ]
    return(
        <section className='resbar'>
            <div className='res'>
                {resources.map(resource=>(
                    <div className='resource' key={resource.name}>
                        <div>
                            <span>{resource.name}</span>
                            <span>{formatRes(resource.amt)}</span>
                        </div>
                        <h4 className='resRate'>+{formatRes(resource.gain*60)}/min {resource.use>0&& `| -${formatRes(resource.use*60)}/min`}
                        </h4>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default ResBar