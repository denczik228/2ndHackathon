// Currency options to get NIS symbol near amount
export const currencyFormatter = new Intl.NumberFormat(undefined, {
  currency: "ils",
  style: "currency",
  //zero decimals
  minimumFractionDigits: 0,
})
