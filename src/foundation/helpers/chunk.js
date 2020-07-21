export function chunk(items, n) {
  const chunks = [];
  let sub = [];

  for (let i = 0; i < items.length; i += 1) {
    if (i !== 0 && i % n === 0) {
      chunks.push(sub);
      sub = [];
    }
    sub.push(items[i]);
  }
  if (sub.length) {
    chunks.push(sub);
  }

  return chunks;
}
