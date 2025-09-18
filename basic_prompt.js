// Write a function called toCamelCase that converts a string to camelCase.
// For example, toCamelCase('hello world') should return 'helloWorld'.

function toCamelCase(str) {
	return str
		.toLowerCase()
		.replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
}

// Example usage:
// console.log(toCamelCase('hello world')); // 'helloWorld'