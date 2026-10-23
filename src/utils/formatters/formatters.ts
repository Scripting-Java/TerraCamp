function formatRes(temp: number): string{
    return new Intl.NumberFormat('en-US',{
        maximumFractionDigits:1,
        maximumSignificantDigits: 3,
        }).format(temp)
}
export default formatRes