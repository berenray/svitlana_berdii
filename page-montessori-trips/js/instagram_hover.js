// Например, замена изображения при наведении
let blockA = document.getElementById("instagram-btn");

blockA.addEventListener("mouseover", function() {
    let image = blockA.querySelector("img");
    image.src = "./content/contacts/inst.png";
    
});

blockA.addEventListener("mouseout", function() {
    let image = blockA.querySelector("img");
    image.src = "./content/contacts/inst hover.png";
});
