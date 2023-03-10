// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let newArray = []
array.forEach(user =>{
    let {username} = user;
  username = username + '!'
    newArray.push(username); 
})

//Create an array using map that has all the usernames with a "? to each of the usernames
const mapArray = array.map(user => {
	let { username } = user;
	return username + "?";
})
console.log(mapArray);

//Filter the array to only include users who are on team: red
const newArray2 = array.filter(item =>{
    return item.team === 'red'
})



//Find out the total score of all users using reduce

const total = array.reduce((total, item) =>{
    return total + item.score;
    
}, 0) 
console.log(`Total Score for now is: ${total}`);



// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	return num * 2;
})

// value of i = index, 0 then 1 then 2 and so on


//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const newList = array.map(user =>{
  user.items = user.items.map(item => {
    return item + '!';
  })
  return user;
})