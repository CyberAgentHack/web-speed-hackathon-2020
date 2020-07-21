export function shuffle(array) {
  const s = array.concat([]);
  array.sort(function () {
    Math.random() - 0.5;
  });
  return array;
}
