/* exported position */

/**
 * position takes in a sorted array of integers and returns the index of the value
 * found in the array.  If value is not in the array, it returns the index where it should be.
 * @param array is a sorted array of integers
 * @param value is what we want to find in the array
 * @returns {number}
 */
function position(array,value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value || array[i] > value) {
      return i;
    }
  }
  return i;
}
