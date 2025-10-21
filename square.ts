/**
 * Pseudo code for calculating square root of n
 *
 * This implementation uses the Babylonian method (also known as Heron's method)
 * which is an iterative approximation algorithm for finding square roots.
 *
 * The method:
 * - Start with an initial guess
 * - Iteratively improve the guess using the formula: x_new = (x + n/x) / 2
 * - Stop when the difference between iterations is smaller than tolerance
 *
 * Time complexity: O(log n) - converges quickly
 * Space complexity: O(1) - constant space
 */
function squareRoot(n, tolerance = 0.00001)
    // Handle edge cases
    if n < 0
        throw error "Cannot calculate square root of negative number"
    if n == 0 or n == 1
        return n

    // Initialize guess to n/2 (reasonable starting point)
    guess = n / 2

    // Iterate until we reach desired accuracy
    while true
        // Calculate improved guess using Babylonian method
        newGuess = (guess + n / guess) / 2

        // Check if we've converged (difference is less than tolerance)
        if absolute(newGuess - guess) < tolerance
            return newGuess

        // Update guess for next iteration
        guess = newGuess
