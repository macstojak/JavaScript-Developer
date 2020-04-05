// USE CLASSESS
// USE STRICT MODE
// TRY TO BE OPTIMAL


//----------------------------------------------------------------------------------------------------------------------------
// 2)	Write a program that finds the longest palindromic substring of a given string. ‘karakis’, ‘baerren’, ‘kajak’, ‘inni’.
// //---------------------------------------------------------------------------------------------------------------------------
// "use strict";
// class Palindrome {
//   constructor(word) {
//     this.word = word;
//     this.letters = [];
//     this.possibilities = [];
//   }
//   convertToString(letters) {
//     this.possibilities.push(letters.join(""));
//   }
//   convertToLettters() {
//     this.letters = this.word.split("");
//   }
//   theLongestPalindrome(){
//       return this.possibilities.reduce((a, b) => { return a.length > b.length ? a : b})
//   }
//   //Parzyste palindromy np. "inni"
//   checkEven() {
//     let result = [];
//     let array = this.letters;
//     let possibilities = [];
//     for (let i = 1; i < array.length - 1; i++) {
//       let begin = i - 1;
//       let middle1 = i;
//       let middle2 = i + 1;
//       let end = i + 2;

//       while (begin >= 0 && end < array.length) {
//         if (array[middle1] === array[middle2]) {
//           if (result.length === 0) {
//             result.push(array[i], array[i+1]);
//           }
//           if(array[end]===array[begin]){
//             result.push(array[end]);
//             result.unshift(array[begin]);
//           }

//           begin--;
//           end++;
//         } else {
//           result = [];
//           break;
//         }
//       }
//       if (result.length > 0) this.convertToString(result);
//     }
//   }
//   //Nieparzyste palindromy np. "kajak"
//   checkOdd() {
//     let result = [];
//     let array = this.letters;
//     let possibilities = [];
//     for (let i = 1; i < array.length - 1; i++) {
//       let begin = i - 1;
//       let middle = i;
//       let end = i + 1;

//       while (begin >= 0 && end < array.length) {
//         if (array[middle] === array[end]) {
//           if (result.length === 0) {
//             result.push(array[middle]);
//           }

//           result.push(array[end]);
//           result.unshift(array[begin]);
//           begin--;
//           end = end + 2;
//         }
//         if (array[begin] === array[end]) {
//           if (result.length === 0) {
//             result.push(array[i]);
//           }
//           result.push(array[end]);
//           result.unshift(array[begin]);
//           begin--;
//           end++;
//         } else {
//           result = [];
//           break;
//         }
//       }
//       if (result.length > 0) this.convertToString(result);
//     }
//   }
// }

// //Przykłady palindromów: "arakis", "kajak", "baerren", "inni",
// let palindrome = new Palindrome("arakis");
// let letters = palindrome.convertToLettters();
// palindrome.checkEven(letters);
// palindrome.checkOdd(letters);
// console.log("Najdłuższy palindrom:", JSON.stringify(palindrome.theLongestPalindrome()))

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
// "use strict"
// const a=[
//     [5, 3], 
//     [3, 7]
// ]

// const b= [  
//             [2, 3], 
//             [9, 1]
//         ]

// class Matrices{
//     constructor(matrice1, matrice2){
//         //A = n x m
//         this.matrice1= matrice1;
//         this.n=matrice1[0].length;
//         this.m=matrice1.length;
//         //B = m x p
//         this.matrice2 = matrice2;
//         this.p=matrice2.length;
//         this.result=[[0,0],[0,0]];
//     }


//     checkDimensions(){
//         let columnLength1 = this.matrice1.length;
//         let rowLength2 = this.matrice2[0].length;
//         let rowLength1 = this.matrice1[0].length
//         let columnLength2 = this.matrice2.length;
       
//         let bool1 = columnLength1 === rowLength2;
//         let bool2 = columnLength2 ===rowLength1;
//         if(bool1&& bool2){
//             return true;
//         }else{
//             return false;
//         }
//     }

  
//     multiply(){
//         let A = this.matrice1;
//         let B = this.matrice2;
//         for(let r = 0; r<this.n ; r++){
           
//             for(let i=0; i<this.n; i++){ 
//                 for(let j=0; j<this.m; j++){  
//                     this.result[r][i] += A[j][i]*B[r][j]
//                 }
//             }
//         }
//         return this.result;
//     }
    

// }

// let matrices = new Matrices(a,b);
// let dimensionsCondition = matrices.checkDimensions();
// console.log("Czy macierze mają równe wymiary?", dimensionsCondition);
// if(dimensionsCondition){
//     console.table(matrices.multiply());
// }

