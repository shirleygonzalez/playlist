/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Moments","Icon","Baile de Favela","Level Up","Oye Mi Amor"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images = ["https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj0itGJoeTfAhUyT98KHTnCDf4QjRx6BAgBEAU&url=https%3A%2F%2Fgenius.com%2FJhene-aiko-moments-lyrics&psig=AOvVaw1TkrThrVzvqS4IsZsTBFAG&ust=1547245574351539",
"https://i.ytimg.com/vi/CFVxZFhN7lo/maxresdefault.jpg",
"https://i.ytimg.com/vi/3n61bCFzvSo/maxresdefault.jpg",
"https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/Ciara_-_Level_Up_single_cover.png/220px-Ciara_-_Level_Up_single_cover.png",
"https://i.ytimg.com/vi/IoOli-fR_cs/maxresdefault.jpg",
"https://images-na.ssl-images-amazon.com/images/I/61HOSMRwkhL._SS500.jpg"];
var artists = ["Jhene Aiko","Jaden Smith","MC Joao","Ciara","Mana"];
var songLengths=["179","202","187","211","273"];
var songLinks =["https://youtu.be/4XlxoQoiYYg","https://youtu.be/cmc8q2dcIMs","https://youtu.be/kzOkza_u3Z8","https://youtu.be/Dh-ULbQmmF8","https://youtu.be/IoOli-fR_cs","https://youtu.be/DcnNeGQHwDc"];


    
// BELOW Use forEach Loop to display the data from each of your array's in the correct di

songs.forEach(function(song){
    $("body").append(song);
}
    

function emptySongInfo(){
    $("#songs").empty();
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#link").empty();
    
    // Use jQuery to empty all of the remaining divs
}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
