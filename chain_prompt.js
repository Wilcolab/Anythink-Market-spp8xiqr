function toKebabCase(str) {
	if (typeof str !== 'string') {
		throw new Error('Input must be a string');
	}
	if (str.length === 0) {
		return '';
	}
	// Step 1: Convert to lowercase
	let result = str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
	// Step 2: Replace spaces, underscores, and hyphens with hyphens
	result = result.replace(/[\s_]+/g, '-');
	// Step 3: Remove non-alphanumeric except hyphens
	result = result.replace(/[^a-z0-9-]+/g, '');
	// Remove leading/trailing/multiple hyphens
	result = result.replace(/-+/g, '-').replace(/^-|-$/g, '');
	return result;
}

// Example usage:
// console.log(toKebabCase('Hello World')); // 'hello-world'
// console.log(toKebabCase('user_id')); // 'user-id'
// console.log(toKebabCase('camelCaseString')); // 'camel-case-string'
// Step 1: Convert the input string to lowercase.
// Step 2: Replace all spaces, underscores, and camelCase transitions with hyphens.
// Step 3: Remove any non-alphanumeric characters except hyphens.
// Example: toKebabCase('Hello World') should return 'hello-world'
// Example: toKebabCase('user_id') should return 'user-id'
// Example: toKebabCase('camelCaseString') should return 'camel-case-string'

function toKebabCase(str) {
	if (typeof str !== 'string') {
		throw new Error('Input must be a string');
	}
	if (str.length === 0) {
		return '';
	}
	// Step 1: Convert to lowercase
	let result = str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
	// Step 2: Replace spaces, underscores, and hyphens with hyphens
	result = result.replace(/[\s_]+/g, '-');
	// Step 3: Remove non-alphanumeric except hyphens
	result = result.replace(/[^a-z0-9-]+/g, '');
	// Remove leading/trailing/multiple hyphens
	result = result.replace(/-+/g, '-').replace(/^-|-$/g, '');
	return result;
}

// Example usage:
// console.log(toKebabCase('Hello World')); // 'hello-world'
// console.log(toKebabCase('user_id')); // 'user-id'
// console.log(toKebabCase('camelCaseString')); // 'camel-case-string'
