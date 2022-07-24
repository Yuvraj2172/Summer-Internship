const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

const Shopping = document.querySelector("#shop-now");

try {
    Shopping.addEventListener("click", function () {
        window.location.href = "shop.html";
    })
} catch (e) {

}
// window.onload = function () {
//     const addTo = document.getElementsByClassName("add-to-cart");
//     addTo.addEventListener("click", function () {
//         alert("Item added to cart");
//     })
// }

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



// for( i in localStorage){
//     console.log(localStorage.getItem(keys));
// }

// console.log(localStorage.getItem(keys))

// for (let key of keys) {
//     console.log(localStorage.getItem(key))
//     console.log(localStorage.getItem(key).indexOf(":"))
//     console.log(localStorage.getItem(key).charAt(55));

// }

// let a="yuvrajyuvrajyuvraj"
//  let i=0;
//  while( i !=a.length){
//     let substr=a.substring(i,a.length-1);
//      let index=substr.indexOf("y");
//      console.log(index);
//      i++;
//  }

// let c=0;
// let i=0;
// while(i!=localStorage.getItem(key)){
//     console.log(items[i]);
//     i++;
// }
const keys = Object.keys(localStorage);
let count=0;
let c=0;
for (let i = 0; i < localStorage.getItem(keys).length; i++) {
    if(localStorage.getItem(keys).charAt(i)===":"){
        c+=1;
        if(c%4==0 && c!==0){
            // console.log( parseInt(localStorage.getItem(keys).charAt(i+1)));
            count+= parseInt(localStorage.getItem(keys).charAt(i+1))
        }
    // console.log("hi "+c);
    }
    
}
const homePageCart=document.querySelector("#cart-count-info");
homePageCart.innerHTML=count;
console.log(count);