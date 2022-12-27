const gifList = document.querySelector('.gifs-list');
const searchBtn = document.querySelector('.search-btn');
const gifAPI = 'AIzaSyAX4b80G9NuPVU-tPEqhJ5AUdYmP5GpV2Q';
const inputGifValue = document.querySelector('.input-gif').value;





const getGifList = async (gifname) => {
    const gifURL = `https://tenor.googleapis.com/v2/search?q=${gifname}&key=${gifAPI}&limit=8`
    const gifResult = await fetch(gifURL);
    const gifJSON = await gifResult.json();
    return gifJSON;
}

const showGifs = async (gifname) => {
    let gifAreaHTML = ''
    const gifJSON = await getGifList(gifname);

    for (let i in gifJSON) {
        // gifAreaHTML += `<div class="col-md-4"><img src="${gifJSON[i].media_formats.gif.url}"></div>`
        console.log(gifJSON[i]); 
        // gifList.innerHTML = gifAreaHTML;
    }
}

showGifs('bomdia')