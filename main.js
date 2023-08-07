$(document).ready(function () {

    var slick = $(".responsive");

    slick.slick({
            arrows: false,
            dots: false,
            autoplay:true,
            infinite: true,  
            speed: 600,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,                                        
                  }
                },
                {
                    breakpoint: 760,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1
                    }
                  },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
      });

      $(".roadmap-section").find(".prev").click(function() {
        slick.slick("slickPrev");
    });
    $(".roadmap-section").find(".next").click(function() {
        slick.slick("slickNext");
    });




    /* $(".thumb-video").hover(function () {
        
        $(this).children("video")[0].play();
    }, function () {
        var el = $(this).children("video")[0];
        el.pause();
        el.currentTime = 0;
    }); */




});