const inNode = typeof process !== 'undefined' && process?.argv?.length;
const form = !inNode && document.querySelector('form');
const resultText = !inNode && document.getElementById('result');
const inputField = !inNode && document.getElementById('number');

function fibonacci(number) {
  const numbers = [0, 1];

  for (let i = 2; i <= number; i++) {
    numbers[i] = numbers[i - 2] + numbers[i - 1];

    numbers.push(numbers[i]);
  }

  // Remove the first 0 from the list
  numbers.shift();

  return {
    numbers,
    isEven: false,
  };
}

function factorial(number) {
  const numbers = [];
  let value = 1;

  for (let i = 1; i <= number / 2; i++) {
    numbers.push(i);
    value *= i;
  }

  return {
    numbers,
    value,
    isEven: true,
  };
}

function factorialFibo(number) {
  if (Number.isNaN(+number) || typeof +number !== 'number') {
    return 'Not a Number!';
  }

  number = +number;

  if (number <= 0 || number >= 21) {
    return 'Error, not in range!';
  }

  if (number % 2 == 0) {
    return factorial(number);
  }

  return fibonacci(number);
}

// For testing purposes in the console
if (typeof process !== 'undefined' && process?.argv?.length)
  console.log(factorialFibo(process?.argv?.[2]));

if (!inNode) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const result = factorialFibo(inputField.value);

    if (typeof result === 'string') {
      resultText.textContent = '';

      alert(result);

      return;
    }

    if (result.isEven) {
      resultText.textContent = `${result.numbers.join(' x ')} = ${
        result.value
      }`;
      return;
    }

    resultText.textContent = result.numbers.join(' ');
  });
}
