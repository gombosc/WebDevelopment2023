//  Grabing DOM elements
const button = document.getElementById('btn');
const usersAPI =document.getElementById('users') 
const postsAPI =document.getElementById('posts') 
const commentsAPI =document.getElementById('comments')

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
    
 }

// Method 3
 const getData = async function(){
    try{
        const[users, posts, comments] = await Promise.allSettled(urls.map(url => fetch(url)
        .then(resp => resp.json())
        ))
        console.log("Users: ", users.value[1].name);
        console.log("Posts: ", posts.value[1].title);
        console.log("Comments: ", comments)
        usersValue = users.value[1].name;
        postsValue = posts.value[1].title;
        commentsValue = comments.value[1].name;
    }
    catch(error){
        console.log("Ops! A error occured...", error);
    }
    
    showDataFromApi(usersValue, postsValue, commentsValue);
 }




