import './ResBar.css'

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
                    <span>{wood}</span>
                </div>
                <div>
                    <span>Gas: </span>
                    <span>{gas}</span>
                </div>
                <div>
                    <span>Fur: </span>
                    <span>{fur}</span>
                </div>
                <div>
                    <span>Minerals: </span>
                    <span>{minerals}</span>
                </div>
            </div>
        </section>
    )
}
export default ResBar