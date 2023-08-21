

window.onload = function() {
    // AOS init (scroll + animate)
    AOS.init();

    //burger-menu button
    const menuButton = document.querySelector('.burger-menu');
    menuButton.addEventListener('click', ()=> menuButton.classList.toggle('active'));
    //burger-menu button - END

    //slider module
    const swiperLeft = new Swiper('.slider.left > .swiper', {
        // Optional parameters
        loop: true,
        effect: 'fade',
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    const swiperRight = new Swiper('.slider.right > .swiper', {
        // Optional parameters
        loop: true,
        effect: 'fade',
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    //slider module - END

    //masonry gallery init
    const colc = new Colcade( '.grid', {
        columns: '.grid-col',
        items: '.grid-item'
    });
    //masonry gallery init end

    //gallery toggle height function
    const gallery = document.querySelector('.gallery');
    const galleryOpenButton = document.querySelector('.grid-mask>.button-outline-black');
    if(gallery &&  galleryOpenButton){

        galleryOpenButton.addEventListener('click',(e)=>{
            e.preventDefault();
            gallery.classList.toggle('open');
            if(gallery.classList.contains('open')){
                gallery.style.maxHeight = gallery.scrollHeight + "px";
                galleryOpenButton.innerText = 'Zwiń';
                galleryOpenButton.classList.toggle('arrow-reverse');

            } else {
                gallery.style.maxHeight = '180em';
                galleryOpenButton.innerText = 'Rozwiń';
                galleryOpenButton.classList.toggle('arrow-reverse');
            }
        })
    }
};



