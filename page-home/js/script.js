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
    
    }()); 

    //Filter
    const tabs = document.querySelectorAll('.filter__item'),
        tabsContent = document.querySelectorAll('.projects-portfolio'),
        tabsParent = document.querySelector('.tabs-btn');

    function hideTabContent (){
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('filter__link--active');
        });
    };

    function showAppContent (i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('filter__link--active');
    };

    hideTabContent();
    showAppContent(0);

tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if(target && target.classList.contains('filter__item')) {
        tabs.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                showAppContent(i);
            }
        });
    }
});

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