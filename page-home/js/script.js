'use strict';

window.addEventListener('DOMContentLoaded', () => {
    // Slider
    (function(){

        const slides = document.querySelectorAll('.fade-slider__item');
        const activeClass = "fade-slider__item-active";
    
        let index = 0; 
    
        setInterval(function(){
            slides[index].classList.remove(activeClass)
            index = index +1 
            if(index +1  > slides.length){
                index = 0;
            }
            slides[index].classList.add(activeClass)
        }, 4000)
    
    }())

    //Filter

    function Filter () {
        const elem = document.querySelector(".my-projects");
        const iso = new Isotope(elem, {
          itemSelector: ".projects-item",
          filter: '.montessori'
        });
      
        const controlls = document.querySelectorAll(".filter__link");
        const activeClass = "filter__link--active";
      
        controlls.forEach(function(control) {
          control.addEventListener("click", function(e) {
            e.preventDefault();
            
            const filterName = control.getAttribute("data-filter");
      
            controlls.forEach(function(link) {
              link.closest(".filter__item").classList.remove(activeClass);
            });
      
            control.closest(".filter__item").classList.add(activeClass);
      
            iso.arrange({
              filter: `.${filterName}`
            })
          });
        });
      };
      
      if (localStorage.getItem("reload") === "false") {
        localStorage.removeItem("reload");
      } else {
        localStorage.setItem("reload", "false");
        window.location = window.location;
      }
    
    //Mail

    const mailPath = 'mail.php'

    document.querySelectorAll('.uniForm').forEach( (e) => {

	e.addEventListener('submit', function(e) {

		let th      = this,
		    params  = new FormData(this),
		    request = new XMLHttpRequest()

		request.open('POST', mailPath, true)
		request.send(params)

		request.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				setTimeout(function() { th.reset() }, 1000)
				alert('Thank you!')
			}
		}

		e.preventDefault()

	});

    });

    //Hover

        //Instagram

    let blockA = document.getElementById("instagram-btn");

    blockA.addEventListener("mouseover", function() {
        let image = blockA.querySelector("img");
        image.src = "content/contacts/inst.png";
        
    });

    blockA.addEventListener("mouseout", function() {
        let image = blockA.querySelector("img");
        image.src = "content/contacts/inst hover.png";
    });

        //Telegram

    let btn = document.getElementById("telegram-btn");

    btn.addEventListener("mouseover", function() {
        let image = btn.querySelector("img");
        image.src = "content/contacts/telegram.png";
    });
    
    btn.addEventListener("mouseout", function() {
        let image = btn.querySelector("img");
        image.src = "content/contacts/telegram hover .png";
    });

        //WhatsApp

    let btnWhatsapp = document.getElementById("whatsapp-btn");

    btnWhatsapp.addEventListener("mouseover", function() {
        let image = btnWhatsapp.querySelector("img");
        image.src = "content/contacts/whatsapp.png";
    });
    
    btnWhatsapp.addEventListener("mouseout", function() {
        let image = btnWhatsapp.querySelector("img");
        image.src = "content/contacts/whatsapp hiver.png";
    });

        //Youtube

    let btnYoutube = document.getElementById("youtube-btn");

    btnYoutube.addEventListener("mouseover", function() {
        let image = btnYoutube.querySelector("img");
        image.src = "content/contacts/youtube.png";
    });
    
    btnYoutube.addEventListener("mouseout", function() {
        let image = btnYoutube.querySelector("img");
        image.src = "content/contacts/youtube hover.png";
    });

})