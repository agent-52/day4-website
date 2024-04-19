
const tl = gsap.timeline({
  scrollTrigger:{
    pin:".coca",
    scrub:1,
    trigger:".page6",
    scroller:"body",
    start:"-1100% top",
    end:"100% bottom",
    // markers:true
  }
})
tl.to(".coca",{
  rotate:-20,
  y:-150,
  scale:0.3,
  x:-110,
  scrollTrigger:{
    scrub:1,
    trigger:".page6",
    scroller:"body",
    start:"-1099% start",
    end:"-500% center",
    // pin:".coca",
    // markers:true
  }
})
tl.fromTo(".coca",{
  rotate:-20,
  y:-150,
  scale:0.3,
  x:-110,
  
}, {rotate:0,
  scale:0.35,
  x:30,
  y:-25,
  scrollTrigger:{
  scrub:1,
  trigger:".page6",
  scroller:"body",
  start:"-500% center",
  end:"-315% center",
  // pin:".coca",
  // markers:true
}})

tl.fromTo(".coca",{
  rotate:0,
  y:-10,
  x:30,
  
}, {rotate:-15,
  
  x:80,
  y:-100,
  scrollTrigger:{
  scrub:1,
  trigger:".page6",
  scroller:"body",
  start:"-330% 30%",
  end:"-85% bottom",
  // pin:".coca",
  // markers:true
}})


tl.fromTo(".coca",{
  rotate:-15,
  y:-100,
  x:80,
  
}, {rotate:0,
  scale:0.2,
  x:80,
  y:-100,
  scrollTrigger:{
  scrub:1,
  trigger:".page6",
  scroller:"body",
  start:"-149% 30%",
  end:"120% bottom",
  // pin:".coca",
  markers:true
}})



// gsap.from(".coca",{
//   rotate:-20,
//   y:-150,
//   scale:0.3,
//   x:-100,
  
//   scrollTrigger:{
//     markers:true,
//     scrub:1,
//     trigger:".page3",
//     scroller:"body",
//     start:"top center",
//     end:"300% bottom",
//     pin:".coca"
//   }

// })
// gsap.to(".coca",{
//   scale:0.6,
//   y:-100, 
//   scrollTrigger:{
//     markers:true,
//     scrub:1,
//     trigger:".page3",
//     scroller:"body",
//     start:"-490%",
//     end:"center bottom"
//   }

// })