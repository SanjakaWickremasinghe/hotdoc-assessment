#! npm test ./tests/4-longest.js

/**
 * Returns the longest string out of an array of strings.
 * @param {Array} strings An array that might contain strings.
 * @returns {String} The longest string from within the input array.
 */
export default function longestString(strings) {
    let longest = strings.reduce((a,b) => {
        return a.length > b.length ? a : b
    }, '');
    console.log(longest);

    return longest;
}
