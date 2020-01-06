//JOSEPHUS PROBLEM

let soldiers = [1,2,3,4,5,6,7,8]
let j=1;
let i=0;

while(soldiers.length>1){
    if(soldiers[i]===undefined){
         i=0;
    }
    while(i<soldiers.length){ 
        if(soldiers[i]===undefined){
            i=0;
        }
        if(soldiers[j]===undefined){
            if(i===0){
                j=1;
            }else{
                j=0;
            }
        } 
        while(j<=soldiers.length){
            if(soldiers[i]===undefined){
                i=0;
              
            }
            if(soldiers[j]===undefined){
                if(i===0){
                  j=1;
                }else{
                    j=0;
                   
                }
            } 
            console.log("Soldier",soldiers[parseInt(i)],"kills",soldiers[j]);
            soldiers.splice(j,1);
            i++;
            j++; 
        }
    } 
}
console.log("Survivor:",soldiers[0])