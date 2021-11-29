var menuItems = document.getElementById("menuItems");

menuItems.style.maxHeight = "0px";

function menutoggle(){
    if (menuItems.style.maxHeight == "0px")
    {
        menuItems.style.maxHeight = "200px";
    }
    else{ 
        menuItems.style.maxHeight = "0px";
    }
}

// Efecto de Galeria en Product Details

var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");

SmallImg[0].onclik = function() {
    ProductImg.src = SmallImg[0].src;
}
SmallImg[1].onclik = function() {
    ProductImg.src = SmallImg[1].src;
}
SmallImg[2].onclik = function() {
    ProductImg.src = SmallImg[2].src;
}
SmallImg[3].onclik = function() {
    ProductImg.src = SmallImg[3].src;
}

//js for toggle form

var LoginForm = document.getElementById("LoginForm");
var RegisterForm = document.getElementById("RegisterForm");
var Indicator = document.getElementById("indicator");

function register() {
    RegisterForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style,transform = "translateX(100px)";
}

function login() {
    RegisterForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style,transform = "translateX(0px)";
}