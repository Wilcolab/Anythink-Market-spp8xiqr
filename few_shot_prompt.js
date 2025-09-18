// Write a JavaScript function toCamelCase that converts strings to camelCase.
// Example 1: toCamelCase('first name') should return 'firstName'
// Example 2: toCamelCase('user_id') should return 'userId'

function toCamelCase(str) {
	return str
		.toLowerCase()
		.replace(/[-_\s]+(.)?/g, (match, chr) => chr ? chr.toUpperCase() : '')
		.replace(/^(.)/, (match, chr) => chr.toLowerCase());
}

// Example usage:
// console.log(toCamelCase('first name')); // 'firstName'
// console.log(toCamelCase('user_id')); // 'userId'
