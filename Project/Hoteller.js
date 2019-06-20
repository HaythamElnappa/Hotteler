function myMegaMenuShow() {
    var megaMenuContent=document.querySelector('.dropdown-megaMenu-content');
    var megaMenuBtn=document.querySelector('#megaMenu-btn');
        megaMenuContent.style.display = "block";
        megaMenuBtn.style.color = "#AF9A5F";

}
function myMegaMenuHide() {
    var megaMenuContent=document.querySelector('.dropdown-megaMenu-content');
    var megaMenuBtn=document.querySelector('#megaMenu-btn');
        megaMenuContent.style.display = "none";
        megaMenuBtn.style.color = "#e7e7e7";
}
function myIconBtn() {
    var x = document.getElementById("nav-links");
    var navContainer=document.querySelector('.nav-container');
    var bookNow = document.querySelector('#bookNow');
    if (x.style.display === "block") {
        x.style.display = "none";
        bookNow.style.display = "none";
        navContainer.style.backgroundColor='rgba(255,255,255,0)';
    } else {
        x.style.display = "block";
        bookNow.style.display = "block";
        navContainer.style.backgroundColor='#464646';
    }
}

/*
window.addEventListener('scroll',function (e) {
    var x = document.getElementById("nav-links");
    var navContainer=document.querySelector('.nav-contain');
    var navContainer=document.querySelector('.nav-contain');
if (e.y>150)
    {
      x.style.display='none';
    }
    else
{
    x.style.display='flex';
}
});
*/

var next = document.querySelectorAll(".next");
var pre = document.querySelectorAll(".pre");
var section5Slider = document.querySelector(".section5Slider");
var array = ["images/home-gal-img1.png", "images/home-gal-img2.png", "images/home-gal-img3.png"];
var img = document.querySelectorAll(".section-5-img");
var index = array.indexOf(img.src);

next[0].addEventListener('click', function (e) {
    if (index == 2) { index = -1 }
    while (index < array.length - 1) {
        img[0].src = array[++index];
        break;
    }

});

pre[0].addEventListener('click', function (e) {
    if (index == 0) { index = 3 }
    while (index > 0) {
        img[0].src = array[--index];
        break;
    }

});

next[1].addEventListener('click', function (e) {
    if (index == 2) { index = -1 }
    while (index < array.length - 1) {
        img[1].src = array[++index];
        break;
    }

});

pre[1].addEventListener('click', function (e) {
    if (index == 0) { index = 3 }
    while (index > 0) {
        img[1].src = array[--index];
        break;
    }

});

next[2].addEventListener('click', function (e) {
    if (index == 2) { index = -1 }
    while (index < array.length - 1) {
        img[2].src = array[++index];
        break;
    }

});

pre[2].addEventListener('click', function (e) {
    if (index == 0) { index = 3 }
    while (index > 0) {
        img[2].src = array[--index];
        break;
    }

});
