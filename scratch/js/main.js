$(document).ready(fixCalloutsPosition);
$(window).resize(fixCalloutsPosition);
$(window).scroll(fixCalloutsPosition);

$("[data-toggle=popover]").popover({ html: true, title: '<a href="#" class="close" data-dismiss="alert">&times;</a>' })

$(".popover .close").click(function(){
    $(this).parents(".popover").popover('hide');
});


// Fix callouts according to width
function fixCalloutsPosition(){
    $("#callouts").css({left: $("#comparable_img").position().left});
}


var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      //  triggerHook: 'onLeave',
    }
});

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

