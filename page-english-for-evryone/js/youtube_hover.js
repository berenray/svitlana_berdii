let btnYoutube = document.getElementById("youtube-btn");

btnYoutube.addEventListener("mouseover", function() {
    let image = btnYoutube.querySelector("img");
    image.src = "./content/contacts/youtube.png";
});

btnYoutube.addEventListener("mouseout", function() {
    let image = btnYoutube.querySelector("img");
    image.src = "./content/contacts/youtube hover.png";
});