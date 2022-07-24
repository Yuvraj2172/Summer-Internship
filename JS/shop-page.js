const allFilterItems = document.querySelectorAll('.filter-item');
const allFilterBtns = document.querySelectorAll('.filter-btn');


try {
    window.addEventListener('DOMContentLoaded', () => {
        allFilterBtns[0].classList.add('active-btn');
    });
}
catch (e) {

}

allFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        showFilteredContent(btn);
    });
});

function showFilteredContent(btn) {
    allFilterItems.forEach((item) => {
        if (item.classList.contains(btn.id)) {
            resetActiveBtn();
            btn.classList.add('active-btn');
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

function resetActiveBtn() {
    allFilterBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}

(function () {

    let field = document.querySelector('.items');
    let li = Array.from(field.children);

    function FilterProduct() {
        for (let i of li) {
            const name = i.querySelector('strong');
            const x = name.textContent;
            i.setAttribute("data-category", x);
        }

        let indicator = document.querySelector('.indicator').children;

        this.run = function () {
            for (let i = 0; i < indicator.length; i++) {
                indicator[i].onclick = function () {
                    for (let x = 0; x < indicator.length; x++) {
                        indicator[x].classList.remove('active');
                    }
                    this.classList.add('active');
                    const displayItems = this.getAttribute('data-filter');

                    for (let z = 0; z < li.length; z++) {
                        li[z].style.transform = "scale(0)";
                        setTimeout(() => {
                            li[z].style.display = "none";
                        }, 500);

                        if ((li[z].getAttribute('data-category') == displayItems) || displayItems == "all") {
                            li[z].style.transform = "scale(1)";
                            setTimeout(() => {
                                li[z].style.display = "block";
                            }, 500);
                        }
                    }
                };
            }
        }
    }

    function SortProduct() {
        let select = document.getElementById('select');
        let ar = [];
        for (let i of li) {
            const last = i.lastElementChild;
            const x = last.textContent.trim();
            const y = Number(x.substring(1));
            i.setAttribute("data-price", y);
            ar.push(i);
        }
        this.run = () => {
            addevent();
        }
        function addevent() {
            select.onchange = sortingValue;
        }
        function sortingValue() {

            if (this.value === 'Default') {
                while (field.firstChild) { field.removeChild(field.firstChild); }
                field.append(...ar);
            }
            if (this.value === 'LowToHigh') {
                SortElem(field, li, true)
            }
            if (this.value === 'HighToLow') {
                SortElem(field, li, false)
            }
        }
        function SortElem(field, li, asc) {
            let dm, sortli;
            dm = asc ? 1 : -1;
            sortli = li.sort((a, b) => {
                const ax = a.getAttribute('data-price');
                const bx = b.getAttribute('data-price');
                return ax > bx ? (1 * dm) : (-1 * dm);
            });
            while (field.firstChild) { field.removeChild(field.firstChild); }
            field.append(...sortli);
        }
    }

    new FilterProduct().run();
    new SortProduct().run();
})();


const attToCartBtn = document.getElementsByClassName('add-to-cart');
let items = [];
let totalItemsCart = document.querySelector('#cart-count-info');
for (let i = 0; i < attToCartBtn.length; i++) {
    attToCartBtn[i].addEventListener("click", function (e) {
        console.log(e.target.parentElement.parentElement.children[2].textContent);
        alert("Item added to cart");
        if (typeof (Storage) !== 'undefined') {
            let item = {
                id: i+1 ,
                name: e.target.parentElement.children[2].textContent,
                price: e.target.parentElement.parentElement.children[2].textContent,
                no: 1
            };

            if (JSON.parse(localStorage.getItem('items')) === null) {
                localStorage.setItem("items", JSON.stringify(items));
                console.log(items);
                calculateTotal();
            } else {
                const localItems = JSON.parse(localStorage.getItem("items"));
                localItems.map(data => {
                    if (item.id == data.id) {
                        item.no = data.no + 1;
                        console.log(item);
                        calculateTotal();
                    }
                    else {
                        items.push(data);

                    }
                });

                items.push(item);

                localStorage.setItem('items', JSON.stringify(items));
                window.location.reload();
                calculateTotal();
            }
        } else {
            alert('local storage is not working on your browser');
        }
    });
    calculateTotal();

}

const iconShopping = document.querySelector('#cart-count-info');
let no = 0;
JSON.parse(localStorage.getItem('items')).map(data => {
    no = no + data.no;
});
iconShopping.innerHTML = no;




function calculateTotal() {
    let total = 0;
    items.forEach(item => {
        total += item.no;
    });
    // totalItemsCart.innerText=no;
    totalItemsCart.innerHTML = `${total}`;
}
// function exporting(){
// localStorage.setItem("counter",)
// console.log(mainPageSpan)
// }
// exporting();