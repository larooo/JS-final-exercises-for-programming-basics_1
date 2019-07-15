// Question 1
// Write a function that performs the[Caesar Cipher](https://learncryptography.com/classical-encryption/caesar-cipher). The function caesarCipher should receive two arguments: a string and a number. The number specifies how many letters to shift the string by.

//     ```js
// caesarCipher("hello", 1) // returns "ifmmp"
// caesarCipher("dog", 3) // returns "grj"
// ```

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

const caesarCipher = (str, num) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    let index = alphabet.indexOf(str[i]);
    newStr += alphabet[index + num];
  }
  return newStr;
};

console.log("1", caesarCipher("dog", 3));

// Question 2
// Write a function `digitalRoot` that receives a number and sums each digit until the sum is less than 10.
//     ```js
// digitalRoot(121) // returns 4
// digitalRoot(746) // returns 8
// digitalRoot(6598) // returns 1

let digitSum = num => {
  let sum = 0;
  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
};

const digitalRoot = num => {
  let sum = digitSum(num);
  while (sum >= 10) {
    sum = digitSum(sum);
  }
  return sum;
};

console.log("2", digitalRoot(6598));

// Question 3
// Write a function `highThree` that receives an array of positive numbers and returns the product of the largest three numbers in the array.
// ```js
// highThree([4, 1, 6, 2, 3, 5]) // returns 120
// highThree([11, 3, 20, 1]) // returns 660

const highThree = arr =>
  (sortArr = arr.sort((a, b) => b - a))
    .slice(0, 3)
    .reduce((acc, item) => acc * item);

console.log("3", highThree([11, 3, 20, 1]));

// Question 4

// Write a function `makeMonies` that receives an array of stock prices throughout the course of the day and returns the maximum profit that could have been made.The indices of the array correspond to different times of the day.Shorting is not an option.The index or time that you buy into the stock has to be smaller or earlier than the index or time you sell the stock.What is the time complexity of your solution ?
//     ```js
// makeMonies([20, 14, 10, 16, 22, 18]) // returns 12 b/c buy @ 10 & sell @ 22
// makeMonies([19, 24, 18, 12, 15, 30]) // returns 18 b/c buy @ 12 & sell @ 30

const makeMonies = arr => {
  let minPrice = Math.min(...arr);
  let newArr = arr.slice(arr.indexOf(minPrice), arr.length);
  let maxPrice = Math.max(...newArr);
  return `${maxPrice - minPrice} b/c buy @ ${minPrice} & sell @ ${maxPrice}`;
};

console.log("4", makeMonies([19, 24, 18, 12, 15, 30]));

// Question 5
// Given an array of integers, find the largest sum of a contiguous subarray.
// ```js
// largestSum([6, 4, -8, 7]) // returns 10 b/c the [6, 4] summed is the largest
// largestSum([6, 4, -8, 7, 5]) // returns 14 b/c adding all the elements produces the largest sum
