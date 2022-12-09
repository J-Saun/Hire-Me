function fibonacciGenerator(n) {
  let result = [];

  if (result.length === 0) {
    result.push(0);
  }
  if (result.length === 1) {
    result.push(1);
  }

  for (let i = 0; i < n - 2; i++) {
    result.push(result[i] + result[i + 1]);
  }

  if (n === 0) return (result = []);
  if (n === 1) return (result = [0]);

  return result;
}

console.log(fibonacciGenerator(5));
