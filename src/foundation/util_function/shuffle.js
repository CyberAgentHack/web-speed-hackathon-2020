export function shuffle(array) {
  const s = array.concat([]);
  s.sort(function () {
    Math.random() - 0.5;
  });
  return s;
}
