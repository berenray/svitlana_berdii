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
        firstText = document.querySelectorAll('.first-text-animation'),
        firstSection = document.querySelector('.content_first-section'),
        secondSection = document.querySelector('.content_second_section'),
        thirdSection = document.querySelector('.content-third_section'),
        fourthSection = document.querySelector('.content_fourth-section'),
        textMail = document.querySelector('.text-contacts'),
        mail = document.querySelector('.uniForm'),
        textContacts = document.querySelectorAll('.text-contacts_animation'),
        contactsContent = document.querySelector('.contacts-information_sections');

    let index = 0;

    menu.classList.remove('menu_animation_before');
    menu.classList.add('menu_animation');
    firstSection.classList.remove('img-animation_before');
    firstSection.classList.add('img-animation');

    const intervalFirstText = setInterval(()=> {
        firstText[index].classList.remove('menu_animation_before');
        firstText[index].classList.add('menu_animation');
        index++;
        if(index >= firstText.length){
            clearInterval(intervalFirstText);
        }
    },30);

    window.addEventListener('scroll', ()=> {
        const secondSectionElement = document.querySelector('.second-section-animatin'),
            secondSectionElementPosition = secondSectionElement.getBoundingClientRect().top;

        if(secondSectionElementPosition < windowHeight){
            secondSection.classList.remove('img-animation-second_before');
            secondSection.classList.add('img-animation-second');
        }
    });

    window.addEventListener('scroll', ()=> {
        const thirdSectionElement = document.querySelector('.third-section-animation'),
            thirdSectionElementPosition = thirdSectionElement.getBoundingClientRect().top;

        if(thirdSectionElementPosition < windowHeight){
            thirdSection.classList.remove('img-animation_before');
            thirdSection.classList.add('img-animation');
        }
    });

    window.addEventListener('scroll', ()=> {
        const fourthSectionElement = document.querySelector('.fourth-section-animation'),
            fourthSectionElementPosition = fourthSectionElement.getBoundingClientRect().top;

        if(fourthSectionElementPosition < windowHeight){
            fourthSection.classList.remove('img-animation-second_before');
            fourthSection.classList.add('img-animation-second');
        }
    });

    window.addEventListener('scroll', ()=> {
        const textMailElement = document.querySelector('.uniForm'),
            textMailElementPosition = textMailElement.getBoundingClientRect().top;

        if(textMailElementPosition < windowHeight){
            textMail.classList.remove('animate_text_mail_before');
            textMail.classList.add('animate_text_mail');
        }
    });

    window.addEventListener('scroll', ()=> {
        const mailElement = document.querySelector('.mail-animation'),
            mailElementPosition = mailElement.getBoundingClientRect().top;

        if(mailElementPosition < windowHeight) {
            mail.classList.remove('menu_animation_before');
            mail.classList.add('menu_animation');
        }
    });

    window.addEventListener('scroll', ()=> {
        const textContactsElement = document.querySelector('.phone'),
            textContactsElementPosition = textContactsElement.getBoundingClientRect().top;

        let index = 0;


        if(textContactsElementPosition < windowHeight) {
            const interval = setInterval(()=> {
                textContacts[index].classList.remove('menu_animation_before');
                textContacts[index].classList.add('menu_animation');
                index++;
                if(index >= textContacts.length) {
                    clearInterval(interval)
                }
            }, 30)
        }
    });

    window.addEventListener('scroll', ()=> {
        const contactsContentElement = document.querySelector('.address'),
            contactsContentElementPosition = contactsContentElement.getBoundingClientRect().top;

        if(contactsContentElementPosition < windowHeight){
            contactsContent.classList.remove('img-animation_before');
            contactsContent.classList.add('img-animation');
        }
    })



})