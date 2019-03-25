let wornikAPI = "";
let giphyAPI = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=CfJLJglzbLCrMGhbZGVQuL5IG7m8tavf";
var query = "&q=ryan+gosling";

function setup(){
    noCanvas();
    var url = api + apiKey + query;
    loadJSON(url,gotData)
}

function gotData(giphy){

    createImg(giphy.data.images.original.url);
    for(var i = 0; i < giphy.data.length; i++){

    }
}