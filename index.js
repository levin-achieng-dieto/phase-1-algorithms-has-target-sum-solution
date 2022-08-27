function hasTargetSum(array, target) {
 const seenNumbers = {};
 for(let i=0; i<array.length; i++){
  const complement = target -array[i];
  if (seenNumbers[complement]) return true;
  seenNumbers[array[i]] = true;
 }
 return false
}

/* 
  Write the Big O time complexity of your function here
  runtime: 0(n^2)
*/

/* 
  Add your pseudocode here
  hasTargetSum([1,2,3,4], 6)
  iterate through each number
  for the urrent number, identify a complement that adds
  upto target

*/

/*
  Add written explanation of your solution here
  write a function called hasTargetSum that takes in two parameters, an array and
  target value. iterate through the array to find pairs 
  whose sum will equal to to the target then return true 
  else return false.
  if i have array [1,2,3,4] and my target is 5, it should 
  return true since 1+4=5
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([5, 6, 2, 7], 13));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([20, 6, 16], 10));
  
}

module.exports = hasTargetSum;
