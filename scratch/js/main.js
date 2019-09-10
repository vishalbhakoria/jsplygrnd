var controller = new ScrollMagic.Controller();

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
for (var i=0; i<revealElements.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
                        triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                        offset: 100,												 // start a little later
                        triggerHook: 0.9,
                    })
                    .setClassToggle(revealElements[i], "visible") // add class toggle
                    .addTo(controller);
}

revealElements = document.getElementsByClassName("fade-up");
for (var i=0; i<revealElements.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
                        triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                        offset: 150,												 // start a little later
                        triggerHook: 0.9,
                    })
                    .setClassToggle(revealElements[i], "visible") // add class toggle
                    .addTo(controller);
}

revealElements = document.getElementsByClassName("annual-value-left");
for (var i=0; i<revealElements.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
                        triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                        offset: 100 + i*20,												 // start a little later
                        triggerHook: 0.9,
                    })
                    .setClassToggle(revealElements[i], "visible") // add class toggle
                    .addTo(controller);
}

revealElements = document.getElementsByClassName("callout");
for (var i=0; i<revealElements.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
                        triggerElement: '#comparable_img', // y value not modified, so we can use element as trigger as well
                        offset: 100 + i*20,												 // start a little later
                        triggerHook: 0.9,
                    })
                    .setClassToggle(revealElements[i], "visible") // add class toggle
                    .addTo(controller);
}