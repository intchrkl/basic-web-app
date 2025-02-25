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

  
  return "";
}
