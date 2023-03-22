const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {return fetch(url).then(resp => resp.json())}))
.then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
    console.log(results[3]);
}
)
.catch(() => console.log('error'));


async function starWarsApi(){
    const resp = await fetch('');
    const data = await resp.json()
    console.log(data);

}