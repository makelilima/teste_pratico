const newNum = 21;

function Fibonacci(num) {
  let a = 0;
  let b = 1;

  if (num === a || num === b) {
    return true;
  }

  let next = a + b;
  while (next <= num) {
    if (next === num) {
      return true;
    }

    a = b;
    b = next;
    next = a + b;
  }
  return false;
}

function verifyFibonacci(num) {
  if (Fibonacci(num)) {
    console.log(`O número ${num} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
  }
}

verifyFibonacci(newNum);
