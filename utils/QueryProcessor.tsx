export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "intchrkl";
  }

  if (query.toLowerCase().includes("what is your andrew id?")
      || query.toLowerCase().includes("andrewid")) {
    return "itochira";
  }

  if (query.toLowerCase().includes("test")) {
    return "Hello World"
  }


  const plusMatch = query.toLowerCase().match(/what is (\d+) plus (\d+)\?/);
  if (plusMatch) {
    const num1 = parseInt(plusMatch[1], 10);
    const num2 = parseInt(plusMatch[2], 10);
    return (num1 + num2).toString();
  }

  // which of the following numbers is the largest: 88, 60, 51?
  const maxMatch = query.toLowerCase().match(/which of the following numbers is the largest: (\d+), (\d+), (\d+)\?/);
  if (maxMatch) {
    const num1 = parseInt(maxMatch[1], 10);
    const num2 = parseInt(maxMatch[2], 10);
    const num3 = parseInt(maxMatch[3], 10);
    return Math.max(num1, num2, num3).toString();
  }

  const multMatch = query.toLowerCase().match(/what is (\d+) multiplied by (\d+)\?/);
  if (multMatch) {
    const num1 = parseInt(multMatch[1], 10);
    const num2 = parseInt(multMatch[2], 10);
    return (num1 * num2).toString();
  }

  const minusMatch = query.toLowerCase().match(/what is (\d+) minus (\d+)\?/);
  if (minusMatch) {
    const num1 = parseInt(minusMatch[1], 10);
    const num2 = parseInt(minusMatch[2], 10);
    return (Math.pow(num1, num2)).toString();
  }

  const powerMatch = query.toLowerCase().match(/what is (\d+) to the power of (\d+)\?/);
  if (powerMatch) {
    const num1 = parseInt(powerMatch[1], 10);
    const num2 = parseInt(powerMatch[2], 10);
    return (num1 ** num2).toString();
  }

  const squareCubeMatch = query.toLowerCase().match(/which of the following numbers is both a square and a cube: ([\d, ]+)\?/);
  if (squareCubeMatch) {
    const numbers = squareCubeMatch[1].split(", ").map(num => parseInt(num, 10));
    const isPerfectSixthPower = (num: number) => {
      const squareRoot = Math.round(Math.pow(num, 1/2));
      const cubeRoot = Math.round(Math.pow(num, 1/3));
      return (squareRoot ** 2 === num) && (squareRoot ** 3 === num);
    };
    const result = numbers.filter(isPerfectSixthPower);
    return result.length ? result.join(", ") : "None";
  }

  const primeMatch = query.toLowerCase().match(/which of the following numbers are primes: ([\d, ]+)\?/);
  if (primeMatch) {
    const numbers = primeMatch[1].split(", ").map(num => parseInt(num, 10));
    const isPrime = (num: number) => {
      if (num < 2) return false;
      for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
      }
      return true;
    };
    const result = numbers.filter(isPrime);
    return result.length ? result.join(", ") : "None";
  }
  
  return "";
  
}
