// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let result="";
    let maxNum=0;
    let dic={};
    str.split('').map((ea)=>{
        dic[ea]=dic[ea]+1 || 1;
        if(dic[ea]>maxNum){
            result=ea;
            maxNum=dic[ea];
        }
    })
    return result
}

module.exports = maxChar;
