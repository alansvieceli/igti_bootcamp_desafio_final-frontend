const formatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

function formatNumber(value) {
  return formatter.format(value);
}

function formatPercentage(value) {
  const stringValue = value.toFixed(2);
  return stringValue.replace('.', ',') + '%';
}

function formatInteger(value) {
  return ('0' + value).slice(-2);
}

export { formatNumber, formatPercentage, formatInteger };
