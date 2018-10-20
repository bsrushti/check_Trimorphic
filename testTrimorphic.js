const assert = require('assert');
const testTrimorphic = require('./checkTrimorphic.js').testTrimorphic;
let inputs = [2,4,3,5];
let result = [];
let expectedOpt = [ false, true, false, true ];
for (index = 0; index < inputs.length; index ++) {
  result[index] = testTrimorphic(inputs[index]);
}
assert.deepEqual(result,expectedOpt);
console.log("Tests Passed");






