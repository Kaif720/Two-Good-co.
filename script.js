const scroll=new LocomotiveScroll({
    el:document.querySelector('#main'),
    smooth:true
});


function loadinganimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.5,
        stagger:0.2
    })
    gsap.from("#page1 #img-container",{
      scale:0.9,
      opacity:0,
        delay:1,
        duration:0.7, 
    })
}
loadinganimation();

