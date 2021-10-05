//1
function fizzBuzz(){
  for(let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
          console.log("FizzBuzz");
      } else if (i % 3 === 0) {
          console.log("Fizz");
      } else if (i % 5 === 0)  {
          console.log("Buzz");
      } else {
          console.log(i);
      }
  }
}

// 2
function fizzBuzz1(number){
    let answer = [];
    for(let i =1; i <= number; i++) {
        if( i % 3 === 0 && i % 5 === 0) {
            answer.push("fizzbuzz");
        } else if (i % 5 === 0) {
             answer.push("buzz");
        } else if ( i % 3 === 0) {
             answer.push("fizz");
        } else {
             answer.push(`${i}`);
        }
    }
        return answer;
}


// Call
fizzBuzz();
console.log(fizzBuzz1(10));