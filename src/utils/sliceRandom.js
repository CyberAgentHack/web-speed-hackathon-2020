/**
 *
 * @param {[]} array
 * @param {number} count
 * @returns {[]}
 */
export function sliceRandom(array, count) {
  const randArr = [];
  let rand;

  for (var i = 0, length = array.length; i < count; i++, length--) {
    rand = Math.floor(Math.random() * length);
    randArr.push(array.splice(rand, 1)[0]);
  }

  return randArr;
}
