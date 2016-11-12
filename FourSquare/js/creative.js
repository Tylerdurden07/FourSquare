(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    //$('.popup-gallery').magnificPopup({
    //    delegate: 'a',
    //    type: 'image',
    //    tLoading: 'Loading image #%curr%...',
    //    mainClass: 'mfp-img-mobile',
    //    gallery: {
    //        enabled: true,
    //        navigateByImgClick: true,
    //        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    //    },
    //    image: {
    //        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    //    }
    //});



    $("#MechOneAnchor").animatedModal({
        modalTarget: 'ProductDesignDev',
        animatedIn: 'zoomIn',
        animatedOut: 'zoomOut',
        //color: '#f05f40',
        beforeOpen: function () {

            var children = $(".thumb");
            var index = 0;

            function addClassNextChild() {
                if (index == children.length) return;
                children.eq(index++).show().velocity("transition.expandIn", { opacity: 1, stagger: 250 });
                window.setTimeout(addClassNextChild, 200);
            }

            addClassNextChild();
            $('body').css({

                'overflow-x': 'hidden',
                'overflow-y': 'hidden'

            });

        },
       
        beforeClose: function () {
            $('body').css({

                'overflow-x': 'visible',
                'overflow-y': 'visible'

            });
           

        }
    });


    $("#ComputerAidedAnchor").animatedModal({
        modalTarget: 'ComputerAided',
        animatedIn: 'zoomIn',
        animatedOut: 'zoomOut',
        //color: '#f05f40',
        beforeOpen: function () {

            var children = $(".thumb");
            var index = 0;

            function addClassNextChild() {
                if (index == children.length) return;
                children.eq(index++).show().velocity("transition.expandIn", { opacity: 1, stagger: 250 });
                window.setTimeout(addClassNextChild, 200);
            }

            addClassNextChild();
            $('body').css({

                'overflow-x': 'hidden',
                'overflow-y': 'hidden'

            });

        },

        beforeClose: function () {
            $('body').css({

                'overflow-x': 'visible',
                'overflow-y': 'visible'

            });


        }
    });


    $("#ReverseEnggAnchor").animatedModal({
        modalTarget: 'ReverseEngg',
        animatedIn: 'zoomIn',
        animatedOut: 'zoomOut',
        //color: '#f05f40',
        beforeOpen: function () {

            var children = $(".thumb");
            var index = 0;

            function addClassNextChild() {
                if (index == children.length) return;
                children.eq(index++).show().velocity("transition.expandIn", { opacity: 1, stagger: 250 });
                window.setTimeout(addClassNextChild, 200);
            }

            addClassNextChild();
            $('body').css({

                'overflow-x': 'hidden',
                'overflow-y': 'hidden'

            });

        },

        beforeClose: function () {
            $('body').css({

                'overflow-x': 'visible',
                'overflow-y': 'visible'

            });


        }
    });
    

    $("#ValueAnalysisEnggAnchor").animatedModal({
        modalTarget: 'ValueAnalysisEngg',
        animatedIn: 'zoomIn',
        animatedOut: 'zoomOut',
        //color: '#f05f40',
        beforeOpen: function () {

            var children = $(".thumb");
            var index = 0;

            function addClassNextChild() {
                if (index == children.length) return;
                children.eq(index++).show().velocity("transition.expandIn", { opacity: 1, stagger: 250 });
                window.setTimeout(addClassNextChild, 200);
            }

            addClassNextChild();
            $('body').css({

                'overflow-x': 'hidden',
                'overflow-y': 'hidden'

            });

        },

        beforeClose: function () {
            $('body').css({

                'overflow-x': 'visible',
                'overflow-y': 'visible'

            });


        }
    });
  

    $("#ModelAndDetailAnchor").animatedModal({
        modalTarget: 'ModelAndDetail',
        animatedIn: 'zoomIn',
        animatedOut: 'zoomOut',
        //color: '#f05f40',
        beforeOpen: function () {

            var children = $(".thumb");
            var index = 0;

            function addClassNextChild() {
                if (index == children.length) return;
                children.eq(index++).show().velocity("transition.expandIn", { opacity: 1, stagger: 250 });
                window.setTimeout(addClassNextChild, 200);
            }

            addClassNextChild();
            $('body').css({

                'overflow-x': 'hidden',
                'overflow-y': 'hidden'

            });

        },

        beforeClose: function () {
            $('body').css({

                'overflow-x': 'visible',
                'overflow-y': 'visible'

            });


        }
    });

    $("#ProductFiledMandMAnchor").animatedModal({
        modalTarget: 'ProductFiledMandM',
        animatedIn: 'zoomIn',
        animatedOut: 'zoomOut',
        //color: '#f05f40',
        beforeOpen: function () {

            var children = $(".thumb");
            var index = 0;

            function addClassNextChild() {
                if (index == children.length) return;
                children.eq(index++).show().velocity("transition.expandIn", { opacity: 1, stagger: 250 });
                window.setTimeout(addClassNextChild, 200);
            }

            addClassNextChild();
            $('body').css({

                'overflow-x': 'hidden',
                'overflow-y': 'hidden'

            });

        },

        beforeClose: function () {
            $('body').css({

                'overflow-x': 'visible',
                'overflow-y': 'visible'

            });


        }
    });

    $("#AndroidAppDevAnchor").animatedModal({
        modalTarget: 'AndroidAppDev',
        animatedIn: 'zoomIn',
        animatedOut: 'zoomOut',
        //color: '#f05f40',
        beforeOpen: function () {

            var children = $(".thumb");
            var index = 0;

            function addClassNextChild() {
                if (index == children.length) return;
                children.eq(index++).show().velocity("transition.expandIn", { opacity: 1, stagger: 250 });
                window.setTimeout(addClassNextChild, 200);
            }

            addClassNextChild();
            $('body').css({

                'overflow-x': 'hidden',
                'overflow-y': 'hidden'

            });

        },

        beforeClose: function () {
            $('body').css({

                'overflow-x': 'visible',
                'overflow-y': 'visible'

            });


        }
    });

    $("#SoftwareTestingAnchor").animatedModal({
        modalTarget: 'SoftwareTesting',
        animatedIn: 'zoomIn',
        animatedOut: 'zoomOut',
        //color: '#f05f40',
        beforeOpen: function () {

            var children = $(".thumb");
            var index = 0;

            function addClassNextChild() {
                if (index == children.length) return;
                children.eq(index++).show().velocity("transition.expandIn", { opacity: 1, stagger: 250 });
                window.setTimeout(addClassNextChild, 200);
            }

            addClassNextChild();
            $('body').css({

                'overflow-x': 'hidden',
                'overflow-y': 'hidden'

            });

        },

        beforeClose: function () {
            $('body').css({

                'overflow-x': 'visible',
                'overflow-y': 'visible'

            });


        }
    });

    $("#VendorSourcingAnchor").animatedModal({
        modalTarget: 'VendorSourcing',
        animatedIn: 'zoomIn',
        animatedOut: 'zoomOut',
        //color: '#f05f40',
        beforeOpen: function () {

            var children = $(".thumb");
            var index = 0;

            function addClassNextChild() {
                if (index == children.length) return;
                children.eq(index++).show().velocity("transition.expandIn", { opacity: 1, stagger: 250 });
                window.setTimeout(addClassNextChild, 200);
            }

            addClassNextChild();
            $('body').css({

                'overflow-x': 'hidden',
                'overflow-y': 'hidden'

            });

        },

        beforeClose: function () {
            $('body').css({

                'overflow-x': 'visible',
                'overflow-y': 'visible'

            });


        }
    });
    
    $("#ProductSourcingAnchor").animatedModal({
        modalTarget: 'ProductSourcing',
        animatedIn: 'zoomIn',
        animatedOut: 'zoomOut',
        //color: '#f05f40',
        beforeOpen: function () {

            var children = $(".thumb");
            var index = 0;

            function addClassNextChild() {
                if (index == children.length) return;
                children.eq(index++).show().velocity("transition.expandIn", { opacity: 1, stagger: 250 });
                window.setTimeout(addClassNextChild, 200);
            }

            addClassNextChild();
            $('body').css({

                'overflow-x': 'hidden',
                'overflow-y': 'hidden'

            });

        },

        beforeClose: function () {
            $('body').css({

                'overflow-x': 'visible',
                'overflow-y': 'visible'

            });


        }
    });

    
    
})(jQuery); // End of use strict



//$(document).ready(function () {
//    $("#MechOneAnchor").animatedModal();
//    alert("alert");
//});