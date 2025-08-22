function add(a, b) {
  return a + b;
}

function greet(name) {
  return `Hello, ${name}!`;
}

module.exports = { add, greet };

// Run only if called directly
if (require.main === module) {
  console.log(greet("World"));
  console.log("2 + 3 =", add(2, 3));
}
