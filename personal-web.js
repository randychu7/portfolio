


let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".person", 10, { y: -300 })
  .to(".mountain", 10, { y: -200 }, "-=10")
  .fromTo(".background", { y: -50 }, { y: 0, duration: 10 }, "-=10")
  .to(".content", 10, { top: "0%" }, "-=10")
  .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 4 })
  .fromTo(".about", { opacity: 0 }, { opacity: 1, duration: 4 })
  .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 4 });
  

timeline
 .to(".person", 10, { y: -300 })

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "300%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);