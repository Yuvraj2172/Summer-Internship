const data1 = [
    {
        id: '0',
        img: 'assets\newarrivalsimages\n3.png',
        name: 'yellow sweater',
        price: 45.78,
        incart: false
    },
    {
        id: '1',
        img: 'assets\newarrivalsimages\n6.png',
        name: 'goggles',
        price: 35.78,
        incart: false
    },
    {
        id: '2',
        img: 'assets\newarrivalsimages\f6.jpg',
        name: 'shirt',
        price: 40.78,
        incart: false
    },
    {
        id: '3',
        img: 'assets\newarrivalsimages\n9.png',
        name: 'coat',
        price: 42.78,
        incart: ''
    },
    {
        id: '4',
        img: 'assets\newarrivalsimages\n1.png',
        name: 'hoodie',
        price: 46.78,
        incart: false
    },
    {
        id: '5',
        img: 'assets\newarrivalsimages\n4.png',
        name: 'bag',
        price: 55.78,
        incart: false
    },
    {
        id: '6',
        img: 'assets\newarrivalsimages\n7.png',
        name: 'brown sweater',
        price: 25.78,
        incart: false
    },
    {
        id: '7',
        img: 'assets\newarrivalsimages\n10.png',
        name: 'green sweater',
        price: 20.78,
        incart: false
    },
    {
        id: '8',
        img: 'assets\newarrivalsimages\n2.png',
        name: 'container',
        price: 15.78,
        incart: false
    },
    {
        id: '9',
        img: 'assets\newarrivalsimages\n5.png',
        name: 'canvas',
        price: 22.78,
        incart: false
    },
    {

        id: '10',
        img: 'assets\newarrivalsimages\n8.png',
        name: 'purse',
        price: 33.78,
        incart: false
    },
    {

        id: '11',
        img: 'assets\newarrivalsimages\f7.jpg',
        name: 'plazo',
        price: 44.78,
        incart: false
    }
]

window.onload = function () {
    try {
        const proceedToCheckout = document.querySelector(`#proceed-to-checkout`);
        proceedToCheckout.addEventListener("click", function () {
            alert("Your Order Has Been Placed. HAPPY SHOPPING");
            window.location.href = `index.html`;
        })
        const contineShopping = document.querySelector(`#continue-shopping`);
        contineShopping.addEventListener("click", function () {
            window.location.href = `index.html`;
        })
    }
    catch (e) {

    }



}

;
const cartBox = document.querySelector('#cart');

// adding cartbox data in table
// const cartBoxTable = cartBox.querySelector('table');
// console.log(cartBoxTable);
// let tableData='';
// tableData += '<tr><th> S NO.</th><th> Item Name</th><th>Price</th>'
const cardBoxTable = cartBox.querySelector('#first-table');
let tableData = '';

// console.log(totalItems.textContent);
// let totalCost = 0;
tableData += '<tr><th>Item Name</th><th>InCart</th><th>Item Price/each</th><th></th></tr>';
if (JSON.parse(localStorage.getItem('items'))[0] === null) {
    tableData += '<tr><td colspan="5">No items found</td></tr>'
} else {
    JSON.parse(localStorage.getItem('items')).map(data => {
        tableData += '<tr><th>' + data.name.toUpperCase() + '</th><th>' + data.no + '</th><th>' + data.price + '</th></tr>';
        // totalCost +=  parseFloat(data.price.substring(1))
        //  console.log(  parseInt(data.price.substring(1)));
    });

}

const cardBoxTableSecond = cartBox.querySelector('#cart-add > #subtotal >table ');
let tableDataSecond = '';
let totalCost = 0;
// tableData += '<tr><th>Cart Total</th><th></th></tr>';
if (JSON.parse(localStorage.getItem('items'))[0] === null) {
    tableDataSecond += '<tr><td colspan="5">No items found</td></tr>'
} else {
    JSON.parse(localStorage.getItem('items')).map(data => {
        totalCost += parseFloat(data.price.substring(1)* data.no);


        //  console.log(  parseInt(data.price.substring(1)));
    });
    // tableData += '<tr><th>$ ' + totalCost.toFixed(2) + ' only.</th>' + '<th></tr>';

}
// console.log(totalCost)
// console.log(typeof totalCost);
cardBoxTable.innerHTML = tableData;

const proceedToCheckoutBtn = document.querySelector('#proceed-to-checkout');

proceedToCheckoutBtn.addEventListener("click",function(){
    window.localStorage.clear();
})

// total-price
const cartTotal = document.querySelector("#total-price");
cartTotal.innerHTML = ` Cart Total : $${totalCost.toFixed(2)}`;