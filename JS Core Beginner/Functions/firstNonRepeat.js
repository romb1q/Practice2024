// 3 task

function firstNonRepeatingChar(str) {
    const charCount = {};
    
    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}

console.log(firstNonRepeatingChar("aaaeara")); // e
