//1 1)	Extend String type with the reverse() function. The function is to reverse the value of the string on which it was called.
// String.prototype.reverse = function(){
//     return Array.prototype.reverse.apply(this.split('')).join('')
// }
// String.prototype.reverse = function () {
//     let splitArray = this.split('');
//     let reverse = Array.prototype.reverse.apply(splitArray);
//     let reversed = reverse.join('');
//     return reversed;
// }
// console.log("alamakota".reverse())

//2	Extend Number type with the reverse() function. The function is to reverse the value of the Number on which it was called.
// Number.prototype.reverse = function(){
//     let number = this.toString().split('');
//     let reverse =Array.prototype.reverse.apply(number);
//     let reversed = reverse.join('');
//     return reversed;
// }
// let num  = new Number(123456);
// console.log(num.reverse());

// Number.prototype.reverse = function(){
//     return Array.prototype.reverse.apply(this.toString().split('')).join('');
// }
// let num1 = new Number(7654321)
// console.log(num1.reverse());

//3	Based on included JSON file.
// a.	Create a function that will return Json from the file. a
// b.	Create a structures to hold data from the file. b
// c.	Map data from function a to structure from b.
// d.	Create object that will give us data about:
// i.	How much money was spend in 2014
// ii.	What company was earning how much
// iii.	What type on transaction was having what spending’s.
// iv.	Values of the spending in each month
// v.	Values of the spending in each day of the week

var json = require("./Data.json");
//a -  function to return JSON file
function ApiObject() {}
ApiObject.prototype.getPayment = function() {
  return json;
};
//b - a structure to hold data
function Payment(index, id, cost, detailsOfPayment) {
  this.index = index;
  this._id = id;
  this.cost = cost;
  this.detailsOfPayment = {
    type: detailsOfPayment.Type,
    company: detailsOfPayment.company,
    date: detailsOfPayment.date
  };
}
// a summary of an object
Payment.prototype.summary = function() {
  return `Payment summary nr ${this.index}:
    index: ${this.index}
    _id: ${this._id}
    cost: ${this.cost}
    detailsOfPayment: 
        - type: ${this.detailsOfPayment.type}
        - company: ${this.detailsOfPayment.company}
        - date: ${this.detailsOfPayment.date}
    `;
};
// d.	Create object that will give us data about:
// i.	How much money was spend in 2014
// ii.	What company was earning how much
// iii.	What type on transaction was having what spending’s.
// iv.	Values of the spending in each month
// v.	Values of the spending in each day of the week

// Object for holding values 
function Transactions() {
    this.money = 0;
    this.company = [];
    this.type = [];
    this.valueOfMonthly = [];
    this.valueOfDaily = [];   
}

// Setter for values
Transactions.prototype.setTransactions = (money, company, type, valueOfMonthly,valueOfDaily) => {
    this.money = JSON.stringify(money);
    this.company = JSON.stringify(company);
    this.type = JSON.stringify(type);
    this.valueOfMonthly = JSON.stringify(valueOfMonthly);
    this.valueOfDaily = JSON.stringify(valueOfDaily);
 }

 // Getter of values
Transactions.prototype.getTransactions = () => 
 {
     return `Ammount of money spent in 2014 was: ${this.money}. 
List of companies and how much they earned: 
${this.company}. 
List of types of transaction and how much they've cost: 
${this.type}.
List of spending in each month: 
${this.valueOfMonthly}.
List of spending in each day of week: 
${this.valueOfDaily}`
 }

//Method for providing

// ii.	What company was earning how much
Transactions.prototype.getUnifiedAnswer = function (json, key){
  let tempArray = [];
  
  let name = key;
  let value;
  json.map(el => {
    let date;
    if(key==="month"|| key==="year"|| key==="day"){
      let array = el.detailsOfPayent.date.split("-");
       date = new Date(array[2], array[1]-1, array[0]);
      }
    switch(name){
    case "company":
      value = el.detailsOfPayent.company;
      break;
    case "type":
        value = el.detailsOfPayent.Type;
        break;
    case "month":
        value =  date.getMonth();
        break;
    case "year":
        value =  1900+date.getYear();
        break;
    case "day":
        value = date.getDay();
        break;
    }

    tempArray.push({
      [name]: value,
      cost: el.cost,
      earning: 0
    });
  });

  let uniqueList = tempArray.filter((c, index) => {
    return (
      index ===
      tempArray.findIndex(obj => {
        let o = obj[name];
        let cn = c[name];
        let result = JSON.stringify(o) === JSON.stringify(cn);
        return result;
      })
    );
  });


  uniqueList.map(el => {
    tempArray.map(c => {
      if (el[name] === c[name]) {
        el.earning += parseFloat(c.cost);
        delete el.cost;
      }
    });
  });

  function compare(a, b) {
    let name = key;
    if (a[name] < b[name]) {
      return -1;
    }
    if (a[name] > b[name]) {
      return 1;
    }
    return 0;
  }
 

  return uniqueList.sort(compare);
}


let result = new ApiObject();
let transactionObj = new Transactions();

// c - map data from structure a to b
result.getPayment().map(el=>{
    let newPayment = new Payment(el.index, el._id, el.cost, el.detailsOfPayent);
   console.log(newPayment.summary())
})
let jsonArray = result.getPayment();
let money = transactionObj.getUnifiedAnswer(jsonArray, "company");
let companies = transactionObj.getUnifiedAnswer(jsonArray, "type");
let types = transactionObj.getUnifiedAnswer(jsonArray, "year");
let months = transactionObj.getUnifiedAnswer(jsonArray, "month");
let days = transactionObj.getUnifiedAnswer(jsonArray, "day");
transactionObj.setTransactions(money, companies, types, months, days);
console.log(transactionObj.getTransactions());


//EXAM
// Create a solution that will tell us what poker set we have. 
// The solution is to deal us 5 cards from the standard 52 card deck. 
// After that the solution is to tell us what is the best poker set. 

// function Card(colour, value) {
//   this.colour = colour;
//   this.value = value;
// }

// function Deck(colours, values){
//   this.colours = colours;
//   this.values = values;
// }

// Deck.prototype.dealOut = function(){
//   let deck = [];
//   this.colours.map(c=>{
//     this.values.map(v=>{
//       deck.push({
//         colour: c,
//         value: v
//       })
//     })
//   })
//   let hand = [];
  
//   for(let i=0; i<5; i++){
//     let randomIndex = Math.floor(Math.random()*51); 
//     hand.push(deck[randomIndex]);
//     deck.splice(randomIndex,1);
//   }
//   return hand;
// }

// function Card(colours, values){
//   let colour = colours[Math.floor(Math.random()*4)]
//   let value = values[Math.floor(Math.random()*14)]
//   this.card = {
//     colour: colour,
//     value: value
//   }
//   return this.card;
// }

// let colours = ["clubs", "diamonds", "hearts", "spades"];
// let values=[2,3,4,5,6,7,8,9,10,11,12,13,14];
// let deck = new Deck(colours, values);
// let hand = deck.dealOut();
// //Royal flush: A K D J 10
// let set1 = [{value:14}, {value: 13}, {value: 12}, {value: 11}, {value: 10}];
// for(i=0; i<set1.length; i++){
//   hand.map(card =>{
//     if(set1[i].value !=card.value){
//       break;
//     }else if(set1[i]===card.value && i===set1.length){
//       console.log("Royal flush:", hand)
//     }
//   })
// }
// //Straight flush: wszystkie karty tego samego koloru i po kolei:
// let set2 = [];
// hand.every(a=>{
//  if(a.value===(b.value+1) && a.color===b.color){
//   return b;
//  }
// })
// //Four of a kind: cztery karty z tą samą figurą
// let set3 = []
// hand.filter(h=>{
  
// })
// //Full house: trzy takie same i para
// let set4 = [];
// //Straight: pięć takich samych figur ale nie ten sam kolor
// let set5 = [];
// //Three of a kind: trzy karty tej samej figury
// let set6 = [];
// //Two pairs: dwie różne pary
// let set7=[];
// //Pair: jedna para
// let set8 = []
// //Najwyższa karta
// let set9 = [];
// console.log("Hand you drew:",JSON.stringify(hand))
