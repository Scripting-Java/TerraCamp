function formatRes(temp: number): string{
    if(Math.abs(temp)<1){
    return new Intl.NumberFormat('en-US',{
        notation:"compact",
        maximumFractionDigits: 2,
        }).format(temp)
    }
    else
        return new Intl.NumberFormat('en-US',{
        notation:"compact",
        maximumSignificantDigits: 3,
        }).format(temp)
}
export default formatRes