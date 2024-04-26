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


    // Animation

    const windowHeight = window.innerHeight,
        menuText = document.querySelector('.menu-text'),
        imgLogo = document.querySelector('.img'),
        firstSection = document.querySelector('.second-section');
        
        
        
        


    menuText.classList.remove('menu_animation_before');
    menuText.classList.add('menu_animation');
    imgLogo.classList.remove('menu_animation_before');
    imgLogo.classList.add('menu_animation');
    firstSection.classList.remove('animte_first-section_before');
    firstSection.classList.add('animate__first_section');

    window.addEventListener('scroll', () =>{
        // First-section
        const aboutSlider = document.querySelector('.fade-slider-container'),
            aboutText = document.querySelector('.first-section_section-about-me'),
            aboutTextElement = document.querySelector('.animate-about'),
            aboutTextElementPosition = aboutTextElement.getBoundingClientRect().top;

        if(aboutTextElementPosition < windowHeight) {
            aboutText.classList.remove('animte_first-section_before');
            aboutText.classList.add('animate__first_section');
            aboutSlider.classList.remove('animte_slider_before');
            aboutSlider.classList.add('animate__slider_section');
        }

        // Projects
        const firstTextProjects = document.querySelector('.first_text_projects'),
            firstTextProjectsElement = document.querySelector('.tabs-btn'),
            firstTextProjectsElementPosition = firstTextProjectsElement.getBoundingClientRect().top;

        if(firstTextProjectsElementPosition < windowHeight) {
            firstTextProjects.classList.remove('menu_animation_before');
            firstTextProjects.classList.add('menu_animation');
        }

        const tabsBtns = document.querySelectorAll('.filter_btn'),
            tabsBtnsElement = document.querySelector('.tabs-content'),
            tabsBtnsElementPosition = tabsBtnsElement.getBoundingClientRect().top;

        let indexTabs = 0

        if(tabsBtnsElementPosition < windowHeight) {
            const interval = setInterval(() => {
                    tabsBtns[indexTabs].classList.remove('animate_slider_before');
                    tabsBtns[indexTabs].classList.add('animate-tabs');
                    indexTabs++;
                    if(indexTabs >= tabsBtns.length){
                        clearInterval(interval);
                    }
                }, 200)
        }

        const  tabsContentAnimate = document.querySelectorAll('.products__item_animate'),
            tabsContentAnimateElement = document.querySelector('.animate_filter_content'),
            tabsContentAnimateElementPosition = tabsContentAnimateElement.getBoundingClientRect().top;

        let indexTabsContent = 0;

        if(tabsContentAnimateElementPosition < windowHeight) {
            const interval = setInterval(()=>{
                tabsContentAnimate[indexTabsContent].classList.remove('animate_tabs_before');
                tabsContentAnimate[indexTabsContent].classList.add('animate-tabs');
                indexTabsContent++;
                if(indexTabsContent >= tabsContent.length){
                    clearInterval(interval);
                }
            }, 300)
        }

        // Mail

        const textMail = document.querySelector('.text-contacts'),
            textMailElement = document.querySelector('.uniForm'),
            textMailElementPosition = textMailElement.getBoundingClientRect().top;

        if(textMailElementPosition < windowHeight) {
            textMail.classList.remove('animate_text_mail_before');
            textMail.classList.add('animate_text_mail')
        }

        const formMail = document.querySelector('.uniForm'),
            formMailElement = document.querySelector('.animate_form'),
            formMailElementPosition = formMailElement.getBoundingClientRect().top;

        if(formMailElementPosition < windowHeight) {
            formMail.classList.remove('menu_animation_before');
            formMail.classList.add('menu_animation');
        }

        // Contacts

        const textContacts = document.querySelectorAll('.text-contacts_animation'),
        textContactsElement = document.querySelector('.phone'),
        textContactsElementPosition = textContactsElement.getBoundingClientRect().top;

        let index = 0;

        if(textContactsElementPosition < windowHeight) {
            const interval = setInterval(()=>{
                textContacts[index].classList.remove('menu_animation_before');
                textContacts[index].classList.add('menu_animation');
                index = index + 1;
                if(index >= textContacts.length) {
                    clearInterval(interval)
                }
            }, 50)
        }

        const contactsInformation = document.querySelector('.contacts-information_sections'),
            contactsInformationElement = document.querySelector('.address'),
            contactsInformationElementPosition = contactsInformationElement.getBoundingClientRect().top;

        if(contactsInformationElementPosition < windowHeight) {
            contactsInformation.classList.remove('animte_slider_before');
            contactsInformation.classList.add('animate__slider_section');
        }
    });
})