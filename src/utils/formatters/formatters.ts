function formatRes(temp: number): string{
    return new Intl.NumberFormat('en-US',{
        maximumFractionDigits:0,
        }).format(temp)
}
export default formatRes