export default function formatMoney(amount = 0) {
  const formatter = Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'JPY',
    maximumFractionDigits: 2,
  });
  return formatter.format(amount);
}
