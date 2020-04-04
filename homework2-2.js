// USE CLASSESS
// USE STRICT MODE
// TRY TO BE OPTIMAL

// 1)	Write a program that automatically converts English text to Morse code and vice versa.
//-----------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------------
// 2)	Write a program that finds the longest palindromic substring of a given string. ‘karakis’, ‘baerren’, ‘kajak’, ‘inni’.
// //---------------------------------------------------------------------------------------------------------------------------
"use strict";
class Palindrome {
  constructor(word) {
    this.word = word;
    this.letters = [];
    this.possibilities = [];
  }
  convertToString(letters) {
    this.possibilities.push(letters.join(""));
  }
  convertToLettters() {
    this.letters = this.word.split("");
  }
  theLongestPalindrome(){
      return this.possibilities.reduce((a, b) => { return a.length > b.length ? a : b})
  }
  //Parzyste palindromy np. "inni"
  checkEven() {
    let result = [];
    let array = this.letters;
    let possibilities = [];
    for (let i = 1; i < array.length - 1; i++) {
      let begin = i - 1;
      let middle1 = i;
      let middle2 = i + 1;
      let end = i + 2;

      while (begin >= 0 && end < array.length) {
        if (array[middle1] === array[middle2]) {
          if (result.length === 0) {
            result.push(array[i], array[i+1]);
          }
          if(array[end]===array[begin]){
            result.push(array[end]);
            result.unshift(array[begin]);
          }

          begin--;
          end++;
        } else {
          result = [];
          break;
        }
      }
      if (result.length > 0) this.convertToString(result);
    }
  }
  //Nieparzyste palindromy np. "kajak"
  checkOdd() {
    let result = [];
    let array = this.letters;
    let possibilities = [];
    for (let i = 1; i < array.length - 1; i++) {
      let begin = i - 1;
      let middle = i;
      let end = i + 1;

      while (begin >= 0 && end < array.length) {
        if (array[middle] === array[end]) {
          if (result.length === 0) {
            result.push(array[middle]);
          }

          result.push(array[end]);
          result.unshift(array[begin]);
          begin--;
          end = end + 2;
        }
        if (array[begin] === array[end]) {
          if (result.length === 0) {
            result.push(array[i]);
          }
          result.push(array[end]);
          result.unshift(array[begin]);
          begin--;
          end++;
        } else {
          result = [];
          break;
        }
      }
      if (result.length > 0) this.convertToString(result);
    }
  }
}

//Przykłady palindromów: "arakis", "kajak", "baerren", "inni",
let palindrome = new Palindrome("arakis");
let letters = palindrome.convertToLettters();
palindrome.checkEven(letters);
palindrome.checkOdd(letters);
console.log("Najdłuższy palindrom:", JSON.stringify(palindrome.theLongestPalindrome()))

// 3)	Given two strings, write a program that efficiently finds the longest common subsequence. ‘karol rolki’
//------------------------------------------------------------------------------------------------------------
// "use strict";
// class Subsequence {
//   constructor(words) {
//     this.words = words.split(" ");
//   }

//   findSubsequence() {
//     let results = [];
//     this.words.forEach((word, i, self) => {
//       //zaczynamy od przypadku sprawdzenia dwóch liter w słowie a później przesuwamy zakres:
//       //karol==> ka => ar => ro => ol
//       let iterator = 2;
//       let fragment;
//       for (let x = 0; x < word.length; x++) {
//         //wyrzucamy aktualne słowo, żeby nie odwoływało się do samego siebie
//         self = self.filter((el) => el !== word);

//         for (let j = 0; j < self.length; j++) {
//           fragment = word.substr(x, iterator);
//           if (self[j].includes(fragment)) {
//             results.push(fragment);
//           }
//           iterator++;
//         }
//       }
//     });
//     return results.reduce((a, b) => {
//       return a.length > b.length ? a : b;
//     });
//   }
// }

// let subsequence = new Subsequence("karol rolki deskorolki");
// console.log(JSON.stringify(subsequence.findSubsequence()));

// 4)	Write a code that multiplies two matrices together. Dimension validation required.
//---------------------------------------------------------------------------------------
// ("use strict");
// const a= [{0: 1, 1: 2}, {0:3, 1: 4}, {0: 9, 1:4}]
// const b=[{0:5, 1:3, 2:5}, {0:9, 1:7, 2:5}, {0:3, 1:5, 2:7}]

// class Matrice{
//     constructor(matrice){
//         this.matrice= matrice;
//     }

// }
