let products = [
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
    name: "Expresso",
    text: "Coffee 50% | Milk 50%",
    price: 8.50,
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
    name: "Mint coffee",
    text: "Coffee 100%",
    price: 6.50,
    img: "Изображения/мятный кофе.jpeg"
  },
  {
    name: "Frappe",
    text: "Coffee 100%",
    price: 6.50,
    img: "Изображения/фраппе.jpeg"
  }
];

let startIndex = 0;
let visibleCards = 4;

let cardsBlock = document.getElementById("cards");

function showCards() {
    cardsBlock.innerHTML = "";

    for (let i = startIndex; i < startIndex + visibleCards; i++) {
        let product = products[i];

        cardsBlock.innerHTML += `
            <div class="blocks-row-block1-coffee">
                <div 
                    class="bg-img-coffee" 
                    style="background-image: url('${product.img}'); background-size: cover; background-position: center;">
                </div>

                <p class="text1-block-row-block1-coffee">${product.name}</p>
                <p class="text2-block-row-block1-coffee">${product.text}</p>
                <p class="text3-block-row-block1-coffee">$${product.price.toFixed(2)}</p>

                <div class="block-row-coffee-wrapper-order-link">
                    <button type="button" class="block-row-coffee-order-link cart-order-btn" onclick="addToCart('${product.name}', ${product.price})">
                        Order Now
                    </button>
                </div>
            </div>
        `;
    }
}

function next() {
    if (startIndex < products.length - visibleCards) {
        startIndex++;
        showCards();
    }
}

function back() {
    if (startIndex > 0) {
        startIndex--;
        showCards();
    }
}

showCards();