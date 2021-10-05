# Code Challenge: For Loops

## Instructions

1. Clone down this assignment to your `code-challenges' directory in AWS Cloud9.  
2. Code your solution using JavaScript in `index.js`. 
3. **Be sure to run and test your code throughly!**
4. By the end of Code Challenge, **commit and push your changes up to Github**.
5. Using the browser, verify that your solution is in your remote repo on Github.

## Code Problems

1. Write a function named fizzBuzz that prints the numbers from 1 to 100. But for multiples of three console.log “Fizz” instead of the number and for the multiples of five console.log “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.
```
fizzBuzz() // console.logs: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 4, FizzBuzz, 16 ...
```


### Bonus 
2. **Problem**: Write a function named `fizzBuzz` that takes in an integer argument, `number`, and returns an array of strings, `answer`, where:

- `answer[i] == "FizzBuzz"` if `i` is divisible by `3` and `5`.
- `answer[i] == "Fizz"` if `i` is divisible by `3`.
- `answer[i] == "Buzz"` if `i` is divisible by `5`.
- `answer[i] == i` if non of the above conditions are true.

The output array's length should be equal to the given integer `number` and the first index will be `1` and the last index will be `number`

```
fizzBuzz(3) // returns ["1","2","Fizz"]
fizzBuzz(5) // returns ["1","2","Fizz","4","Buzz"]
fizzBuzz(15) // returns ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
```
