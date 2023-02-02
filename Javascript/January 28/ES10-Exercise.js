// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
let array = [[1],[2],[3],[[[4]]],[[[5]]]]
console.log(array2 = array.flatMap(element => element).flat());
`Examples
const arr2 = [[[1, 2], 3, 4, 5]] ;

console.log(arr2.flat(2));

// expected output 
[1, 2, 3, 4, 5]
---------------------------

const arr4 = [1, 2, [3, [4, 5, [6, 7]]]] ;

console.log(arr4.flatMap((element) => element).flat(2)) 
[1, 2, 3, 4, 5, 6, 7]
-----------------------

const arr3 = [1, 2, [4, 5], 6, 7, [8]] ;

console.log(arr3.flatMap((element) => element)); 

// expected output 
[1, 2, 4, 5, 6, 7, 8]
`


// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
console.log(greeting.flatMap(x => x.join(' ')))


//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
console.log(greeting.flatMap(x => x.join(' ')).join(' '))


//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
console.log(trapped.flat(Infinity))




//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
let newUser = userEmail3.trim()


//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }
const usersArray = Object.entries(users)

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]


//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
const updatedUsers = Object.fromEntries(updatedUsersArray)
console.log(updatedUsers)

// Object.fromEntires example

`<script>
    const map1 = new Map([ ['big', 'small'], [1, 0] ]);
    const geek = Object.fromEntries(map1);
    console.log(geek);
       
    const map2 = new Map(
        [['Geek1', 'Intern'],
        ['stipend', 'Works basis']]
    );
    const geek1 = Object.fromEntries(map2);
    console.log(geek1); 
</script>`

`Output
Object { 1: 0, big: "small" }
Object { Geek1: "Intern", stipend: "Works basis"}`