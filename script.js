const themeToggler = document.querySelector(".theme-toggler");


themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
  
    themeToggler.querySelector('i:nth-child(1)').classList.toggle('activee');
    themeToggler.querySelector('i:nth-child(2)').classList.toggle('activee');
})
  
function toggleMenu(){
    let nav = document.getElementById("navigation");
    if(nav.style.display == "block"){
        nav.style.display = "none";
    }else{
        nav.style.display = "block";
    }
}




// ======================== SIGN UP ===============================
let modal =document.getElementById("mymodal");
let btn = document.getElementById("mybtns");
let btnn = document.getElementById("mybtnn")
let secmodal = document.getElementById("sec-modal");
let firstmodal = document.getElementById("first-modal");

let back = document.getElementById("back");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
    modal.style.display = "block";
    firstmodal.style.display = "block";
    secmodal.style.display = "none";
}

span.onclick = function(){
    modal.style.display = "none";
}

back.onclick = function(){
    secmodal.style.display = "none";
    firstmodal.style.display = "block";
}


window.onclick = function(event){
    if(event.target ==  modal){
        modal.style.display = "none";
    }
}


let toggle = document.getElementById("toggle");
// let secmodal = document.getElementById("sec-modal");
// let firstmodal = document.getElementById("first-modal");
let syy = document.getElementsByClassName("close")[1];


toggle.addEventListener("click", ()=>{
    secmodal.style.display = "block";
    firstmodal.style.display = "none";
});


syy.onclick = function(){
    modal.style.display = "none";
}




// ========================== SLIDER ========================

$(".carousel").owlCarousel({   
margin: 20,
loop: true,
autoplay: true,
autoplayTimeout: 2000,
autoplayHoverPause: true,
responsive: {
0:{
    items:1,
    nav: false
},
400:{
    items: 1.2,
    nav: false
},
500:{
    items:1.4,
    nav: false
},
600:{
    items: 1.7,
    nav: false
},
700:{
    items: 2,
    nav: false
},
800:{
    items: 2.2,
    nav: false
},
900:{
    items: 2.5,
    nav:false
},
1000:{
    items:2.9,
    nav: false
}
}
});



// ============================ NAV BAR DARK SCROLL ============================
function scrollHeader(){
    const nav = document.getElementById('navi');
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)





