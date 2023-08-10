const btnSend = document.querySelector(".btn-send");
const nameInput = document.querySelector(".nameInput");
const email = document.querySelector(".email");
const message = document.querySelector(".input-message");


const headBar = document.querySelector(".container-header");
const aboutMeBtn = document.querySelector(".about-me-btn-container");
const containerInfoProfile = document.querySelector(".container-info-profile");
const containerProjects = document.querySelector(".container-projects");
const headBottom = document.querySelector(".container-footer");
const nameAbout = document.querySelector(".about-me-btn-container");
const nameAboutBottom = document.querySelector(".about-me-btn-container-bottom");



const github = document.querySelectorAll(".github");
const pathGithub = document.querySelector(".pathGithub");
const pathGithubBottom = document.querySelector(".pathGithubBottom");

const mentor = document.querySelectorAll(".mentor");
const pathMentor = document.querySelector(".pathMentor");
const pathMentorBottom = document.querySelector(".pathMentorBottom");

const linkedin = document.querySelectorAll(".linkedin");
const pathLinkedin = document.querySelector(".pathLinkedin");
const pathLinkedinBottom = document.querySelector(".pathLinkedinBottom");

const codewars = document.querySelectorAll(".codewars");
const pathCodeWars = document.querySelector(".pathCodeWars");
const pathCodeWarsBottom = document.querySelector(".pathCodeWarsBottom");



const contactMe = document.querySelector(".contactMe");
const container_contact_me = document.querySelector(".container-contact-me");

const boxProject = document.querySelectorAll(".box-project");

const nameProject = document.querySelectorAll(".name");

const viewCodeBtn = document.querySelectorAll(".viewCodeBtn")


//////////////////////////////////////////////////////////////////////////////////

window.addEventListener('load', function() {

  window.scroll({
     top: 0,
     behavior: 'smooth'
  });
});


function mailValidator(mail) {

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) { return true };

  return (false)
}


function checkField() {
  if(nameInput.value === "") {
     nameInput.value = "This field is required";
     nameInput.classList.add("btn-send-error");
  }

  if(!mailValidator(email.value)) {
     email.value = "Please use a valid email address";
     email.classList.add("btn-send-error");
  }

  if(message.value === "") {
     message.value = "This field is required";
     message.classList.add("btn-send-error");
  }
};


function isElInViewport(el) {
  const rect = el.getBoundingClientRect();
  const check1 = rect.top > 0 && rect.top < (window.innerHeight || document.documentElement.clientHeight);
  const check2  = rect.bottom > 0 && rect.bottom < (window.innerHeight || document.documentElement.clientHeight);

  return check1 || check2;
};





///////////////////////////////////////////////////////////////////////////////////////////////////




nameInput.addEventListener("click", function(e) {
  e.preventDefault();

  if(nameInput.value === "This field is required") {
     nameInput.value = "";
     nameInput.classList.remove("btn-send-error");
  }
});

email.addEventListener("click", function(e) {
  e.preventDefault();

  if(email.value === "Please use a valid email address") {
     email.value = "";
     email.classList.remove("btn-send-error");
  }
});


message.addEventListener("click", function(e) {
  e.preventDefault();

  if(message.value === "This field is required") {
     message.value = "";
     message.classList.remove("btn-send-error");
  }
});


btnSend.addEventListener("click", function(e) {
  e.preventDefault();

  checkField();
});


btnSend.addEventListener("touchstart", function(e){
  e.preventDefault();

  btnSend.classList.add("btn-send-touch");

}, {passive: false});


btnSend.addEventListener("touchend", function(e){

  btnSend.classList.remove("btn-send-touch");
  checkField();

}, {passive: false});















[...nameProject].forEach( el => {

el.addEventListener("touchstart", function(){

  el.style.textDecoration = "underline";

}, {passive: false});

});


[...nameProject].forEach( el => {

el.addEventListener("touchend", function(){

  el.style.textDecoration = "none";

}, {passive: false});

});










[...viewCodeBtn].forEach( el => {

el.addEventListener("touchstart", function() {

  el.style.color = "#44d493";
  el.style.textDecoration = "none";

}, {passive:false});

});

[...viewCodeBtn].forEach( el => {

el.addEventListener("touchend", function() {
  
  el.style.color = "rgb(81, 81, 81)";
  el.style.textDecoration = "underline";
  el.style.textDecorationColor = "#44d493";
  el.style.textUnderlineOffset = "4px";
}, {passive:false});

});




















window.addEventListener("scroll", function() {

  if(window.scrollY <= 50 ) {
     headBar.style.height = `calc(100px - ${window.scrollY}px)`; 
  } else {
     headBar.style.height = "50px";
  }


  const stikyNav = function(entries) {
  
     const [entry] = entries;

     if(entry.isIntersecting && window.scrollY !== 0) {
        headBar.style.display = "none";
     } 
     else {
        headBar.style.display = "block";
        headBar.style.display = "flex";
     }
  }
  
  
   const headerObserver = new IntersectionObserver(stikyNav, {
     root: null,
     thresshold: 0,
   });
  
  
  
  headerObserver.observe(headBottom);
});



nameAbout.addEventListener("click", function(e) {
   e.preventDefault();

   containerInfoProfile.classList.toggle("display");
   containerProjects.classList.toggle("project-display");

   boxProject.forEach( el => {
      if(!isElInViewport(el)) el.classList.add("section-hidden");
      else el.classList.remove("section-hidden");
   });

});


nameAbout.addEventListener("touchstart", function() {

  nameAbout.style.color = "#44d493";
  nameAbout.style.border = "none";

}, {passive:false});

nameAbout.addEventListener("touchend", function() {
  
  nameAbout.style.color = "rgb(81, 81, 81)";
  nameAbout.style.borderBottom = "2px solid #44d493";
}, {passive:false});



nameAboutBottom.addEventListener("click", function(e) {
  e.preventDefault();

  containerInfoProfile.classList.add("display");
  containerProjects.classList.add("project-display")

});


nameAboutBottom.addEventListener("touchstart", function() {

  nameAboutBottom.style.color = "#44d493";
  nameAboutBottom.style.border = "none";

}, {passive:false});

nameAboutBottom.addEventListener("touchend", function() {
  
  nameAboutBottom.style.color = "white";
  nameAboutBottom.style.borderBottom = "2px solid #44d493";
}, {passive:false});











const arr = [nameAbout, nameAboutBottom];
arr.forEach(el => {
  
  el.addEventListener("click", function(e) {
    e.preventDefault();
  
    containerInfoProfile.scrollIntoView({behavior: 'smooth'});
  });
});




contactMe.addEventListener("click", function(e) {
  e.preventDefault();

  container_contact_me.scrollIntoView({behavior: 'smooth'});
});


contactMe.addEventListener("touchstart", function(e) {
  e.preventDefault();

    contactMe.style.border = "3px solid #44d493";

  
}, {passive: false});


contactMe.addEventListener("touchend", function(e) {
  e.preventDefault();

  contactMe.style.border = "none";
  contactMe.style.borderBottom = "3px solid #44d493";
  container_contact_me.scrollIntoView({behavior: 'smooth'});
}, {passive: false});


////////////////////////////////////////////////////////////////////////





["load", "scroll"].forEach(el => {


  window.addEventListener(el, function(e) {
     e.preventDefault();

    //  const revealSection = function(entries,observer) {

    //     const [entry] = entries;
     
    //     if(!entry.isIntersecting) return;
     
    //     entry.target.classList.remove("section-hidden");
     
    //     observer.unobserve(entry.target);
    //  };
     
    //  const sectionObserver = new IntersectionObserver(revealSection, {
    //     root: null,
    //     threshold: 0
    //  });

     boxProject.forEach( el => {

      // console.log(el);
  
        // sectionObserver.observe(el);
        if(!isElInViewport(el)) el.classList.add("section-hidden");
        else el.classList.remove("section-hidden");
     });


     if(!isElInViewport(container_contact_me)) container_contact_me.classList.add("section-hidden");
     else container_contact_me.classList.remove("section-hidden");
     
  });

});



/////////////////////////////////////////////////////////////////////



github.forEach( el => {
  el.addEventListener("mouseenter", function(e) {
     e.preventDefault();

     pathGithub.setAttribute("fill", "black");
     pathGithubBottom.setAttribute("fill", "rgb(210, 210, 210)");

  });
});


github.forEach( el => {
  el.addEventListener("mouseleave", function(e) {
     e.preventDefault();

     pathGithub.setAttribute("fill", "rgb(81, 81, 81)");
     pathGithubBottom.setAttribute("fill", "white");

  });
});


github.forEach( el => {
  el.addEventListener("touchstart", function(e) {
     e.preventDefault();

     pathGithub.setAttribute("fill", "black");
     pathGithubBottom.setAttribute("fill", "rgb(210, 210, 210)");

  }, {passive: false});
});


github.forEach( el => {
  el.addEventListener("touchend", function(e) {
     e.preventDefault();

     pathGithub.setAttribute("fill", "rgb(81, 81, 81)");
     pathGithubBottom.setAttribute("fill", "white");
     const newWindow = window.open();
     newWindow.opener = null;
     newWindow.location.href = "https://github.com/FrancoUP";

  }, {passive: false});
});


github.forEach( el => {
  el.addEventListener("click", function(e) {
  e.preventDefault();

  const newWindow = window.open();
  newWindow.opener = null;
  newWindow.location.href = "https://github.com/FrancoUP";
  });
});










mentor.forEach( el => {
  el.addEventListener("mouseenter", function(e) {
     e.preventDefault();

     pathMentor.setAttribute("fill", "#4EE1A0");
     pathMentorBottom.setAttribute("fill", "#4EE1A0");

  });
});


mentor.forEach( el => {
  el.addEventListener("mouseleave", function(e) {
     e.preventDefault();

     pathMentor.setAttribute("fill", "rgb(81, 81, 81)te");
     pathMentorBottom.setAttribute("fill", "white");

  });
});


mentor.forEach( el => {
  el.addEventListener("touchstart", function(e) {
     e.preventDefault();

    pathMentor.setAttribute("fill", "#4EE1A0");
    pathMentorBottom.setAttribute("fill", "#4EE1A0");

  }, {passive: false});
});


mentor.forEach( el => {
  el.addEventListener("touchend", function(e) {
     e.preventDefault();

     pathMentor.setAttribute("fill", "rgb(81, 81, 81)te");
     pathMentorBottom.setAttribute("fill", "white");

     const newWindow = window.open();
  newWindow.opener = null;
  newWindow.location.href = "https://www.frontendmentor.io/profile/FrancoUP";

  }, {passive: false});
});


mentor.forEach( el => {
  el.addEventListener("click", function(e) {
  e.preventDefault();

  const newWindow = window.open();
  newWindow.opener = null;
  newWindow.location.href = "https://www.frontendmentor.io/profile/FrancoUP";
  });
});











linkedin.forEach( el => {
  el.addEventListener("mouseenter", function(e) {
     e.preventDefault();

     pathLinkedin.setAttribute("fill", "#0A66C2");
     pathLinkedinBottom.setAttribute("fill", "#0A66C2");

  });
});


linkedin.forEach( el => {
  el.addEventListener("mouseleave", function(e) {
     e.preventDefault();

     pathLinkedin.setAttribute("fill", "rgb(81, 81, 81)te");
     pathLinkedinBottom.setAttribute("fill", "white");

  });
});


linkedin.forEach( el => {
  el.addEventListener("touchstart", function(e) {
     e.preventDefault();

     pathLinkedin.setAttribute("fill", "#0A66C2");
     pathLinkedinBottom.setAttribute("fill", "#0A66C2");

  }, {passive: false});
});


linkedin.forEach( el => {
  el.addEventListener("touchend", function(e) {
     e.preventDefault();

     pathLinkedin.setAttribute("fill", "rgb(81, 81, 81)te");
     pathLinkedinBottom.setAttribute("fill", "white");
     const newWindow = window.open();
     newWindow.opener = null;
     newWindow.location.href = "https://linkedin.com/";

  }, {passive: false});
});


linkedin.forEach( el => {
  el.addEventListener("click", function(e) {
  e.preventDefault();

  const newWindow = window.open();
  newWindow.opener = null;
  newWindow.location.href = "https://linkedin.com/";
  });
});











codewars.forEach( el => {
  el.addEventListener("mouseenter", function(e) {
     e.preventDefault();

     pathCodeWars.setAttribute("fill", "rgb(177, 54, 30)");
     pathCodeWarsBottom.setAttribute("fill", "rgb(177, 54, 30)");

  });
});


codewars.forEach( el => {
  el.addEventListener("mouseleave", function(e) {
     e.preventDefault();

     pathCodeWars.setAttribute("fill", "rgb(81, 81, 81)te");
     pathCodeWarsBottom.setAttribute("fill", "white");

  });
});


codewars.forEach( el => {
  el.addEventListener("touchstart", function(e) {
     e.preventDefault();

     pathCodeWars.setAttribute("fill", "rgb(177, 54, 30)");
     pathCodeWarsBottom.setAttribute("fill", "rgb(177, 54, 30)");

  }, {passive: false});
});


codewars.forEach( el => {
  el.addEventListener("touchend", function(e) {
     e.preventDefault();

     pathCodeWars.setAttribute("fill", "rgb(81, 81, 81)te");
     pathCodeWarsBottom.setAttribute("fill", "white");
     const newWindow = window.open();
     newWindow.opener = null;
     newWindow.location.href = "https://www.codewars.com/users/FrancoUp";

  }, {passive: false});
});


codewars.forEach( el => {
  el.addEventListener("click", function(e) {
  e.preventDefault();

  const newWindow = window.open();
  newWindow.opener = null;
  newWindow.location.href = "https://www.codewars.com/users/FrancoUp";
  });
});