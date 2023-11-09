const apiKey = "72LOYkDgKR8Ub1SShZOFwsQSKFrNClCf2dPkPzqCQXW4aY6GqKYV46eU";
const query = "https://api.pexels.com/v1/photos/";
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("picId");

getPhoto();

async function getPhoto () {
    let response = await fetch(query + id, {
        headers: {
            authorization: apiKey,
        }
    });
    let photo = await response.json();
    
    const author = document.querySelector("h1");
    const img = document.querySelector("img");
    const authorLink = document.querySelector("a");
    
    author.innerText = photo.photographer;
    img.src = photo.src.landscape;
    authorLink.href = photo.photographer_url;
    document.body.style.backgroundColor = photo.avg_color;
}