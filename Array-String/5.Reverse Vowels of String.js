/*
    Given String s, reverse only all the vowels in the string and return it
    The vowels are 'a','e','i','o' and 'u',
    and they can appear in lower or upper cases, more than once 
*/

/*
Example 1:
Input: s = "IceCreAm"
Output: "AceCreIm"

Explanation:
The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:
Input: s = "leetcode"
Output: "leotcede"
*/

const reverseVowels = function (s) {
    let vowels = new Set(["a", "e", "i", "o", "u"]);
    let left = 0;
    let right = s.length - 1;
    let arr = s.split("");
    while (left < right) {
        if (!vowels.has(s[right].toLowerCase())) {
            right--;
            continue;
        }
        if (!vowels.has(s[left].toLowerCase())) {
            left++;
            continue;
        }
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }
    return arr.join("");
};

console.log(reverseVowels("IceCreAm")); // AceCreIm
// console.log(reverseVowels("leetcode"));
