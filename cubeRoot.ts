/**
 * Pseudo code for calculating cube root of n
 *
 * This implementation uses Newton's method (also known as Newton-Raphson method)
 * which is an iterative approximation algorithm for finding cube roots.
 *
 * The method:
 * - Start with an initial guess
 * - Iteratively improve the guess using the formula: x_new = (2*x + n/(x^2)) / 3
 * - Stop when the difference between iterations is smaller than tolerance
 *
 * Time complexity: O(log n) - converges quickly
 * Space complexity: O(1) - constant space
 */
function cubeRoot(n, tolerance = 0.00001)
    // Handle edge cases
    if n == 0
        return 0
    if n == 1 or n == -1
        return n

    // Handle negative numbers (cube root of negative is negative)
    isNegative = false
    if n < 0
        isNegative = true
        n = -n

    // Initialize guess to n/3 (reasonable starting point)
    guess = n / 3

    // Iterate until we reach desired accuracy
    while true
        // Calculate improved guess using Newton's method
        // For cube root, we solve x^3 - n = 0
        // Newton's formula: x_new = x - f(x)/f'(x)
        // Where f(x) = x^3 - n, f'(x) = 3x^2
        // This gives us: x_new = x - (x^3 - n)/(3x^2) = (2*x + n/x^2)/3
        newGuess = (2 * guess + n / (guess * guess)) / 3

        // Check if we've converged (difference is less than tolerance)
        if absolute(newGuess - guess) < tolerance
            result = newGuess
            // Apply sign for negative input
            if isNegative
                result = -result
            return result

        // Update guess for next iteration
        guess = newGuess