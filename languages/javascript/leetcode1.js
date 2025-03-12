// 2529. Maximum Count of Positive Integer and Negative Integer

// Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

// In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
// Note that 0 is neither positive nor negative.

 

// Example 1:

// Input: nums = [-2,-1,-1,1,2,3]
// Output: 3
// Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.
// Example 2:

// Input: nums = [-3,-2,-1,0,0,1,2]
// Output: 3
// Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.
// Example 3:

// Input: nums = [5,20,66,1314]
// Output: 4
// Explanation: There are 4 positive integers and 0 negative integers. The maximum count among them is 4.


// initial spuedo code:
// const nums = [-2,-1,-1,1,2,3]

// nums = array of numbers
// pos, neg = two arrays for positive and negative nums
// if nums[val]=0 then return becasue zero not positive or negative
// if nums[val]>0 thenn push value into pos
// else then push value into neg
// return max of pos and neg

// enhanced spuedo code:
// START
//     INPUT nums (array of integers)
//     SET posCount = 0
//     SET negCount = 0

//     FOR EACH val IN nums
//         IF val > 0 THEN 
//             INCREMENT posCount BY 1
//         ELSE IF val < 0 THEN
//             INCREMENT negCount BY 1
//         END IF
//     END FOR

//     RETURN MAX(posCount, negCount)
// END

// soution 

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let posCount = 0;
    let negCount = 0;
    
    for( val of nums ){
        if(val>0)posCount++;
        else if(val<0)negCount++;
    }

    return Math.max(posCount, negCount);
};

/**
 * Optimized Apporach
 * Instead of manually counting positive and negative numbers, we can leverage  binary search (since the array is sorted in non-decending order) for faster calculations.
 * 
 * START
        INPUT nums (array of integers sorted in non-decreasing order)
        
        // Step 1: Find the first positive number's index
        SET left = 0
        SET right = length of nums - 1
        WHILE left <= right
            SET mid = (left + right) / 2
            IF nums[mid] > 0 THEN
                SET firstPositiveIdx = mid
                SET right = mid - 1     // Search on the left side
            ELSE
                SET left = mid + 1      // Search on the right side
            END IF
        END WHILE

        // Step 2: Find the first zero's index (important for negative count)
        SET left = 0
        SET right = length of nums - 1
        WHILE left <= right
            SET mid = (left + right) / 2
            IF nums[mid] >= 0 THEN
                SET firstZeroIdx = mid
                SET right = mid - 1     // Search on the left side
            ELSE
                SET left = mid + 1      // Search on the right side
            END IF
        END WHILE

        // Step 3: Calculate counts
        IF firstZeroIdx = -1 THEN
            SET negCount = length of nums
        ELSE
            SET negCount = firstZeroIdx

        IF firstPositiveIdx = -1 THEN
            SET posCount = 0
        ELSE
            SET posCount = length of nums - firstPositiveIdx

        // Step 4: Return the maximum count
        RETURN MAX(posCount, negCount)
    END

 */
