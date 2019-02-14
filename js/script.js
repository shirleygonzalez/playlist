/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Moments","Icon","Baile de Favela","Level Up","Oye Mi Amor"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images = ["https://www.mp3panda.com/98/984806/alb_5112303_big2.jpg",
"https://i.ytimg.com/vi/CFVxZFhN7lo/maxresdefault.jpg",
"https://i.ytimg.com/vi/3n61bCFzvSo/maxresdefault.jpg",
"https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/Ciara_-_Level_Up_single_cover.png/220px-Ciara_-_Level_Up_single_cover.png",
"https://images-na.ssl-images-amazon.com/images/I/61HOSMRwkhL._SS500.jpg"];
var artists = ["Jhene Aiko","Jaden Smith","MC Joao","Ciara","Mana"];
var songlengths=["179","202","187","211","273"];
var links =["https://youtu.be/4XlxoQoiYYg","https://youtu.be/cmc8q2dcIMs","https://youtu.be/kzOkza_u3Z8","https://youtu.be/Dh-ULbQmmF8","https://youtu.be/DcnNeGQHwDc"];


    
// BELOW Use forEach Loop to display the data from each of your array's in the correct display

function displaySongInfo(){
songs.forEach(function(song){
    $("#songs").append("<p>" + song + "</p>");
});

images.forEach(function(image){
    $("#images").append("<img src='" + image + "'>");
});

artists.forEach(function(artist){
    $("#artists").append("<p>" + artist + "</p>");
});

songlengths.forEach(function(length){
    $("#lengths").append("<p>" + length + "</p>");
});

links.forEach(function(link){
    $("#links").append("<a href='" + link + "'> Listen </a>");
});

}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    $("#songs").add();
    $("#images").add();
    $("#artists").add();
    $("#lengths").add();
    $("#links").add();
}

$("#add").click(function() {
    var songN = $("#song").val();
    var imageU = $("#image").val();
    var artistN = $("#artist").val();
    var songL = $("#length").val();
    var link = $("#links").val();

    songs.push(songN);
    artists.push(artistN);
    images.push(imageU);
    songlengths.push(songL);
    links.push(link);
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();