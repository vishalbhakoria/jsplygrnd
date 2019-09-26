$(document).ready(fixCalloutsPosition);
$(window).resize(fixCalloutsPosition);
$(window).scroll(fixCalloutsPosition);

//$('#revisionAnnualId').hide();

//$('.col-xs-6 col-sm-6 header-text fade-right').fadeOut(function() { $('.popover').popover('dispose') });

$("[data-toggle=popover]").popover({ html: true, title: '<a href="#" class="close" data-dismiss="alert">&times;</a>' })

$(document).on("click", ".popover .close", function () {
    $(this).parents(".popover").popover('hide');
});

$(document).on('click', "#av_find_out_more_text", function () {
    //$('#revisionAnnualId').show();
    //$('#annual_value_sectionId').hide();
    toggleDivs();
});

$(document).on('click', "#av_back_text", function () {
    //$('#revisionAnnualId').hide();
    //$('#annual_value_sectionId').show();
    toggleDivs();
});


// Fix callouts according to width
function fixCalloutsPosition(){
    $("#callouts").css({ left: $("#comparable_img").position().left });
    //$('[data-toggle="popover"]').popover('hide');
}


function toggleDivs() {
    var $inner = $("#inner");
    if ($inner.position().left == 0) {
        $inner.animate({
            left: "-100%"
        }, 500);
    }
    else {
        $inner.animate({
            left: "0px"
        }, 500);
    }
}

$('.popover-dismiss').popover({
    trigger: 'focus'
})




/*Header Code*/

window.onscroll = function () { myFunction() };

var header = document.getElementById("myHeader");
var sticky = 174;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        header.classList.remove("fadeOut");
    } else {

        header.classList.add("fadeOut");
        //header.classList.remove("sticky");
    }
}


var controller = new ScrollMagic.Controller();

//Curtain Effect
new ScrollMagic.Scene({
    triggerElement: ".introduction-wrapper",
    triggerHook: 0
})
    .setPin(".introduction-wrapper", {pushFollowers: false})
    .addTo(controller);


new ScrollMagic.Scene({
    triggerElement: "#annual_value_img",
    offset: 80,
    triggerHook: 0.9
})
.setClassToggle("#annual_value_img", "visible")
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#comparable_intro_text",
    offset: 100,    
    triggerHook: 0.9
})
.setClassToggle("#comparable_intro_text", "visible")
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#comparable_intro_text",
    offset: 150,
    triggerHook: 0.9
})
.setClassToggle("#comparable_img", "visible")
    .addTo(controller);

var revealElements = document.getElementsByClassName("fade-in");
for (var i=0; i<revealElements.length; i++) { 
    new ScrollMagic.Scene({
                        triggerElement: revealElements[i], 
                        offset: 100,												 
                        triggerHook: 0.9,
                    })
                    .setClassToggle(revealElements[i], "visible") 
                    .addTo(controller);
}

revealElements = document.getElementsByClassName("fade-up");
for (var i=0; i<revealElements.length; i++) { 
    new ScrollMagic.Scene({
                        triggerElement: revealElements[i], 
                        offset: 150,												 
                        triggerHook: 0.9,
                    })
                    .setClassToggle(revealElements[i], "visible") 
                    .addTo(controller);
}

revealElements = document.getElementsByClassName("annual-value-left");
for (var i=0; i<revealElements.length; i++) { 
    new ScrollMagic.Scene({
                        triggerElement: revealElements[i], 
                        offset: 100 + i*20,												 
                        triggerHook: 0.9,
                    })
                    .setClassToggle(revealElements[i], "visible") 
                    .addTo(controller);
}

revealElements = document.getElementsByClassName("callout");
for (var i=0; i<revealElements.length; i++) { 
    new ScrollMagic.Scene({
                        triggerElement: '#comparable_img', 
                        offset: 70 + i*20,												 
                        triggerHook: 0.8,
                    })
                    .setClassToggle(revealElements[i], "visible") 
                    .addTo(controller);
}

revealElements = document.getElementsByClassName("fade-left");
for (var i=0; i<revealElements.length; i++) { 
    new ScrollMagic.Scene({
                        triggerElement: revealElements[i], 
                        offset: 100,												 
                        triggerHook: 0.9,
                    })
                    .setClassToggle(revealElements[i], "visible") 
                    .addTo(controller);
}

revealElements = document.getElementsByClassName("fade-right");
for (var i=0; i<revealElements.length; i++) { 
    new ScrollMagic.Scene({
                        triggerElement: revealElements[i], 
                        offset: 100,												 
                        triggerHook: 0.9,
                    })
                    .setClassToggle(revealElements[i], "visible") 
                    .addTo(controller);
}

revealElements = document.getElementsByClassName("annual_value_section");
for (var i = 0; i < revealElements.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: revealElements[i],
        offset: 100,
        triggerHook: 0.9,
    })
        .setClassToggle(revealElements[i], "visible")
        .addTo(controller);
}

revealElements = document.getElementsByClassName("revision_value_section");
for (var i = 0; i < revealElements.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: revealElements[i],
        offset: 100,
        triggerHook: 0.9,
    })
        .setClassToggle(revealElements[i], "visible")
        .addTo(controller);
}


