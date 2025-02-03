// let landingPage = document.querySelector(".home");

// let imageArray = ["home1.jpg" , "home2.jpg" , "home3.jpg"];

// landingPage.style.backgroundImage = 'url("img/home1.jpg)';


// let randomNumber = Math.floor(Math.random() * imageArray.length );


// let randomOption = true;


// function randomizeImgs(){
//   if( randomOption === true){
//     setInterval(() => {

//       let randomNumber = Math.floor(Math.random() * imageArray.length );
    
//       landingPage.style.backgroundImage = 'url("img/'+  imageArray[randomNumber] +'")';
    
//     }, 4000);
    
//   }
// }
// randomizeImgs();

let navbar = document.querySelector(".navbar");
let header = document.querySelector("header");

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled"); 
    header.classList.add("shadow");
  } else {
    navbar.classList.remove("scrolled");
    header.classList.remove("shadow");
  }
});