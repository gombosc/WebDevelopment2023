
    //  Grabing DOM elements
const button = document.getElementById('btn');
const usersAPI =document.getElementById('users') 
const postsAPI =document.getElementById('posts') 
const commentsAPI =document.getElementById('comments')
const divElement =document.getElementById('Wrapper')

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments',
    'https://jsonplaceholder.typicode.com/albums'
]
// Method 1
Promise.all(urls.map(url => {return fetch(url).then(resp => resp.json())}))
.then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
    console.log(results[3]);
}
)
.catch(() => console.log('error'));

// Method 2
async function starWarsApi(){
    const resp = await fetch('');
    const data = await resp.json()
    console.log(data);
}

// Creating function to show API Data inside HTML file
function showDataFromApi(users, posts, comments){
    usersAPI.innerHTML = 'User Name: ' + users;
    postsAPI.innerHTML = 'Posts: ' + posts;
    commentsAPI.innerHTML = 'Comments: ' + comments;
    divElement.style.backgroundColor = '#fbf1a9';
 }

 let i = 0;
// Method 3 - the one I use in the HTML
 const getData = async function(){
    try{
        const[users, posts, comments] = await Promise.allSettled(urls.map(url => fetch(url)
        .then(resp => resp.json())
        ))
     
        usersValue = users.value[i].name;
        postsValue = posts.value[i].title;
        commentsValue = comments.value[i].name;
        console.log("Users: ", usersValue);
        console.log("Posts: ", postsValue);
        console.log("Comments: ", commentsValue);
        i++;
        console.log("Value of i is: ", i)
    }
    catch(error){
        console.log("Ops! A error occured...", error);
    }
    // Take data from function and update h1 elements with API data
    if(i<=9)
        {showDataFromApi(usersValue, postsValue, commentsValue)}
    else{
        users.innerHTML = "Sorry, no more users!"
        postsAPI.remove();
        commentsAPI.remove()
    };
 }





