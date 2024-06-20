'use strict';
// 3 task
function findVowelsLettesInString(string) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    let vowelsCount = 0;
    for (let i =0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            vowelsCount++;
        }
    }
    return vowelsCount; 
}
console.log(findVowelsLettesInString("string"));
