// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------
// EXAM 1) Scale riddle. With 8 balls  EXAM [1,1,1,1,2,1,1,1].
//  One of the items will be change to two. 
//  Indexes are t be chosen at random. Use compressions only two times. 
// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------

// let array = [];
// let pane1, pane2, heaviest;
// //Przygotowujemy zestaw kulek z których jedna będzie miała wartość 2 a reszta 1 
// //Wypełniamy tablicę jedynkami i dwójką na wylosowanym miejscu. (Każda kulka to obiekt z numerem i wartością 1 albo 2)
// (function setRandomBall(){
//     let randomIndex = Math.floor(Math.random()*7); 
//     for(let i=0; i<8; i++){
//         i===randomIndex ? array.push({[i]:2}) : array.push({[i]:1});
//     }
// })()
// console.log("Wylosowany zestaw:",JSON.stringify(array))
// //PIERWSZE PORÓWNANIE: 
// function firstScalePanes(array){
//     let pane1=[], pane2=[]; 

// //Najpierw kładziemy na dwie szale po 3 kulki
// //Pierwsza szalka:
//     for(let i = 0, j=7; i<3; i++, j--){
//         let randomIndex = Math.floor(Math.random()*j);
//         pane1.push(array[randomIndex]);
//         array.splice(randomIndex,1)
//     }
// //Druga szalka:
//     for(let i=0, j=5; i<3; i++, j--){
//         let randomIndex = Math.floor(Math.random()*j);
//         pane2.push(array[randomIndex]);
//         array.splice(randomIndex,1)
//     }
// //Funkcja do sumowania elementów z szalki
//    function sumElements(element){
//        let sum=0;
//        for(let i=0; i<element.length;i++){
//            sum+=parseInt(Object.values(element[i]));
//        }
//        return sum;
//    }

// //Sprawdzamy na której szalce jest więcej (albo czy obie są sobie równe - wtedy cięższa kulka jest poza szalkami)
// //i zwracamy pasujący zestaw
//    if((sumElements(pane1))>(sumElements(pane2))){
//     return pane1;
//    }else if((sumElements(pane1))<(sumElements(pane2))){
//     return pane2;
//    }else{
//     return array;
//    }
// }
// //Przypisujemy do zmiennej heaviest to co zwróci nam funkcja, czyli najcięższą szalkę
// heaviest = firstScalePanes(array)

// //PORÓWNANIE DRUGIE
// function secondScalePanes(array){
// //1. Przypadek kiedy kulka jest na którejś z szalek:
// if(heaviest.length === 3){
//     if(parseInt(Object.values(heaviest[0]))>parseInt(Object.values(heaviest[1]))){
//         return heaviest[0];
//     }else if(parseInt(Object.values(heaviest[1]))>parseInt(Object.values(heaviest[2]))){
//         return heaviest[1];
//     }else{
//         return heaviest[2];
//     }
// }
// //2. Przypadek kiedy kulka jest poza szalkami:
// else{
//     if(parseInt(Object.values(heaviest[0]))>parseInt(Object.values(heaviest[1]))){
//         return heaviest[0];
//     }else{
//        return heaviest[1];
//     }
// }
// }

// console.log("Wynik:", secondScalePanes(heaviest))



// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------
//EXAM
// Create a solution that will tell us what poker set we have. 
// The solution is to deal us 5 cards from the standard 52 card deck. 
// After that the solution is to tell us what is the best poker set. 
// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------

// function Card(colour, value) {
//   this.colour = colour;
//   this.value = value;
// }

// // Talia kart (pola koloru i figury)
// function Deck(){
  
  
//     this.colours = ["clubs", "diamonds", "hearts", "spades"];
//     this.values = [2,3,4,5,6,7,8,9,10,11,12,13,14];
//     this.deck=[];
//   }

// // Metoda assignValues przypisująca wszystkie kombinacje kolorów
// // i figur czyli zwyczajnie cała talia kart
//   Deck.prototype.assignValues = function(){
//     let deck = [];
//     this.colours.forEach(c=>{
//       this.values.forEach(v=>{
//         deck.push({
//           colour: c,
//           value: v
//         })
//       })
//     })
//    this.deck=deck;
//   }

// // Rozdanie kart 
//   Deck.prototype.dealOut = function(){
//     let hand = [];
//     let deck = this.deck;

//     for(let i=0; i<5; i++){
//       let randomIndex = Math.floor(Math.random()*(deck.length-1)); 
//       hand.push(deck[randomIndex]);
//       deck.splice(randomIndex,1);
    
//     }
//     console.log(hand.length)
//     return hand;
//   }

//   // Losowanie karty 
//   function Card(colours, values){
//     let colour = colours[Math.floor(Math.random()*4)]
//     let value = values[Math.floor(Math.random()*14)]
//     this.card = {
//       colour: colour,
//       value: value
//     }
//     return this.card;
//   }

//   // Ręka
//   function Hand(){
//       this.hand = [];
//   }

//   Hand.prototype.holdCards = function(cards){
//       this.hand = cards;
//   }
//   // Funkcja do sortowania od najwyższej do najniższej - porównywanie dwóch wartości
//   function compare(a, b) {
//       if (a.value < b.value) {
//         return 1;
//       }
//       if (a.value > b.value) {
//         return -1;
//       }
//       return 0;
//     }
 
// // Sprawdzenie jakie rozdanie ma gracz
// function checkTheSet(set){
//     let msg ="";
//     let highestFigure;
//     let straightFlush = true;
//     let strit = true;
//     let flush = true;
//     let royalFlush = false;
//     let tripleCount = 0;
//     let pairCount = 0;

// // Poukładaj po kolei karty w talii wg ich wartości
//     set.sort(compare)    
//   console.log("Uporządkowane karty:", JSON.stringify(set))
// highestFigure= set[0].value;
// // TU sprawdzamy, czy:
// // zestaw ma taki sam kolor (Flush), 
// // czy karty są narastające (Strit), 
// // albo czy zaistniały oba warunki (Straight flush)

//     for(let i =0; i<set.length-1; i++){
//         let notSameColour = (set[i].colour !== set[i+1].colour);
//         let notSameValue = ((set[i+ 1].value + 1 ) !== set[i].value );
//             if(!notSameValue && set[0]===14){
//                 royalFlush = true;
//             }
//             if (notSameValue || notSameColour) {
//                 straightFlush = false;
//             } 
//             if(notSameValue){
//                 strit=false;
//             }
//             if(notSameColour){
//                 flush=false;
//             }
//     }
// // Wypisanie pasujących układów
//     if(royalFlush === true){console.log("1. Royal Flush")}
//     if(straightFlush === true){console.log("2.Straight flush")};
//     if(flush === true) {console.log("5. Flush")}
//     if(strit===true){console.log("6. Strit")}

// // Filtrowanie powtarzających się figur
//    let figureFilter = set.filter((c, index)=>{
//      return(
//        (index===set.findIndex(obj=>{
//          return obj.value===c.value;
//        }))
//      )
//    })

// // Redukcja do tablicy powtarzających się figur [{figura: , ilość wystąpień:}]
//    let listOfFigurePairs = figureFilter.map(el => {
//      let value = el.value;
//      let count = 0;
    
//         set.map(h => {
//           if (el.value === h.value) {
//             count += 1;
//           }
//         });
//         return {value: value, count: count}
//       });

// // Funkcja do sprawdzenia czy jest następna para albo trójka i złączenia tekstów.
//   function checkForNextString(){
//     if(msg.length>0)
//     msg=msg.concat(", ");
//   }     

// // Sprawdzenie czy są pary, trójki albo czwórka
//   listOfFigurePairs.map(el=>{
//    switch(el.count){
//      case 2:
//        checkForNextString()
//        msg = msg.concat("9. Pair of "+el.value);
//        pairCount++;
//        break;
//     case 3:
//       checkForNextString()
//       msg = msg.concat("8. A triple of "+el.value);
//       tripleCount++;
//       break;
//     case 4:
//       checkForNextString()
//       msg = msg.concat("3. Four of a kind: "+ el.value);
//       break;
//    }
   
//   })

//   //Sprawdzanie czy jest FULL HOUSE albo dwie pary
//     if(pairCount ===1 && tripleCount ===1){
//         console.log("4. Full house")
//     }else if(pairCount === 2){
//         console.log("7. Two pairs")
//     }
//     console.log("10. Highest figure:", highestFigure)
// // Wywołanie komunikatu o dwójkach, trójkach i czwórkach.
//     console.log(msg)
//   }
  

//   // TESTOWANIE POSZCZEGÓLNYCH UKŁADÓW
//   let setRoyalFlush = [{"colour": "hearts", "value": 14},{"colour": "hearts", "value": 13},{"colour": "hearts", "value": 12},{"colour": "hearts", "value": 11}, {"colour": "hearts", "value": 10}]
//   let setStraightFlush =[{"colour": "hearts", "value": 9},{"colour": "hearts", "value": 8},{"colour": "hearts", "value": 7}, {"colour": "hearts", "value": 6},{"colour": "hearts", "value": 5}]
//   let setFourOfAKind = [{"colour": "hearts", "value": 14},{"colour": "spades", "value": 14},{"colour": "clubs", "value": 14}, {"colour": "diamonds", "value": 14},{"colour": "hearts", "value": 5}];
//   let setFullHouse=[{"colour": "hearts", "value": 14},{"colour": "spades", "value": 14},{"colour": "clubs", "value": 14}, {"colour": "hearts", "value": 13},{"colour": "spades", "value": 13}];
//   let setFlush = [{"colour": "hearts", "value": 14},{"colour": "hearts", "value": 12},{"colour": "hearts", "value": 7}, {"colour": "hearts", "value": 6},{"colour": "hearts", "value": 5}];
//   let setStrit = [{"colour": "hearts", "value": 9},{"colour": "diamonds", "value": 8},{"colour": "clubs", "value": 7}, {"colour": "spades", "value": 6},{"colour": "hearts", "value": 5}]
//   let setThreeOfAKind = [{"colour": "hearts", "value": 9},{"colour": "spades", "value": 9},{"colour": "diamonds", "value": 9}, {"colour": "spades", "value": 2},{"colour": "diamonds", "value": 1}] 
//   let setTwoPairs = [{"colour": "hearts", "value": 9},{"colour": "spades", "value": 9},{"colour": "diamonds", "value": 7}, {"colour": "spades", "value": 7},{"colour": "diamonds", "value": 1}] 
//   let setOnePair = [{"colour": "hearts", "value": 9},{"colour": "spades", "value": 9},{"colour": "diamonds", "value": 7}, {"colour": "spades", "value": 5},{"colour": "diamonds", "value": 1}] 
//   let setHighCard = [{"colour": "hearts", "value": 12},{"colour": "spades", "value": 3},{"colour": "diamonds", "value": 7}, {"colour": "spades", "value": 5},{"colour": "diamonds", "value": 1}] 
 
//   //POWOŁANIE INSTANCJI KLAS DECK i losowanie kart
//   let colours = ["clubs", "diamonds", "hearts", "spades"];
//   let values=[2,3,4,5,6,7,8,9,10,11,12,13,14];
//   let deck = new Deck();
//   deck.assignValues()
//   let fullHand = deck.dealOut();

//   console.log("Oto wylosowane karty:", JSON.stringify(fullHand))
//   checkTheSet(fullHand);
  

  

// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------
  //EXAM
  // SUDOKU
// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------


// let sudoku = 
// [
//           [7,0,4,8,0,0,3,0,1], 
//           [8,2,0,5,0,0,0,4,0],
//           [0,0,9,4,3,0,5,0,0],
//           [3,1,0,0,0,0,8,0,7],
//           [0,8,0,0,0,0,0,1,0], 
//           [9,0,7,0,0,0,0,3,2],
//           [0,0,6,0,1,5,4,0,0], 
//           [0,7,0,0,0,9,0,6,5], 
//           [5,0,8,0,0,2,1,0,3]
// ]
//     function saveEmptyPositions(array){
//       let emptyArray = [];
//       for(let i = 0; i<array.length; i++){
//         for(let j=0; j<array.length; j++){
//           if(array[i][j]===0){
//             emptyArray.push([i,j]);
//           }
//         }
//       }
//       return emptyArray;
//     }
//     function checkInRow(array, rowNum, arrayElement){
//       for(let i=0; i<array.length; i++){
//           if(array[rowNum][i]===arrayElement)
//           return false;
//       }
//       return true;
//     }
//     function checkInColumn(array, colNum, arrayElement){
//         for(let i=0; i<array.length; i++){
//           if(array[i][colNum]===arrayElement)
//           return false;
//         }
//         return true;
//     }
   
//     function checkInSquare(array, column, row, arrayElement){
//       let rowCorner=0;
//       let columnCorner=0;
//       let squareSize = 3;
      
//       while(row >= rowCorner+squareSize){
//         rowCorner+=squareSize;
//       }
//       while(column>=columnCorner+squareSize){
//         columnCorner+=squareSize;
//       }

//       for(let i=rowCorner; i<rowCorner+squareSize; i++){
//         for(let j=columnCorner; j<columnCorner+squareSize; j++){
//         if(array[i][j]===arrayElement)
//         return false;
//       }}
//       return true;
      
//     }

//     //Sprawdzanie
//     let maxSize = 9;
//     let found=false;
//     let blank = sudoku;
//     let value;
//     let emptyPositions = saveEmptyPositions(blank);

//           for (let i=0; i<emptyPositions.length;){
//             x = emptyPositions[i][0];
//             y = emptyPositions[i][1];
//             found = false;
//             value = blank[x][y]+1;
//           while(value<=maxSize && !found){
             
//                 if(
//                   checkInRow(blank, x, value) &&
//                   checkInColumn(blank, y, value) &&
//                   checkInSquare(blank, y, x, value)
//                 ){
//                   found = true;
//                   blank[x][y]=value;
//                   i++;
//                 }
//                 else{
//                   value++;
//                 }
//               } 
//           if(!found) {
//             blank[x][y] = 0;
//             i--;
//           } 
         
//         }
//         console.table(blank)
