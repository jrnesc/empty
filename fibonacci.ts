/**
 * Pseudo code for calculating the nth Fibonacci number
 *
 * Fibonacci sequence is defined as:
 * - F(0) = 0
 * - F(1) = 1
 * - F(n) = F(n-1) + F(n-2) for n > 1
 *
 * The sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 *
 * This implementation uses recursion to calculate the nth Fibonacci number.
 * Time complexity: O(2^n) - exponential due to repeated calculations
 * Space complexity: O(n) due to call stack
 *
 * Note: For large values of n, consider using dynamic programming or iterative approach
 * for better performance.
 */
function fibonacci(n)
    // Base cases
    if n == 0
        return 0
    if n == 1
        return 1
    
    // Recursive case: F(n) = F(n-1) + F(n-2)
    else
        return fibonacci(n - 1) + fibonacci(n - 2)

/**
 * Optimized iterative approach (pseudocode)
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
function fibonacciIterative(n)
    if n == 0
        return 0
    if n == 1
        return 1
    
    // Initialize first two Fibonacci numbers
    prev2 = 0
    prev1 = 1
    current = 0
    
    // Calculate iteratively
    for i = 2 to n
        current = prev1 + prev2
        prev2 = prev1
        prev1 = current
    
    return current