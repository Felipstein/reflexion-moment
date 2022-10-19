export default function formatDate(date) {
  const ms = Date.parse(date);

  return new Date(ms).toLocaleString('pt-br', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}
