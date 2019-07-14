## Question 1
Write a function that performs the [Caesar Cipher](https://learncryptography.com/classical-encryption/caesar-cipher). The function caesarCipher should receive two arguments: a string and a number. The number specifies how many letters to shift the string by.

```js
caesarCipher("hello", 1) // returns "ifmmp"
caesarCipher("dog", 3) // returns "grj"
```


## Question 2
Write a function `digitalRoot` that receives a number and sums each digit until the sum is less than 10.
```js
digitalRoot(121) // returns 4
digitalRoot(746) // returns 17
digitalRoot(6598) // returns 1
```

## Question 3
Write a function `highThree` that receives an array of positive numbers and returns the product of the largest three numbers in the array.
```js
highThree([4, 1, 6, 2, 3, 5]) // returns 120
highThree([11, 3, 20, 1]) // returns 660 
```


## Question 4

Write a function `makeMonies` that receives an array of stock prices throughout the course of the day and returns the maximum profit that could have been made. The indices of the array correspond to different times of the day. Shorting is not an option. The index or time that you buy into the stock has to be smaller or earlier than the index or time you sell the stock. What is the time complexity of your solution?
```js
makeMonies([20, 14, 10, 16, 22, 18]) // returns 12 b/c buy @ 10 & sell @ 22
makeMonies([19, 24, 18, 12, 15, 30]) // returns 18 b/c buy @ 12 & sell @ 30
```


## Question 5
Given an array of integers, find the largest sum of a contiguous subarray.
```js
largestSum([6, 4, -8, 7]) // returns 10 b/c the [6, 4] summed is the largest
largestSum([6, 4, -8, 7, 5]) // returns 14 b/c adding all the elements produces the largest sum
```


## Question 6
Implement the Folding Cipher. It folds the alphabet in half and uses the adjacent letter. Ie. a <=> z, b <=> y, c <=> x, m <=> n.

```js
foldCipher("abc") // returns "zyx"
```

