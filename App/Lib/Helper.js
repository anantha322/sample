export const convertMeterToKm = (value, numberOfDecimalPoint = 2) => {
    return (value / 1000).toFixed(numberOfDecimalPoint)
}
