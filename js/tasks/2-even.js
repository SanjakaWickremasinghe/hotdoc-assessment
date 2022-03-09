#! npm test ./tests/2-even.js

/**
 * Returns true if the input is even
 * @param {Number} i The integer to check.
 * @returns {Boolean} Whether the input is even.
 */
export default function isNumberEven(i) {
    let even = false;
    
    if(i%2==0){
        even = true;
        return even;
    } else {
        return even;
    }
}
