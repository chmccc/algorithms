const roundToTwo = (num) => {
  return +(Math.round(num + 'e+2') + 'e-2')
}

const breakdownTaxCanada = (PSTRate, GSTRate, totalTaxAmount) => {
    const combinedRate = GSTRate + PSTRate
    const PSTAmount = roundToTwo(roundToTwo(PSTRate / combinedRate) * totalTaxAmount)
    const GSTAmount = roundToTwo(roundToTwo(GSTRate / combinedRate) * totalTaxAmount)
    return { GSTAmount, PSTAmount }
}
