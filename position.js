/**
 * Created by Sam on 10/4/2015.
 */
var testArray = [1,3,5,6];

function position(array,value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value || array[i] > value) {
      return i;
    }
  }
  return i;
}
console.log(position(testArray,5));
console.log(position(testArray,2));
console.log(position(testArray,7));
console.log(position(testArray,0));