// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let result = ""
    let maxNum = 0;
    const strObj = {}
    str.split('').forEach(i => {
        strObj[i] = strObj[i] + 1 | 1;
        if (strObj[i] > maxNum) {
            maxNum = strObj[i];
            result = i
        }
    })
    return result;
}

module.exports = maxChar;
