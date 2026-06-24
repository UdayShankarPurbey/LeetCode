/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    const stringLength = s.length;
    const strData = {}
    let newStr = null;
    for(let i = 0 ; i< stringLength ; i ++) {
        const letter = s[i];

        if(strData[letter] == undefined) {
            strData[letter] = i;
        } else {
            newStr = newStr.slice(newStr.indexOf(letter) + 1)
        }
        
        newStr = newStr == null ? letter : newStr + letter
        maxLength = maxLength < newStr.length ? newStr.length : maxLength

        
    }

    return maxLength;

}