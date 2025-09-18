// Write a JavaScript function toCamelCase that converts a string to camelCase.
// The function should handle strings with spaces, underscores, hyphens, and mixed casing.
// Ignore non-alphanumeric characters except as word separators.
// If the input is not a string, throw an error with a descriptive message.
// If the input is an empty string, return an empty string.
// For example:
//   toCamelCase('first name')       → 'firstName'
//   toCamelCase('user_id')          → 'userId'
//   toCamelCase('SCREEN_NAME')      → 'screenName'
//   toCamelCase('mobile-number')    → 'mobileNumber'
// console.log(toCamelCase('user_id')); // 'userId'
// console.log(toCamelCase('SCREEN_NAME')); // 'screenName'
// console.log(toCamelCase('mobile-number')); // 'mobileNumber'
// toCamelCase(123); // throws Error
// Write a JavaScript function toCamelCase that converts a string to camelCase.
// Requirements:
// - Handle spaces, underscores, hyphens, and mixed casing as word separators
// - Ignore non-alphanumeric characters except as word separators
// - If input is not a string, throw an error with a descriptive message
// - If input is an empty string, return an empty string
// Examples:
//   toCamelCase('first name')       → 'firstName'
//   toCamelCase('user_id')          → 'userId'
//   toCamelCase('SCREEN_NAME')      → 'screenName'
//   toCamelCase('mobile-number')    → 'mobileNumber'
//   toCamelCase(123)                → should throw an error

function toCamelCase(str) {
	if (typeof str !== 'string') {
		throw new Error('Input must be a string');
	}
	if (str.length === 0) {
		return '';
	}
	return str
		.replace(/[^a-zA-Z0-9\s_-]+/g, '')
		.replace(/([a-z])([A-Z])/g, '$1 $2')
		.replace(/[\s_-]+(.)?/g, (match, chr, offset) =>
			chr ? (offset === 0 ? chr.toLowerCase() : chr.toUpperCase()) : ''
		)
		.replace(/^(.)/, (match, chr) => chr.toLowerCase());
}

// Example usage:
// console.log(toCamelCase('first name')); // 'firstName'
// console.log(toCamelCase('user_id')); // 'userId'
// console.log(toCamelCase('SCREEN_NAME')); // 'screenName'
// console.log(toCamelCase('mobile-number')); // 'mobileNumber'
// toCamelCase(123); // throws Error
