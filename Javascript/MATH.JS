// var i = [150,600,120,150,450,400,320,100,280,160,200,350,260,250,200,390,270,280,460,300,350,100,180,150,40,40,100,100,550,280,75,40,360,80,340,300,340,280,30,420,260,400,250,460,400,130,400]
// i.forEach(element => {
//    let element2 = element * 0.023;
//     console.log(element2);
// });

// // take each array number and return it multiplied by 0.023



array = [1,2,3,4,5,6,7,8,9,10,11,100,200,500, 22,21,12,34,234]

function biggestNumberInArray2(arr) {
    let highNr = 0;
    for(let i = 0; i < arr.length; i++){
      if(highNr < arr[i]){
        highNr = arr[i];
      }
    }console.log('3:' + highNr)
    return highNr;
  }

  function biggestNumberInArray3(arr) {
    hNr = 0
    for(item of arr){
      if(hNr < item){
        hNr = item
      }
  
    }
    console.log('3:'+ hNr);
    return hNr
  }

biggestNumberInArray2(array)
biggestNumberInArray3(array)


amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
  }
  
function checkBasket(basket, lookingFor) {
    for(item in basket) {
      if(item === lookingFor){
        return `Item is inside the basket! There are currently ${basket[item]} items of ${item}`
      }
    }
    return "Item not inside"
  }

  checkBasket(amazonBasket, 'books')
