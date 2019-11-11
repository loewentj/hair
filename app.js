
var navbar = document.querySelector("#main-nav");
var sticky = navbar.offsetTop;
window.onscroll =  () =>{
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
}



// window.onscroll = function() {myFunction()};






// var navbar = document.getElementById("nav-list");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }