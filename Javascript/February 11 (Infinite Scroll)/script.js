// DOM variables
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

// API variables
const count = 10;
const ApiKey ='V5LjVvG9xOFlPJYsoAgXv5qUpdSrlVXWugfe8sVHXew';
const SecretKey ='p18wvgwrjqhPwHJhjTNBBNxH-f3Jboht7KWHwq2GKvk'
const apiUrl = `https://api.unsplash.com/photos/?client_id=${ApiKey}&count=${count}`
let photosArray = []

function displayPhotos(){
    photosArray.forEach(photo=> {
        console.log('Photo: '+ photo)
        // Create <a> element to link to Unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        // Create <img> for photo
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt.description);
        img.setAttribute('title', photo.alt.description)
        // Put <img> inside <a> and then both inside image-container
        item.appendChild(img);
        imageContainer.appendChild(item);
    })

}

async function fetchImagesfromUnsplash(){
    try{
        const response = await fetch(apiUrl); 
        photosArray = await response.json();
        console.log(photosArray)
        displayPhotos();
    }catch (error){
        // Show error report
    }
}

fetchImagesfromUnsplash();