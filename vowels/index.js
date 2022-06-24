// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let result = 0
    str.toLowerCase().split('').forEach(i => {
        if (i === 'a' || i === 'i' || i === 'e' || i === 'o' || i === 'u') {
            result++
        }
    })
    return result;
}

module.exports = vowels;
