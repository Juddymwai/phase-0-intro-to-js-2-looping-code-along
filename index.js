// Code your solutions in this file
function writeCards(array, eventName){
    let newArray = []
  
    for (let card = 0; card < array.length; card++) {
      let message = `Thank you, ${array[card]}, for the wonderful ${eventName} gift!`
      newArray.push(message);
    }
    console.log(newArray)
    return newArray
  
  }
  writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")
  
  
  function countDown (integer){
    let i = 10;
    while (i >= 0) {
      console.log(i);
      i--;
    }
  }
  countDown();