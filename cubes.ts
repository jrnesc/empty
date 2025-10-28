/**
 * Pseudo code for calculating cube and cube root operations
 *
 * Cube operations include:
 * - Cube of a number: n³ = n * n * n
 * - Cube root of a number: ∛n = x where x³ = n
 *
 * This implementation provides both operations with efficient algorithms.
 */

/**
 * Calculate the cube of a number (n³)
 * 
 * Time complexity: O(1) - constant time
 * Space complexity: O(1) - constant space
 */
function cube(n)
    // Simply multiply the number by itself three times
    return n * n * n

/**
 * Calculate the cube root of a number using Newton's method
 *
 * Newton's method for cube roots uses the iteration:
 * x_new = (2 * x + n / (x * x)) / 3
 * 
 * This converges quickly to the cube root.
 *
 * Time complexity: O(log n) - converges quickly
 * Space complexity: O(1) - constant space
 */
function cubeRoot(n, tolerance = 0.00001)
    // Handle edge cases
    if n == 0
        return 0
    
    // Handle negative numbers - cube root of negative is negative
    sign = 1
    if n < 0
        sign = -1
        n = -n  // Work with positive value
    
    // Handle perfect cubes close to 1
    if n == 1
        return sign * 1
    
    // Initialize guess
    // For numbers > 1, start with n/3 as a reasonable guess
    // For numbers < 1, start with n as guess
    if n > 1
        guess = n / 3
    else
        guess = n
    
    // Newton's method iteration
    while true
        // Calculate improved guess using Newton's method for cube roots
        // x_new = (2*x + n/(x*x)) / 3
        newGuess = (2 * guess + n / (guess * guess)) / 3
        
        // Check if we've converged (difference is less than tolerance)
        if absolute(newGuess - guess) < tolerance
            return sign * newGuess
        
        // Update guess for next iteration
        guess = newGuess

/**
 * Check if a number is a perfect cube
 * 
 * Time complexity: O(log n) - uses cube root calculation
 * Space complexity: O(1) - constant space
 */
function isPerfectCube(n)
    // Handle negative numbers
    if n < 0
        return isPerfectCube(-n)
    
    // Calculate cube root
    root = cubeRoot(n, 0.000001)  // Higher precision for perfect cube check
    
    // Round to nearest integer
    roundedRoot = round(root)
    
    // Check if the cube of rounded root equals original number
    return cube(roundedRoot) == n

/**
 * Generate the first n perfect cubes
 * 
 * Time complexity: O(n)
 * Space complexity: O(n) - to store the results
 */
function generatePerfectCubes(n)
    if n <= 0
        return empty_array
    
    cubes = empty_array
    
    for i = 1 to n
        cubes.append(cube(i))
    
    return cubes

/**
 * Helper function to calculate absolute value
 */
function absolute(x)
    if x < 0
        return -x
    else
        return x

/**
 * Helper function to round to nearest integer
 */
function round(x)
    if x - floor(x) >= 0.5
        return floor(x) + 1
    else
        return floor(x)