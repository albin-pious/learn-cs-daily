// 2401. Longest Nice Subarray
// Medium
// Topics
// Companies
// Hint
// You are given an array nums consisting of positive integers.

// We call a subarray of nums nice if the bitwise AND of every pair of elements that are in different positions in the subarray is equal to 0.

// Return the length of the longest nice subarray.

// A subarray is a contiguous part of an array.

// Note that subarrays of length 1 are always considered nice.

 

// Example 1:

// Input: nums = [1,3,8,48,10]
// Output: 3
// Explanation: The longest nice subarray is [3,8,48]. This subarray satisfies the conditions:
// - 3 AND 8 = 0.
// - 3 AND 48 = 0.
// - 8 AND 48 = 0.
// It can be proven that no longer nice subarray can be obtained, so we return 3.
// Example 2:

// Input: nums = [3,1,5,11,13]
// Output: 1
// Explanation: The length of the longest nice subarray is 1. Any subarray of length 1 can be chosen.
 

// Constraints:

// 1 <= nums.length <= 105
// 1 <= nums[i] <= 109

/**
 * Initial Spuedo Code:
 * ---------------------
 * 
 * START
 *      INPUt nums (array of positive integers)
 *      SET nice = int array[]
 *      SET niceLength = 0
 *      
 *      FOR each num in nums
 *          IF val & val+1===0 THEN
 *              PUSH val AND val+1 INTO nice
 *          END IF
 *          IF length of nice greater than nums THEN
 *              niceLength = length of nice
 *          END IF
 *      END FOR
 *      RETURN niceLength
 */

/**
 * Revised Code:
 * START
 *      INPUt nums (array of positive integers)
 *      SET left = 0
 *      SET bitMask = 0 // Tracks the bitwise OR of the current subarray
 *      SET maxLen = 0
 * 
 *      FOR right FROM 0 TO nums.length-1
 *          WHILE (bitMask & nums[right])!= 0
 *              REMOVE nums[left] FROM bitMask
 *              INCREMENT left
 *          END WHILE
 * 
 *          ADD nums[right] TO bitMask
 *          UPDATE maxLength = MAX(maxLength, right - left + 1) 
 *      END FOR
 * 
 *      RETURN maxLength
 * END
 */

const nums = [1, 3, 8, 48, 10];
let left = 0;
let bitMask = 0;
let maxLen = 0;

console.log(`
Initial State:
-----------------
Input: ${nums}
bitMask: ${bitMask.toString(2)} (binary)
left: ${left}
maxLen: ${maxLen}
-----------------
`);

for (let right = 0; right < nums.length; right++) {
    console.log(`\n➡️ Checking nums[${right}] = ${nums[right]} (Binary: ${nums[right].toString(2)})`);

    while ((bitMask & nums[right]) !== 0) {
        console.log(`  ⚠️ Conflict Detected!`);
        console.log(`  Before Removal: bitMask = ${bitMask.toString(2)} (decimal: ${bitMask})`);

        bitMask ^= nums[left];  // Remove nums[left] from bitMask
        console.log(`  Removing nums[${left}] = ${nums[left]} (Binary: ${nums[left].toString(2)})`);
        
        left++;
        console.log(`  After Removal: bitMask = ${bitMask.toString(2)} (decimal: ${bitMask}), left = ${left}`);
    }

    // Add current number to bitMask
    bitMask |= nums[right];
    console.log(`✅ Adding nums[${right}] = ${nums[right]} | New bitMask = ${bitMask.toString(2)} (decimal: ${bitMask})`);

    // Track maximum subarray length
    maxLen = Math.max(maxLen, right - left + 1);
    console.log(`📏 Updated maxLen = ${maxLen}`);
}

console.log(`\n🎯 Final Result: ${maxLen}`);


