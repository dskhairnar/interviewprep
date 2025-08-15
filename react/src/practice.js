function isPrime(num) {
  if (num <= 1) return false; // 0 and 1 are not prime
  if (num === 2) return true; // 2 is the only even prime
  if (num % 2 === 0) return false; // eliminate even numbers

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

// Example
console.log(isPrime(7));  // true
console.log(isPrime(10)); // false
