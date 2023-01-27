//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

const experiencePoints = winBattle() ? 10: 1;


//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
// Answer : undefined

//#3 return value when moveCommand("back");
// Answer : you arrived home


//#4 return value when moveCommand("right");
// Answer : you arrived home

//#5 return value when moveCommand("left");
// undefined

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!


function dailyHabits(action){
    var result;
    switch(action)
    {
        case 'gym':
            var result = 'You went to the gym and worked out.';
            break;
        case 'guitar':
            result = 'You played Polly by Nirvana on your guitar.'
            break;
        case 'read':
            result = `You've read some pages from your favorite book.`
            break;
        case 'sleep':
            result = 'You went for a quick and nice nap.'
            break;
        case 'meditate':
            result = `You've let go of everything and achieved a state of bliss!`
            break;
        default:
            result = 'Please just do something'
    }
    return result;
}