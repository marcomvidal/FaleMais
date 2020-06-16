export const helpers = {
  formatMoney: (locale, value) => value.toLocaleString(locale, { minimumFractionDigits: 2 })
};