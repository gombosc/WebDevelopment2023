//using arrays and objects
var database = [
    {
        name: "Cosmin",
        password: "Test123",
    },
];

var timeline = [
    {
        user: "Bobby",
        feed: "Today I ate pizza and I feed bad about it!"
    },

    {
        user: "Melina",
        feed: "I failed my exams and I don't know how I feel about it",
    }
];



function checkUser(username, password){
    if (username === database[0].name && password === database[0].password)
    {
        alert("Welcome back " + username);
        console.log(timeline);
    }
        else {alert("Wrong username or password!");
    } 
}

user = prompt("Please insert your username");
pass= prompt("Please insert your password");
console.log(user[0].name + " " + user[0].password)

checkUser(user,pass);


