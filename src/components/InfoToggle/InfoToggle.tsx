import ResBar from "../ResBar/ResBar";
import './InfoToggle.css'

interface InfoToggle{
    wood: number,
    gas:number,
    fur: number,
    minerals: number,
    rates:{
        woodGain:number,
        woodUse:number,
        gasGain:number,
        furGain:number,
        mineralsGain: number
    }
}

function InfoToggle(toggle: InfoToggle){
    return(
        <section className="infoToggle">
            <ResBar wood={toggle.wood}gas={toggle.gas}fur={toggle.fur}minerals={toggle.minerals}rates={toggle.rates}/>
        </section>
    )
}
export default InfoToggle