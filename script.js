let image = document.querySelector("#right img");
let p = document.querySelector("p");
const tl = gsap.timeline();

function load(){
gsap.from("#square",{
    x:"-100%",
    rotate:-90,
    duration:1.2,
    ease:"power3.inOut",
    opacity:0
})

tl.from("#left-top-end h4,#left-top-end h5",{
    x:"100%",
    opacity:0,
    duration:1.2,
    ease:"power3.inOut",
    stagger:{
        amount:-0.2
    },
    ease:"expo.inOut"
},'RadhaKrishn')

gsap.from("#left-center .same",{
    x: "-100%",
    duration: 1.2,
    ease: "power3.inOut",
    stagger:-.2,
    opacity: 0
})

gsap.from("#left-center h1:nth-child(2n)",{
    x: "100%",
    duration: 1.2,
    ease: "power3.inOut",
    stagger:-.2,
    opacity: 0,
})

let parah = p.innerText.split("");
let clutter = ""

parah.forEach((elem,idx)=>{
    clutter += `<span>${elem}</span>`;
})
p.innerHTML = clutter;

gsap.from("#left-btm p span",{
    duration: 1.2,
    ease: "power3.inOut",
    opacity: 0,
    stagger:{
        amount:1.5,
        from:"random"
    }
})

gsap.from(image,{
    width:"0%",
    opacity: 0,
    duration: 2,
    ease: "power3.inOut",
})

gsap.to("#arrow",{
    left:'50%',
    transform:"translate(-50%, -50%)",
    duration:1,
    opacity:1,
    ease:"sine.in",
})

}

let tl1 = gsap.timeline();

document.addEventListener("DOMContentLoaded",function(){
        tl.to("#palette3", {
            rotate: -180,
            duration: 2,
            ease: "expo.inOut"
        })
        tl1.to("#palette2", {
            rotate: -180,
            duration: 2,
            delay:.1,
            ease: "expo.inOut"
        },'same')
        tl1.to("#palette1", {
            rotate: -180,
            duration: 2,
            delay:.2,
            ease: "expo.inOut",
        },'same')
        setTimeout(function(){
            load();
        },700)
})

// image.addEventListener("mousemove",(e)=>{
//     let x = (window.innerWidth - e.pageX * 2) / 100;
//     let y = (window.innerHeight - e.pageY * 3) / 100;
//     image.style.transform = `translateX(${x}px) translateY(${y}px)`;
//     })
    
//     image.addEventListener("mouseleave",()=>{
//     image.style.transform = `translateX(0px) translateY(0px)`
// })



