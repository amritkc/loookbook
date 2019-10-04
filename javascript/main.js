let bgcolor = document.querySelector(".bgcolor");
let header = document.querySelector(".header");
let login = document.querySelector(".login-btn");
let signup = document.querySelector(".signup-btn");
let abtDev = document.querySelector(".footer");
let body = document.querySelector("body");
let btnSearch = document.querySelector(".btn-search");
let Counter = 1;

function blurfull() {
   
    if (Counter === 1) {
        header.style.filter = "blur(5px)";  
        login.style.filter = "blur(5px)"; 
        signup.style.filter = "blur(5px)";  
        abtDev.style.filter = "blur(5px)";
        btnSearch.style.filter = "blur(0.5px)";
        abtDev.style.filter = "blur(5px)";
        header.style.transition ="1.3s"; 
        login.style.transition ="1.3s";  
        signup.style.transition ="1.3s"; 
        abtDev.style.transition ="1.3s"; 
        footer.style.transition = "1.3s";
        Counter = 0;  
    }/*else if (Counter === 0 ) {
        header.style.filter = "blur(0px)"; 
        login.style.filter = "blur(0px)"; 
        signup.style.filter = "blur(0px)";  
        abtDev.style.filter = "blur(0px)";
    }  */     
}
function blurcan() {
   //if(Counter === 0){
        header.style.filter = "blur(0px)"; 
        login.style.filter = "blur(0px)"; 
        signup.style.filter = "blur(0px)";  
        abtDev.style.filter = "blur(0px)";
        Counter = 1;
    //}
}
function blurBtn() {
     header.style.filter = "blur(5px)";  
    login.style.filter = "blur(5px)"; 
    signup.style.filter = "blur(5px)";  
    abtDev.style.filter = "blur(5px)";
    Counter = 1;
}


