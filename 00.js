const text = "abbcccddddeeeee";
const pattern = /b*/g;

const matches = text.match(pattern);
console.log(matches); // Output: [ 'b', '', '', '', '', '' ]
