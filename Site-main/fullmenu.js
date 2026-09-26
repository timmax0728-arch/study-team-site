let num = 12
const element = document.getElementById('wrapper-row-block1-coffee');
const element1 = document.getElementById('menu-block');
let product = [
  {
    name: "Cappuccino",
    text: "Coffee 50% | Milk 50%",
    price: 8.50,
    img: "Изображения/капучино.jpeg"
  },
  {
    name: "Chai Latte",
    text: "Coffee 50% | Milk 50%",
    price: 8.50,
    img: "Изображения/чай-латте.jpeg"
  },
  {
    name: "Macchiato",
    text: "Coffee 50% | Milk 50%",
    price: 8.50,
    img: "Изображения/маккиато.jpeg"
  },
  {
    name: "Espresso",
    text: "Coffee 100%",
    price: 6.50,
    img: "Изображения/экспрессо.jpeg"
  },
  {
    name: "Ice Coffee",
    text: "Coffee 60% | Ice 40%",
    price: 7.50,
    img: "Изображения/айс-кофе.jpeg"
  },
  {
    name: "Doppio",
    text: "Coffee 100%",
    price: 6.50,
    img: "Изображения/доппио.jpeg"
  },
  {
    name: "Mint Coffee",
    text: "Coffee 100%",
    price: 6.50,
    img: "Изображения/мятный кофе.jpeg"
  },
  {
    name: "Frappe",
    text: "Coffee 100%",
    price: 6.50,
    img: "Изображения/фраппе.jpeg"
  },
  {
    name: "Orange Coffee",
    text: "Coffee 70% | Orange 30%",
    price: 7.90,
    img: "Изображения/апельсиновый кофе.jpeg"
  },
  {
    name: "Bombon",
    text: "Coffee 50% | Condensed Milk 50%",
    price: 8.90,
    img: "Изображения/бомбон.jpeg"
  },
  {
    name: "Viennese Coffee",
    text: "Coffee 70% | Whipped Cream 30%",
    price: 9.50,
    img: "Изображения/венский кофе.jpeg"
  },
  {
    name: "Irish Coffee",
    text: "Coffee 60% | Whiskey 20% | Cream 20%",
    price: 10.90,
    img: "Изображения/ирландский кофе.jpeg"
  },
  {
    name: "Coffee Smoothie",
    text: "Coffee 40% | Banana 30% | Ice 30%",
    price: 8.50,
    img: "Изображения/кофейный смузи.jpeg"
  },
  {
    name: "Moccaccino",
    text: "Coffee 40% | Chocolate 30% | Milk 30%",
    price: 9.50,
    img: "Изображения/моккачино.jpeg"
  },
  {
    name: "Frappuccino",
    text: "Coffee 40% | Milk 30% | Ice 30%",
    price: 8.90,
    img: "Изображения/фраппучино.jpeg"
  },
  {
    name: "Espresso Tonic",
    text: "Espresso 40% | Tonic 60%",
    price: 9.50,
    img: "Изображения/эспрессо-тоник.jpeg"
  }
];
  const button = document.getElementById('fullmenu');
  
function viewfullmenu() {
    let wrapper = document.getElementById('wrapper-row-block1-coffee');
    let menuBlock = document.getElementById('menu-block');

    wrapper.innerHTML = "";
    wrapper.className = "menu-block1-coffee";

    if (menuBlock) {
        menuBlock.remove();
    }

    for (let c = 0; c < product.length; c++) {
        let product1 = product[c];

        wrapper.innerHTML += `
            <div class="blocks-row-block1-coffee">
                <div 
                    class="bg-img-coffee" 
                    style="background-image: url('${product1.img}'); background-size: cover; background-position: center;">
                </div>

                <p class="text1-block-row-block1-coffee">${product1.name}</p>
                <p class="text2-block-row-block1-coffee">${product1.text}</p>
                <p class="text3-block-row-block1-coffee">$${product1.price.toFixed(2)}</p>

                <div class="block-row-coffee-wrapper-order-link">
                    <button type="button" class="block-row-coffee-order-link cart-order-btn" onclick="addToCart('${product1.name}', ${product1.price})">
                        Order Now
                    </button>
                </div>
            </div>
        `;
    }
}

