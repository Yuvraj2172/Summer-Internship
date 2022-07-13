const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

const Shopping=document.querySelector("#shop-now");

try{Shopping.addEventListener("click",function(){
    window.location.href="shop.html";
})
}catch(e){

}
window.onload=function(){
const addTo = document.getElementsByClassName("add-to-cart");
addTo.addEventListener("click", function (){
    alert("Item added to cart");
})
}

if(bar){
bar.addEventListener('click',()=>{
    nav.classList.add('active');
})
}

if(close){
   close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
    }
    