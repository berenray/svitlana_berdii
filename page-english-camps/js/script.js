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
        firstText = document.querySelectorAll('.first-text-camps'),
        sectionFirst = document.querySelector('.english-content_first'),
        sectionSecond = document.querySelector('.english-content_second'),
        sectionThird = document.querySelector('.english-content_third'),
        buyBtn = document.querySelector('.buy'),
        textContacts = document.querySelector('.text-contacts'),
        formContent = document.querySelector('.uniForm'),
        contactsFirsttext = document.querySelectorAll('.text-contacts_animation'),
        contactsContent = document.querySelector('.contacts-information_sections');


    let index = 0;


    menu.classList.remove('menu_animation_before');
    menu.classList.add('menu_animation');
    sectionFirst.classList.remove('img-animation_before');
    sectionFirst.classList.add('img-animation');


    const interval = setInterval(()=> {
        firstText[index].classList.remove('menu_animation_before');
        firstText[index].classList.add('menu_animation');
        index++;
        if(index >= firstText.length){
            clearInterval(interval);
        }
    }, 50);

    window.addEventListener('scroll', ()=> {
        const sectionSecondElement = document.querySelector('.section-second-animation'),
            sectionSecondElementPosition = sectionSecondElement.getBoundingClientRect().top;
        
        if(sectionSecondElementPosition < windowHeight){
            sectionSecond.classList.remove('img-animation_before');
            sectionSecond.classList.add('img-animation');
        }
    });

    window.addEventListener('scroll', ()=> {
        const sectionThirdElement = document.querySelector('.section-thirs-animation'),
            sectionThirdElementPosition = sectionThirdElement.getBoundingClientRect().top;

        if(sectionThirdElementPosition < windowHeight) {
            sectionThird.classList.remove('img-animation_before');
            sectionThird.classList.add('img-animation');
        }
    });

    window.addEventListener('scroll', ()=> {
        const buyBtnElement = document.querySelector('.backg-contacts'),
            buyBtnElementPosition = buyBtnElement.getBoundingClientRect().top;

        if(buyBtnElementPosition < windowHeight) {
            buyBtn.classList.remove('buy-btn_animation_before');
            buyBtn.classList.add('buy-btn_animation');
        }
    });

    window.addEventListener('scroll', ()=> {
        const textContactsElement = document.querySelector('.uniForm'),
            textContactsElementPosition = textContactsElement.getBoundingClientRect().top;

        if(textContactsElementPosition < windowHeight){
            textContacts.classList.remove('animate_text_mail_before');
            textContacts.classList.add('animate_text_mail');
        }
    });

    window.addEventListener('scroll', ()=> {
        const formContentElement = document.querySelector('.form-animate'),
            formContentElementPosition = formContentElement.getBoundingClientRect().top;

        if(formContentElementPosition < windowHeight){
            formContent.classList.remove('menu_animation_before');
            formContent.classList.add('menu_animation')
        }
    });

    window.addEventListener('scroll', ()=> {
        const contactsFirsttextElement = document.querySelector('.phone'),
            contactsFirsttextElementPosition = contactsFirsttextElement.getBoundingClientRect().top;

        let index = 0;

        if(contactsFirsttextElementPosition < windowHeight) {
            const interval = setInterval(()=> {
                contactsFirsttext[index].classList.remove('menu_animation_before');
                contactsFirsttext[index].classList.add('menu_animation');
                index++;
                if(index >= contactsFirsttext.length){
                    clearInterval(interval);
                }
            }, 50)
        }
    });

    window.addEventListener('scroll', ()=>{
        const contactsContentElement = document.querySelector('.address'),
            contactsContentElementPosition = contactsContentElement.getBoundingClientRect().top;

        if(contactsContentElementPosition < windowHeight){
            contactsContent.classList.remove('img-animation_before');
            contactsContent.classList.add('img-animation');
        }
    })
})