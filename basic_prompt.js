// Write a function called toCamelCase that converts a string to camelCase.
// For example, toCamelCase('hello world') should return 'helloWorld'.

function toCamelCase(str) {
  return str
    .toLowerCase()
    .replace(/\s+(.)/g, (match, chr) => chr.toUpperCase());
}

// Example usage:
// console.log(toCamelCase('hello world')); // 'helloWorld'