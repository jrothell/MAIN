
/* this is the js function to fade out the page */
var duration = 1.5,
    displayTime = 15;

var tl = new TimelineMax({repeat:10});

tl.staggerFromTo(".item", duration, {opacity:0}, {opacity:1}, displayTime)
  .staggerFromTo(".item", duration, {opacity:1}, {opacity:0, immediateRender:false}, displayTime, duration)
