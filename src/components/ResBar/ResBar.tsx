import './ResBar.css'
import formatRes from '../../utils/formatters/formatters'

interface resBar{
    wood: number,
    gas: number,
    fur: number,
    minerals: number,
}
function ResBar({wood, gas,fur, minerals}:resBar){
    return(
        <section className='resbar'>
            <div className='res'>
                <div>
                    <span>Wood: </span>
                    <span>{formatRes(wood)}</span>
                </div>
                <div>
                    <span>Gas: </span>
                    <span>{formatRes(gas)}</span>
                </div>
                <div>
                    <span>Fur: </span>
                    <span>{formatRes(fur)}</span>
                </div>
                <div>
                    <span>Minerals: </span>
                    <span>{formatRes(minerals)}</span>
                </div>
            </div>
        </section>
    )
}
export default ResBar