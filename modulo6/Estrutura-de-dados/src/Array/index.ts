const hogwartsHouses = new Array(
   "Grifinória",
   "Lufa-Lufa",
   "Sonserina",
   "Corvinal"
)

const removeElement = (array:Array<any>, indexToRemove: number) =>{
   for (let index = indexToRemove; index < array.length; index++) {
      array[index] = array[index+1];
   }
   array.pop()
}

removeElement(hogwartsHouses,1)
console.log(hogwartsHouses);

// function removerElemento(array:Array<any>,index:number){
//   for(let i = index ; i < array.length ; i++){
//      array[i] = array[i+1]
//   }
//   array.length --
//  console.log(array);
// }
// removerElemento(labenuGroups,2)
