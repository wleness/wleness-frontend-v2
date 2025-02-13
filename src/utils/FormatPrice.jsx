function FormatPrice({ price, currency }) {
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 0,
  }).format(price);
}

export default FormatPrice;
