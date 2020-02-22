// // 1)	Write a program that prints all prime numbers in given range. 
// // Take sub from 1-100.

// let start = 1;
// let end = 100;
// let array=[];
// let i=0;
// if(start<=1){
//     i=2;
// }
// //1. Wypełaniamy tablicę liczbami z podanego zakresu (pomijamy 1)
// for(i; i<=end; i++){
//     array.push(i);
// }
 
// //2. Wyrzucamy wielokrotności kolejnych liczb zaczynając od 2 a kończąc na pierwiastku z n zbioru;
// // Wydzielamy iterator z pętli, ponieważ przed podwyższeniem liczby musimy pominąć pierwszy element zbioru(2, 3 itd.)
// for(let i=0; i<Math.sqrt(end);){

//     //3. Zapisujemy wielokrotność a dopiero później podwyższamy o 1;
//      let iteration = array[i];
//      i++;
//      //4. Szukamy wartości, które są podzielne przez wielokrotność i usuwamy je z tablicy
//      for(let j=i; j<=array.length; j++){  
//         if(!(array[j]%iteration)){
//             array.splice(j, 1);
//         } 
//      }
  
// } 

// console.log("Pierwsze liczby z zakresu", start, "do",end, ":",array)


//------------------------------------------------------------------------------------
//2)	Write a guessing game where the user has to guess a secret number. 
// After every guess the program tells the user whether their number was too large or too small. 
// At the end the number of tries needed should be printed. 
// It counts only as one try if they input the same number multiple times consecutively.
//-------------------------------------------------------------------------------------

//Z WYKORZYSTANIEM KLASY
// class Game{
//     constructor(range, randomNumber, times, answers, upperRange, lowerRange){
//     this.times = times;
//     this.randomNumber = randomNumber;
//     this.answers = answers;
//     this.upperRange = range;
//     this.lowerRange = lowerRange;
//     }
//     drawNumber(){
//         this.randomNumber = Math.floor(Math.random()*(this.upperRange+1));
//         this.times = 0;
//         console.log("Rozpoczynamy grę. Twój zakres to", this.upperRange,". Zgadnij liczbę");
//     }
//     askForNumber(number){
//         console.log("LICZBA",this.randomNumber)
//         if(number===this.randomNumber){
//             console.log("Twoja liczba to:", this.randomNumber, ". Odgadłeś hasło za ", this.times);
//         }else if(number<this.randomNumber){
//             console.log("Za nisko");
//             this.times++;
//         }else if(number>this.randomNumber){
//             console.log("Za wysoko");
//             this.times--;
//         }
//     }
   
//     win(){
//         console.log("Wygrywa numer", this.randomNumber,". Trafiałeś",this.times," razy")
//     }
//     tooHighOrLow(guess){
//         this.times++;
//         this.answers.push(guess);
//         if(guess > this.randomNumber) 
//         {
//             console.log(guess, "to za wysoko");
//             this.upperRange = guess;
//          }else if(guess < this.randomNumber){
//             console.log(guess, "to za nisko");
//             this.lowerRange = guess;
//          }
          
//     }  
 
   
//     searchForNumber(){
//         this.answers = [];
//         let guess = Math.floor(this.range/2);
//         this.lowerRange = 0;
//         while(guess!==this.randomNumber){ 
//                 this.tooHighOrLow(guess);  
//                 guess=Math.floor(this.upperRange - (this.upperRange-this.lowerRange)/2);
//         }
//         this.win();
//     }
    
// }
// let game = new Game(50);
// game.drawNumber();
// game.searchForNumber();


// Z YARGSEM
//-------------
// const yargs = require('yargs');
// const fs = require('fs')

// function errorHandler(error){
//     switch(error.code){
//         case "ENOENT":
//             console.log("Najpierw podaj zakres!");
//             break;
//         default:
//             console.log(error);
//             break;
//     }
   
// }
// function readFile(){
//     return new Promise((resolve)=>{
//         fs.readFile("wynik.json", "utf-8", (err, data)=>{
//             err ? errorHandler(err) : resolve(JSON.parse(data));
//             })
//     }) 
// }
// yargs
// .command({
//     command:'start <number>',
//     desc: "Start a game and give a range number",
//     handler: (argv) =>{
//         let number = Math.floor(Math.random()*(argv.number+1));
//         fs.writeFile("wynik.json", JSON.stringify({number: number, times: 0, guesses: []}), (err)=>{console.log(err)});
//         console.log("Podałeś zakres, teraz zgadnij liczbę")
//     },
//     builder: (yargs) =>{
//         yargs
//         .positional("<number>",{
//             describe: "range of guess",
//             type: "number"
//         })
//     }
// })
// .command(
//     {
//     command: 'ask <number>',
//     desc: 'Check the given number',
//     handler: async (argv) => {
//     let result = await readFile();
//         if(result){
       
//             if(argv.number === result.number){
//                 console.log(`Wygrałeś! Twoja liczba to: ${result.number}. Zgadywałeś ${result.times} razy`) 
//                 fs.unlink("wynik.json", (err)=>{console.log(err)});;

//             }else if(argv.number < result.number){
              
//                 result['times']++;
//                 result['guesses'].push(argv.number)
//                 fs.writeFile("wynik.json", JSON.stringify(result), (err)=>{console.log(err)});
//                 console.log("Za nisko!");
                
//             }else{
               
//                 result['times']++;
//                 result['guesses'].push(argv.number)
//                 fs.writeFile("wynik.json", JSON.stringify(result), (err)=>{console.log(err)});
//                 console.log("Za wysoko!");
                
//             }

//         }else{
//             console.log("Najpierw podaj zakres.")
//         }
     
//     }
// }
// )
// .help()
// .argv;


//-------------------------------------------------------------------------------------------------------------
//3)	Write a function that rotates a list by k elements. 
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]. 
// Try solving this without creating a copy of the list.
//-----------------------------------------------------------------------------------------------------

// let array = [1,2,3,4,5,6];
// let number = 2;

// for(var i=0; i<number; i++){
//     array.push(array[0]);
//     array.splice(0,1);
// }
// console.log(array);


//-------------------------------------------------------------------------------------------------
//4)	Write a class that prints the list of the first n Fibonacci numbers. 
// The first two Fibonacci numbers are 1 and 1. 
// The n+1-st Fibonacci number can be computed by adding the n-th and the n-1-th Fibonacci number. 
// The first few are therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.
//---------------------------------------------------------------------------------------------------

// class Fibonacci{
//     constructor(numberOfElements, result){
//         this.numberOfElements = numberOfElements;
//         this.result = result;
//     }
   
//     getNumbers(){
//         let array = [1,1];
//         for(let index=1; index<=(this.numberOfElements-2);index++){
//             array.push(array[index]+array[index-1]);
//         }
//         return array;
//     }

// }
// let number = new Fibonacci(11);
// console.log("Ciąg Fibonacciego:", JSON.stringify(number.getNumbers()));



//-----------------------------------------------------------------------------------------
//5)	Write a code that takes a number and returns a list of its digits. 
// So for 2342 it should return [2,3,4,2].A243b -> [2,4,3].
//------------------------------------------------------------------------------------
// const s = "pw3oiapwoda2-9paowmdpaodmap41ml-91n2lk0";
// const string = "A243b";
// let array = string.split('').filter(e=>(!(isNaN(parseInt(e)))));
// console.log(JSON.stringify(array))



//-----------------------------------------------------------------------------------------------------------------------
//6)	Write function that translates a text to Pig Latin and back. English is translated to Pig Latin by taking 
// the first letter of every word, moving it to the end of the word and adding ‘ay’. 
// “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.
//----------------------------------------------------------------------------------------------------------------------------

// const string = "Korale koloru koralowego";
// const array = string.split(' ');

// let newArray = array.map(word=>{
//     word = word.concat(word.charAt(0).toLowerCase());
//     word = word.slice(1,word.length);
//     return word.concat("ay")
    
// })
// console.log(newArray.join(" "))
