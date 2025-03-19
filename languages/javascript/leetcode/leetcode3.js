// 1768. Merge Strings Alternately
// Easy
// Topics
// Companies
// Hint
// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

 

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s
// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q 
// merged: a p b q c   d
 

// Constraints:

// 1 <= word1.length, word2.length <= 100
// word1 and word2 consist of lowercase English letters.

/**
 * SPUEDO CODE:
 * START
        SET merged = ""    // Initialize an empty string for the result
        SET i = 0          // Initialize a counter for index tracking
        WHILE i < word1.length OR i < word2.length
            IF i < word1.length THEN
                APPEND word1[i] TO merged
            END IF
            IF i < word2.length THEN
                APPEND word2[i] TO merged
            END IF
            INCREMENT i
        END WHILE
        RETURN merged
    END
*/

const word1 = "abc", word2 = "pqr";
let i = 0;
let merged='';
console.log('start...');

while(i< word1.length || i< word2.length){
    
    if(i < word1.length){
        merged += word1[i]
    }
    if(i < word2.length){
        merged += word2[i]
    }
    i++;
}

console.log('result is ', merged);

