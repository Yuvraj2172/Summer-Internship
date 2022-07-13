// ajax request

// new xhmhttp request
let http = new XMLHttpRequest();
// https holds all the properties of the object


// preparing the request with the open() method
http.open('get','products.json',true);
// first arguement sets the http method
// the second arguement we pass the json file containing our data
//  lest arguement is keyword true , sets the request to be async

// sending request
http.onload=function(){
    // checking the readystate and status properties
    if(this.readyState == 4 && this.status == 200){
        // if response is successful then we will parse the json file
        let products = JSON.parse(this.responseText);

        // taking an empty output variable
        let output="";
        // looping through all the products also adding html template to the output variable.
        for(let item of products){
            output+=`
            <div class="product">
               <img src="${item.image}">
               <p class="title">${item.model-name}</p>
               <p class="description">${item.category}</p>
               <p class="price">
                  <span>${item.price}</span>
                  <span>€</span>
               </p>
               <p class="cart">Add to cart <i class="fal fa fa-shopping-cart"></i></p>
            </div>
         `;
        }
        document.querySelector(".products").innerHTML = output;
    }
}