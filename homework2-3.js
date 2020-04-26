//----------------------------------------------------------------------------------------------------------------------------------------------------
// 1)	Do you like treasure hunts? In this problem you are to write a program to explore the above array for a treasure. 
// The values in the array are clues. Each cell contains an integer between 11 and 55; 
// for each value the ten's digit represents the row number and the unit's digit represents the column number of the cell containing the next clue. 
// Starting in the upper left corner (at 1,1), use the clues to guide your search of the array. (The first three clues are 11, 34, 42). 
// The treasure is a cell whose value is the same as its coordinates.
//  Your program should output the cells it visits during its search, and a message indicating where you found the treasure.
//----------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------

// 'use strict'
// class Treasure{
//     constructor(array){
//         this.array = [
//             [34,21,32,41,25],
//             [14,42,43,14,31],
//             [54,45,52,42,23],
//             [33,15,51,31,35],
//             [21,52,33,13,23]
//         ];
//         this.start={x:1, y:1};
//         this.coordinates={};
//     }

//     getTileCoordinates(){
//         // start to pozycja startowa (na początku 1,1 później to co w środku)
//         let sx = this.start.x;
//         let sy = this.start.y;
//         let arrayElement = this.array[sx-1][sy-1].toString();
//         let x = arrayElement.slice(0,1);
//         let y = arrayElement.slice(1,2);
//         //tileObject to współrzędne ze środka elementu
//         let tileObject = {
//             x: parseInt(x), 
//             y: parseInt(y)
//         }
//         return tileObject;
//     }
//     setTileCoordinates(x,y){
//         this.start={x:x,y:y}
//     }
//     searchForTile(tileCoordinates){
//         let sx = this.start.x;
//         let sy = this.start.y;
//         let tx = tileCoordinates.x;
//         let ty = tileCoordinates.y;

//         if(sx===tx && sy === ty){
//             console.log("Congratulations, you won nothing!!! Table of content:");
//             console.table(this.array);
//             console.log("Result is at:[", sx, ",", sy, "] and it contains result of: [", tx,ty, "]");

//         }else{
//             //tutaj musimy start ustawić na wewnętrzne koordynaty
//             console.log("Tile visited coordinates:[ ", sx, ",", sy, "] and it contains result of: [", tx,ty, "]")
//             this.setTileCoordinates(tileCoordinates.x, tileCoordinates.y)
//             this.searchForTile(this.getTileCoordinates())
//         }
//     }

// }
// let start={x:1, y:1};
// let coordinates={x:1, y:1};
// let newTreasure = new Treasure();
// newTreasure.searchForTile(newTreasure.getTileCoordinates())



//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
// 2)	Chess board. Program is to choose at random one of the chess piece (except the pawn) 
// and place it at the random spot on the board. 
// After placing any piece (except first one) check all present pieces move ranges 
// and see if any can reach other piece. Is so Give that pieces position and quit program. 
// FACTORY (with class hierarhy) + SINGLETON pattern
//-------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------
'use strict'
//SINGLETON PATTERN
class Board{
    constructor(board){
        this.board = [
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0]
        ]
        
        this.pieces = ["king", "queen", "rook", "bishop", "knight" ];
        this.piecesArray = [];
     
    }
    getRandomPiece(){
        let number = Math.floor(Math.random()*this.pieces.length);
        let piece = this.pieces[number];
        this.pieces.splice(number,1);
        return piece;
    }
    getThePiecePosition(){
        let x = Math.floor(Math.random()*7);
        let y = Math.floor(Math.random()*7);
        return {x,y};
    }
    setThePieceOnBoard(piece, position){  
        if(this.board[position.x][position.y]===0){
            this.board[position.x][position.y]=piece;
            this.piecesArray.push(piece);
        } else{
            let {x,y} = this.getThePiecePosition();
            this.board[x][y]=piece;
            this.piecesArray.push(piece);
            piece.position = {x,y};
        }

       
    }
    isPieceBeaten(piece){
        let result = false;
        let firstPiece, secondPiece;
        let piecePosition = [piece.position.x, piece.position.y];
        this.piecesArray.forEach(p=>{
            let tableOfResults = p.moveOptions.map(m=>m===piecePosition);
            if(tableOfResults.length>0){
                firstPiece = p;
                secondPiece=piece;
                result=true;
            
            }
        })
        return {result, piecePosition, firstPiece, secondPiece};
    }
   
}

class Piece{
    constructor(pieceType, position, range, moveOptions){
        this.pieceType = pieceType;
        this.position = position;
        this.range = range;
        this.moveOptions = moveOptions;
      
    }
   
}
// KING - KRÓL - dowolny kierunek o 1 pole
class King extends Piece{
    constructor(options){
        super(options.pieceType);
        this.position = options.position;
        this.range = 1;
        this.moveOptions = options.moveOptions;
       
    }
   
    
}
// QUEEN - HETMAN - dowolny kierunek o dowolną liczbę pól
class Queen extends Piece{
    constructor(options){
        super(options.pieceType);
        this.position = options.position;
        this.range = 7;
        this.moveOptions = options.moveOptions;
        
    }
}
// ROOK - WIEŻA - tylko w pionie i poziomie o dowolną liczbę pól
class Rook extends Piece{
    constructor(options){
        super(options.pieceType);
        this.position = options.position;
        this.range = 7;
        this.moveOptions = options.moveOptions;

    }

}
// BISHOP - GONIEC  - tylko na ukos o dowolną liczbę pól; 
class Bishop extends Piece{
    constructor(options){
        super(options.pieceType);
        this.position=options.position;
        this.range = 7;
        this.moveOptions = options.moveOptions;
    }
}
// KNIGHT - SKOCZEK - o cztery pola w kształcie litery L;
class Knight extends Piece{
    constructor(options){
        super(options.pieceType);
        this.position=options.position;
        this.range= 2;
        this.moveOptions = options.moveOptions;
    }
}

class PieceFactory{
    constructor(){
        //kierunki poruszania się pionków - na ukos, pionowo i poziomo oraz ruch skoczka (ani poziomo, ani pionowo, ani na ukos)
        this.vectorsAxial=[{x:1,y:-1}, {x:1, y:1}, {x:-1, y:1}, {x: -1, y:-1}];
        this.vectorsDiagonal=[{x:1, y:0}, {x:-1, y:0}, {x:0,y:-1}, {x:0, y:1}];
        this.vectorsKnight=[{x:2, y:1}, {x:-2, y:-1}, {x:-2, y:1}, {x:2, y:-1}, {x:1, y:2}, {x:-1, y:-2}, {x:-1, y:2}, {x:1, y:-2}];
    }
   
 createPiece(options){
     switch(options.pieceType){
         case "king":
            options.moveOptions=this.setMoveOptions(options.position, 2, true, true, false); 
            return new King(options);
         case "queen":
            options.moveOptions=this.setMoveOptions(options.position, 7, true, true, false); 
            return new Queen(options);
         case "rook":
            options.moveOptions=this.setMoveOptions(options.position, 7, false, true, false); 
            return new Rook(options);
        case "bishop":
            options.moveOptions=this.setMoveOptions(options.position, 7, true, false, false); 
            return new Bishop(options);
        case "knight":
            options.moveOptions=this.setMoveOptions(options.position, 2, false, false, true); 
            return new Knight(options);
        default:
            console.log("Specify type of piece.");
        break;
     }
 }

 setMoveOptions(position, range, axial, diagonal, knight){
    let positions=[];
    function countPosition(position, v, range){
        let xAxis, yAxis;
        for(let i=0; i<range; i++){
            xAxis = position.x+(i*v.x);
            yAxis = position.y+(i*v.y);
            if(position.x===xAxis && position.y===yAxis){
                
            }else{
                if(xAxis>=0 && xAxis<=7){
                    if(yAxis>=0 && yAxis<=7){
                        positions.push([xAxis, yAxis]);
                    }
                }
            }
           
        }
    }
    if(diagonal===true){
        this.vectorsDiagonal.forEach(vector=>{
            countPosition(position,vector,range);
        })
    }
    if(axial===true){
        this.vectorsAxial.forEach(vector=>{
            countPosition(position,vector,range);
        })
    }
    if(knight===true){
        this.vectorsKnight.forEach(vector=>{
            countPosition(position,vector,2);
        })
    }
    return positions;
    }
}

const pieceFactory = new PieceFactory();
const board = new Board();
let piece;
let position;
let pieceType;
//     //wylosuj miejsce dla pierwszego pionka i rodzaj pionka
        position = board.getThePiecePosition();
        pieceType = board.getRandomPiece();
        piece = pieceFactory.createPiece({pieceType, position});
        board.setThePieceOnBoard(piece, position);
        
//następne pionki - porównujemy do poprzedniego;
for(let i = 0; i<4; i++){
    position = board.getThePiecePosition();
    pieceType = board.getRandomPiece();
    piece = pieceFactory.createPiece({pieceType, position});
    //sprawdź czy inne pionki zbiją ten pionek, jeśli tak to skończ program, jeśli nie postaw pionek na szachownicy
    let beaten = board.isPieceBeaten(piece);
    if(beaten.result===true){
        
        console.log("Your piece:", beaten.secondPiece.pieceType, "have been defeated, at the position:", beaten.piecePosition, "by:", beaten.firstPiece.pieceType )
        break;
    }else{
        board.setThePieceOnBoard(piece, position);
    }
     
}