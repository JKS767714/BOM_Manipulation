
 //define animals
const animals = ["cat", "dog", "pig"]

//prompt use for answer
let animal = function(){
    let selection = prompt(`Guess an Animal`)
    let correct = false;

    for(let i = 0; i < animals.length; i++){
         if (animals[i] == selection){
            correct = true;
         }
        }
    //  //------
     if(correct){
        alert("yes")
       }  else {
        alert('no') 
       } 
    };
//---------------------------------------------------------------------------------------------

// // Define animals
// const animals = ["cat", "dog", "pig"];

// // Prompt user for answer
// let animal = function(){
//     let selection = prompt(`Guess an Animal`);
//     let found = false;

//     animals.forEach((a) => {
//         if (a === selection) {
//             found = true;
//         }
//     });

//     if (found) {
//         alert("Correct!");
//     } else {
//         alert("Incorrect!");
//     }
// };

// animal();

        
    
    


    
    
   

