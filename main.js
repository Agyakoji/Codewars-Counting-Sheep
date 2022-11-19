// Consider an array of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array (true means present).
// For example: [true, true, false, true, false, true,true]. Correct answer = 5

                      // SOLUTION USING FILTER METHOD
function countSheeps(arrayOfSheep){
    return arrayOfSheep.filter((x) => x === true).length
}
alert(countSheeps([true, true, false, true, false, true,true]))

                // SOLUTION USING FOR LOOP
// function countSheeps(arrayOfSheep){
//     let count = 0
//     for(let i = 0; i < arrayOfSheep.length; i++){
//         if(arrayOfSheep[i] === true){
//             count++
//         }
//     }
//     return count
// }
// alert(countSheeps([true, true, false, true, false, true,true]))

            // SOLUTION USING FOREACH LOOP
// function countSheeps(arrayOfSheep){
//     let count = 0
//     arrayOfSheep.forEach( x => {
//         if(x === true){
//             count++
//         }
//     });
//     return count
// }
// alert(countSheeps([true, true, false, true, false, true,true]))
