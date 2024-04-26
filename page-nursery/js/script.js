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
        firstContent = document.querySelector('.first-section'),
        firstSection = document.querySelector('.nursery-content_first');

    let index = 0;

    menu.classList.remove('menu_animation_before');
    menu.classList.add('menu_animation');
    firstSection.classList.remove('img-animation_before');
    firstSection.classList.add('img-animation');
    firstContent.classList.remove('animate_tabs_before');
    firstContent.classList.add('animate-tabs');

    window.addEventListener('scroll', ()=> {
        const  secondSection = document.querySelector('.nursery-content_second'),
            secondSectionElement = document.querySelector('.second-section-animation'),
            secondSectionElementPosition =secondSectionElement.getBoundingClientRect().top;

        if(secondSectionElementPosition < windowHeight){
            secondSection.classList.remove('img-animation-second_before');
            secondSection.classList.add('img-animation-second');
        }

        const thirdSection = document.querySelector('.nursery-content_third'),
            thirdSectionElement = document.querySelector('.third-section-animation'),
            thirdSectionElementPosition = thirdSectionElement.getBoundingClientRect().top;

        if(thirdSectionElementPosition < windowHeight){
            thirdSection.classList.remove('img-animation_before');
            thirdSection.classList.add('img-animation');
        }

        const buyBtn = document.querySelector('.buy'),
            buyBtnElement = document.querySelector('.backg-contacts'),
            buyBtnElementPosition = buyBtnElement.getBoundingClientRect().top;

        if(buyBtnElementPosition< windowHeight){
            buyBtn.classList.remove('buy-btn-animate_before');
            buyBtn.classList.add('buy-btn-animate');
        }

        const textMail = document.querySelector('.text-contacts'),
            textMailElement = document.querySelector('.uniForm'),
            textMailElementPosition = textMailElement.getBoundingClientRect().top;

        if(textMailElementPosition < windowHeight){
            textMail.classList.remove('animate_text_mail_before');
            textMail.classList.add('animate_text_mail');
        }

        const mail = document.querySelector('.uniForm'), 
            mailElement = document.querySelector('.mail-animation'),
            mailElementPosition = mailElement.getBoundingClientRect().top;

        if(mailElementPosition < windowHeight) {
            mail.classList.remove('menu_animation_before');
            mail.classList.add('menu_animation');
        }

        const textContacts = document.querySelectorAll('.text-contacts_animation'),
            textContactsElement = document.querySelector('.phone'),
            textContactsElementPosition = textContactsElement.getBoundingClientRect().top;

        let indexContacts = 0;


        if(textContactsElementPosition < windowHeight) {
            const interval = setInterval(()=> {
                textContacts[indexContacts].classList.remove('menu_animation_before');
                textContacts[indexContacts].classList.add('menu_animation');
                indexContacts++;
                if(indexContacts >= textContacts.length) {
                    clearInterval(interval)
                }
            }, 30)
        }
    });

    window.addEventListener('scroll', ()=> {
        const contactsContent = document.querySelector('.contacts-information_sections'),
            contactsContentElement = document.querySelector('.address'),
            contactsContentElementPosition = contactsContentElement.getBoundingClientRect().top;

        if(contactsContentElementPosition < windowHeight){
            contactsContent.classList.remove('img-animation_before');
            contactsContent.classList.add('img-animation');
        }
    });

})