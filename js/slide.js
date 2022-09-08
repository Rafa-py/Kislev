class Slide{
    constructor(){
        this.setCarousel();
    }
    setCarousel(){
        let gallery = document.querySelector(".box_galley");
        $('.multiple-items').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3
          });
    }
}