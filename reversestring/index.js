// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    debugger;
    return str.split('').reduce((reversed, character) => {
        return character + reversed;
    }, '')
}

reverse('123')
module.exports = reverse;


// // Solution1:
// function reverse(str) {
//     const arr = str.split('');
//     arr.reverse();
//     return arr.join('')
// }

// function reverse(str) {
//     let reversed = '';
//     for (let character of str) {
//         reversed = character + reversed
//     }
//     return reversed;
// }
