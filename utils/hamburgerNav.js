const hamNav = () => {
  var x = document.getElementById("smnavLink");
  if (x.style.right === "-100%") {
    x.style.right = "0%";
    console.log("abc");
  } else {
    x.style.right = "-100%";
  }

};
hamNav()

// let isNavOpen = false;
// const hamNav = () => {
//   let navSlide = document.getElementById("smnavLink");
//   let hamNavBtn = document.getElementById("hamNavBrn");
//   isNavOpen = !isNavOpen;

//   if(isNavOpen){
//     navSlide.style.display = "block";
//     navSlide.classList.add("open");
//   }else {
//     navSlide.style.display = "none";
//     navSlide.classList.remove("open")
//   }
// }
// document.addEventListener("click", function(even) {
//   let navSlide = document.getElementById("smnavLink");
//   if(isNavOpen && !navSlide.contains(even.target)){
//     navSlide.style.display = "none";
//     navSlide.classList.remove("open");
//     isNavOpen = false
//   }
// } )