//Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

function sumTriple(x, y) {
  if (x === y) {
    return 3 * (x + y);
  }
  return x + y;
}
const sumTripe = (x, y) => {
  if (x === y) {
    return 3 * (x + y);
  }
  return x + y;
};
const res = sumTriple(4, 5);
console.log(res);
//Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

function testNum(num) {
  if (num % 3 === 0 || num % 7 === 0) {
    return true;
  } else {
    return false;
  }
}
const out = testNum(3);
console.log(out);
//Write a JavaScript program to calculate multiplication and division of two numbers.(use same function to achieve this)
const multiDiv = (a, b, num = "div") => {
  if (num === "div") {
    return a / b;
  }
  return a * b;
};
const result = multiDiv(20, 5, "mul");
console.log(result);
//Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
//[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]

//Expected Output :
//60°C is 140 °F
4; //5°F is 7.222222222222222°C
function convertCelsiusToFahrenheit(celsius) {
  const fahrenheit = celsius * 1.8 + 32;
  return `${celsius}°C is ${fahrenheit}°F`;
}

function convertFahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) / 1.8;
  return `${fahrenheit}°F is ${celsius}°C`;
}

console.log(convertCelsiusToFahrenheit(60));
console.log(convertFahrenheitToCelsius(45));
//Write a JavaScript program to count the number of vowels in a given string.
function countVowels(str) {
  let count = 0;
  for (const char of str) {
    // for(let i=0;i<string.length;i++);
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
  console.log(count);
}
