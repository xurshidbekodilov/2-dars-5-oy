//10-Masala
/*
function countStringOccurrences(array, String) {
  let count = 0;
  for (const element of array) {
    if (element === String) {
      count++;
    }
  }
  return count;
}
*/

//9-masala
/*
function func(String) {
  const words = String.split(' ');
  const reversedWords = words.reverse();
  const res = reversedWords.join(' ');
  return res;
}
*/

//8-masala
/*
function func(array) {
  let longestString = '';
  for (const str of array) {
    if (typeof str === 'string' && str.length > longestString.length) {
      longestString = str;
    }
  }
  return longestString;
}
*/

//7-masala
/*
function func(String) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let result = '';
  for (let i = 0; i < String.length; i++) {
    const char = inputString[i];
    if (!vowels.includes(char)) {
      result += char;
    }
  }
  return result;
}
*/

//6-masala
/*
function func(array) {
  return array.slice().sort((a, b) => a.length - b.length);
}
*/

//5-masala
/*
function func(inputString) {
  const array = inputString.split(' ');
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string' && array[i].trim() !== '') {
      counter++;
    }
  }
  return counter;
}
*/

//4-masala
/*
function func(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
      result.push(array[i]);
    }
  }
  return result;
}
*/

//3-masala
/*
function func(inputString) {
  let resultString = '';
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    if (char < '0' || char > '9') {
      resultString += char;
    }
  }
  return resultString;
}
*/

//2-masala
/*
function capitalizeFirstLetter(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (typeof element === 'string' && element.length > 0) {
      const chars = element.split('');
      chars[0] = chars[0].toUpperCase();
      for (let j = 1; j < chars.length; j++) {
        chars[j] = chars[j].toLowerCase();
      }
      result.push(chars.join(''));
    } else {
      result.push(element);
    }
  }
  return result;
}
*/