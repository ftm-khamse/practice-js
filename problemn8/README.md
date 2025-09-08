# Problem
Write a function that returns the number of bad data in an array.

# Test Cases
- countBadData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 0
- countBadData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "L-B"]); // 1
- countBadData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "L-B", "L-B"]); // 2
- countBadData([1, 2, 3, 4, 5, 6, 7, -8, 9, -10, "L-B", "L-B"]); // 4