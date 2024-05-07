/**
 * Finds duplicate elements in an array.
 *
 * Objective:
 * Improve time complexity of findDuplicates function to O(n) instead of O(n^3).
 * Return duplicates array can be on any order
 *
 * @param {Array} arr - The input array.
 * @returns {Array} - An array containing duplicate elements found in the input array.
 */

function findDuplicates(arr) {
  const duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }
  }

  return duplicates;
}

const numbers = [1, 2, 3, 4, 5, 1, 2, 6, 7, 8, 3, 9, 10, 11, 12, 4];

console.log("Duplicate numbers:", findDuplicates(numbers));
