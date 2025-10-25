/**
 * Pseudo code for calculating factorial of n
 *
 * Factorial is defined as:
 * - n! = n * (n-1) * (n-2) * ... * 1
 * - 0! = 1 (by definition)
 * - 1! = 1
 *
 * This implementation uses recursion to calculate the factorial.
 * Time complexity: O(n)
 * Space complexity: O(n) due to call stack
 */
function factorial(n)
    // Base case: factorial of 0 or 1 is 1
    if n == 0 or n == 1
        return 1
    // Recursive case: n! = n * (n-1)!
    else
        return n * factorial(n - 1)
