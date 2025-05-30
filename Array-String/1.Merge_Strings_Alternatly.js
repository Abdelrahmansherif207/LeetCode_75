/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order,
starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
Return the merged string.

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s

*/

const mergeAlternately = function (word1, word2) {
    let left = 0;
    let right = 0;
    let result = "";
    while (left < word1.length && right < word2.length) {
        result += word1[left];
        result += word2[right];
        left++;
        right++;
    }
    if (left < word1.length) {
        result += word1.slice(left);
    }
    if (right < word2.length) {
        result += word2.slice(right);
    }
    return result;
};
