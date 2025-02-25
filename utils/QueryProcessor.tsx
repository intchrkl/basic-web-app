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
  
  return "";
}
