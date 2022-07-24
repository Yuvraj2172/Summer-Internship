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
const aboutUsPageCart=document.querySelector("#cart-count-info");
aboutUsPageCart.innerHTML=count;
console.log(count);