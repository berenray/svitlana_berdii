'use strict';

window.addEventListener('DOMContentLoaded', () => {
    
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

    // Animation

    const windowHeight = window.innerHeight,
        menu = document.querySelector('.menu-text'),
        firstText = document.querySelectorAll('.first-text_animate'),
        coursesFirst = document.querySelector('.content_container'),
        counterFirstText = 17,
        counterContactsText = 19,
        coursesSecond = document.querySelector('.courses-content_second'),
        buyBtn = document.querySelector('.container_buy'),
        textContacts = document.querySelector('.text-contacts'),
        formContent = document.querySelector('.uniForm'),
        contactsText = document.querySelectorAll('.first-text_content'),
        contactsContent = document.querySelector('.contacts-information_sections');

    let index = 0;

    menu.classList.remove('menu_animated_before');
    menu.classList.add('menu_animated');
    coursesFirst.classList.remove('courser_animated_before');
    coursesFirst.classList.add('courses_animated');

    const interval = setInterval(()=> {
        firstText[index].classList.remove('menu_animated_before');
        firstText[index].classList.add('menu_animated');
        index = index + 1;
        if(index >= counterFirstText) {
            clearInterval(interval);
        }
    }, 30);

    window.addEventListener('scroll', ()=> {
        const coursesSecondElement = document.querySelector('.courses-animated_second'),
            coursesSecondElementPosition = coursesSecondElement.getBoundingClientRect().top;

        if(coursesSecondElementPosition < windowHeight){
            coursesSecond.classList.remove('courser_animated_before');
            coursesSecond.classList.add('courses_animated');
        }
    });

    window.addEventListener('scroll', ()=> {
        const buyBtnElement = document.querySelector('.backg-contacts'),
            buyBtnElementPosition = buyBtnElement.getBoundingClientRect().top;

        if(buyBtnElementPosition < windowHeight) {
            buyBtn.classList.remove('buy-btn-animate_before');
            buyBtn.classList.add('buy-btn-animate');
        }
    });

    window.addEventListener('scroll', ()=> {
        const textContactsElement = document.querySelector('.uniForm'),
            textContactsElementPosition = textContactsElement.getBoundingClientRect().top;

        if(textContactsElementPosition < windowHeight){
            textContacts.classList.remove('contacts-text-animate_before');
            textContacts.classList.add('contacts-text-animate');
        }
    });

    window.addEventListener('scroll', ()=> {
        const formContentElement = document.querySelector('.form-content-animate'),
            formContentElementPosition = formContentElement.getBoundingClientRect().top;

        if(formContentElementPosition < windowHeight) {
            formContent.classList.remove('menu_animated_before');
            formContent.classList.add('menu_animated');
        }
    });

    window.addEventListener('scroll', ()=> {
        const contactsTextElement = document.querySelector('.phone'),
            contactsTextElementPosition = contactsTextElement.getBoundingClientRect().top;

            let index = 0;

        if(contactsTextElementPosition < windowHeight){
            const interval = setInterval(()=> {
                contactsText[index].classList.remove('menu_animated_before');
                contactsText[index].classList.add('menu_animated')
                index = index +1;
                if(index >= counterContactsText){
                    clearInterval(interval);
                }
            }, 30);
        }
    });

    window.addEventListener('scroll', ()=> {
        const contactsContentElement = document.querySelector('.address'),
            contactsContentElementPosition = contactsContentElement.getBoundingClientRect().top;

        if(contactsContentElementPosition < windowHeight){
            contactsContent.classList.remove('courser_animated_before');
            contactsContent.classList.add('courses_animated');
        }
    })
})