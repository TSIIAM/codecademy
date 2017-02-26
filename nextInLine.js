function nextInLine(arr, item) {
  arr.push(item); // Push the item 6 in line 14.
  return arr.shift();//Shift the firt number of TestArr line 10.
  
 
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
