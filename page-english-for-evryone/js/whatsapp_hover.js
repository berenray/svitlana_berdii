let btnWhatsapp = document.getElementById("whatsapp-btn");

btnWhatsapp.addEventListener("mouseover", function() {
    let image = btnWhatsapp.querySelector("img");
    image.src = "./content/contacts/whatsapp.png";
});

btnWhatsapp.addEventListener("mouseout", function() {
    let image = btnWhatsapp.querySelector("img");
    image.src = "./content/contacts/whatsapp hiver.png";
});