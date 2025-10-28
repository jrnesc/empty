/**
 * Pseudo code for calculating cube root of n
 *
 * This implementation uses Newton's method (also known as Newton-Raphson method)
 * which is an iterative approximation algorithm for finding cube roots.
 *
 * The method:
 * - Start with an initial guess
 * - Iteratively improve the guess using the formula: x_new = (2*x + n/(x²)) / 3
 * - This is derived from f(x) = x³ - n, where f'(x) = 3x²
 * - Newton's formula: x_new = x - f(x)/f'(x) = x - (x³ - n)/(3x²)
 * - Simplified: x_new = (2*x + n/(x²)) / 3
 * - Stop when the difference between iterations is smaller than tolerance
 *
 * Time complexity: O(log n) - converges quickly
 * Space complexity: O(1) - constant space
 */
function cubeRoot(n, tolerance = 0.00001)
    // Handle edge cases
    if n == 0
        return 0
    
    // Handle negative numbers (cube root of negative is negative)
    sign = 1
    if n < 0
        sign = -1
        n = -n
    
    // Initialize guess to n/3 (reasonable starting point for cube root)
    guess = n / 3
    if guess == 0
        guess = 1
    
    // Iterate until we reach desired accuracy
    while true
        // Calculate improved guess using Newton's method
        // Formula: x_new = (2*x + n/(x²)) / 3
        newGuess = (2 * guess + n / (guess * guess)) / 3
        
        // Check if we've converged (difference is less than tolerance)
        if absolute(newGuess - guess) < tolerance
            return sign * newGuess
        
        // Update guess for next iteration
        guess = newGuess