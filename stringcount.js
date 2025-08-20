
  
    function compressString(str) {
        let charCount = {};  // Object to store character frequencies
        let result = "";
    
        for (let char of str) {
            charCount[char] = (charCount[char] || 0) + 1;
        }
    
        for (let char in charCount) {
            result += char + charCount[char];
        }
    
        return result;
    }
    
    // Example usage:
    let str = "aabbbcc";
    console.log(compressString(str));