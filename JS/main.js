const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

const Shopping = document.querySelector("#shop-now");

try {
    Shopping.addEventListener("click", function () {
        window.location.href = "/HTML/shop.html";
    })
} catch (e) {

}


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}




const keys = Object.keys(localStorage);
let count=0;
let c=0;
for (let i = 0; i < localStorage.getItem(keys).length; i++) {
    if(localStorage.getItem(keys).charAt(i)===":"){
        c+=1;
        if(c%4==0 && c!==0){
            count+= parseInt(localStorage.getItem(keys).charAt(i+1))
        }
    }
    
}
const homePageCart=document.querySelector("#cart-count-info");
homePageCart.innerHTML=count;
console.log(count);