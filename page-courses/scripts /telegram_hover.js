let btn = document.getElementById("telegram-btn");

btn.addEventListener("mouseover", function() {
    let image = btn.querySelector("img");
    image.src = "./content/contacts/telegram.png";
});

btn.addEventListener("mouseout", function() {
    let image = btn.querySelector("img");
    image.src = "./content/contacts/telegram hover .png";
});