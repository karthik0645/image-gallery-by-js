let images=document.querySelectorAll(".gallery img");

let current=0;

function openLightbox(index){

document.getElementById("lightbox").style.display="flex";

document.getElementById("lightbox-img").src=images[index].src;

current=index;

}

function closeLightbox(){

document.getElementById("lightbox").style.display="none";

}

function changeSlide(n){

current=current+n;

if(current>=images.length)
current=0;

if(current<0)
current=images.length-1;

document.getElementById("lightbox-img").src=images[current].src;

}

function filterSelection(category){

let items=document.querySelectorAll(".image");

items.forEach(item=>{

if(category=="all"){
item.style.display="block";
}

else{

if(item.classList.contains(category))
item.style.display="block";
else
item.style.display="none";

}

});

}
