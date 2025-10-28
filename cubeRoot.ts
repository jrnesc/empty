/**
 * Pseudo code for calculating cube root of n
 *
 * This implementation uses Newton's method which is an iterative
 * approximation algorithm for finding cube roots.
 *
 * The method:
 * - Start with an initial guess
 * - Iteratively improve the guess using the formula: x_new = (2*x + n/(x*x)) / 3
 * - Stop when the difference between iterations is smaller than tolerance
 *
 * Newton's method for cube root is derived from f(x) = x³ - n = 0
 * Using the formula: x_new = x - f(x)/f'(x) = x - (x³ - n)/(3x²)
 * Simplifying: x_new = (2x³ + n)/(3x²) = (2*x + n/(x*x)) / 3
 *
 * Time complexity: O(log n) - converges quickly
 * Space complexity: O(1) - constant space
 */
function cubeRoot(n, tolerance = 0.00001)
    // Handle edge cases
    if n == 0
        return 0
    
    // Handle negative numbers (cube root of negative is negative)
    isNegative = n < 0
    if isNegative
        n = -n  // Work with absolute value
    
    // Initialize guess to n/3 (reasonable starting point for cube root)
    guess = n / 3
    
    // For very small numbers, start with a better guess
    if n < 1
        guess = n
    
    // Iterate until we reach desired accuracy
    while true
        // Calculate improved guess using Newton's method
        // Formula: x_new = (2*x + n/(x*x)) / 3
        newGuess = (2 * guess + n / (guess * guess)) / 3
        
        // Check if we've converged (difference is less than tolerance)
        if absolute(newGuess - guess) < tolerance
            // Apply sign if original number was negative
            if isNegative
                return -newGuess
            else
                return newGuess
        
        // Update guess for next iteration
        guess = newGuess