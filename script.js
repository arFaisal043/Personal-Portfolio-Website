let ham = document.getElementById("ham");
let nav = document.getElementsByClassName("nav")[0];
let navList_second = document.getElementsByClassName("nav-list-second")[0];

ham.addEventListener( "click" , () => {
    nav.classList.toggle("active-nav");
    navList_second.classList.toggle("active-nav-list-second");
} )

var typed = new Typed('#profession', {
    strings: ["Jr. Front end Developer" , "CSE Undergraduate"],
    typeSpeed: 120,
    backSpeed:150,
    loop:true
  });

  var typed = new Typed('#me', {
    strings: ["me"],
    typeSpeed: 250,
    backSpeed:150,
    loop:true
  });

  var typed = new Typed('#my-skills', {
    strings: ["Skills"],
    typeSpeed: 120,
    backSpeed:150,
    loop:true
  });

  var typed = new Typed('#my-projects', {
    strings: ["Latest Work"],
    typeSpeed: 100,
    backSpeed:150,
    loop:true
  });

  // var typed = new Typed('#my-projects', {
  //   strings: ["Latest Work"],
  //   typeSpeed: 250,
  //   backSpeed:150,
  //   loop:true
  // });



  document.addEventListener('DOMContentLoaded', () => {
    const skillLevels = document.querySelectorAll('.skill-level');

    skillLevels.forEach(skill => {
        const width = skill.style.width;
        skill.style.width = '0';
        setTimeout(() => {
            skill.style.width = width;
        }, 500);
    });
});




// ......... Gsap .........

let tl = gsap.timeline();

tl.from(".nav" , {
  y:-100,
  opacity:0,
  duration:1
})
tl.from(".left-nav" , {
  y:-60,
  opacity:0,
  duration:1
})
tl.from(".list-item" , {
  y:-50,
  opacity:0,
  duration:1,
  stagger:1
})



let tl2 = gsap.timeline();

tl2.from(".line" , {
  x:-100,
  opacity:0,
  duration:1,
  stagger:1
})
gsap.from("#btn" , {
  x:-120,
  opacity:0,
  duration:1
})
gsap.from("#pp" , {
  x:250,
  opacity:0,
  duration:1
})






