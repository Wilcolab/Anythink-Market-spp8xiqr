// Write a JavaScript function toCamelCase that converts strings to camelCase.
// Here are some examples:
//   first name       → firstName
//   user_id          → userId
//   SCREEN_NAME      → screenName
//   mobile-number    → mobileNumber
// Implement the function to handle these cases.

function toCamelCase(str) {
	return str
		.toLowerCase()
		.replace(/[-_\s]+(.)?/g, (match, chr) => chr ? chr.toUpperCase() : '')
		.replace(/^(.)/, (match, chr) => chr.toLowerCase());
}

// Example usage:
// console.log(toCamelCase('first name')); // 'firstName'
// console.log(toCamelCase('user_id')); // 'userId'
// console.log(toCamelCase('SCREEN_NAME')); // 'screenName'
// console.log(toCamelCase('mobile-number')); // 'mobileNumber'
