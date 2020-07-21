export function chunk(array, chunkSize) {
  const s = array.concat([]);
  let returnArray = [];
  let t = [];
  s.forEach((value, index) => {
    t.push(value);
    if (index % chunkSize === chunkSize - 1) {
      returnArray.push(t);
      t = [];
    }
  });
  return returnArray;
}
