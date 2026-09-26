let cart = [];

function addToCart(name, price) {
    let product = cart.find(item => item.name === name);

    if (product) {
        product.count++;
    } else {
        cart.push({
            name: name,
            price: price,
            count: 1
        });
    }

    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById("cartItems");
    let cartIcon = document.getElementById("cartIcon");
    let cartCount = document.getElementById("cartCount");
    let cartTotal = document.getElementById("cartTotal");

    cartItems.innerHTML = "";

    let totalCount = 0;
    let totalPrice = 0;

    for (let i = 0; i < cart.length; i++) {
        totalCount += cart[i].count;
        totalPrice += cart[i].price * cart[i].count;

        cartItems.innerHTML += `
            <div class="cartItem">
                <h3>${cart[i].name}</h3>
                <p>Price: $${cart[i].price}</p>
                <p>Sum: $${(cart[i].price * cart[i].count).toFixed(2)}</p>

                <div class="cartControls">
                    <button onclick="minusItem(${i})">−</button>
                    <span>${cart[i].count}</span>
                    <button onclick="plusItem(${i})">+</button>
                    <button class="deleteItemBtn" onclick="deleteItem(${i})">Delete</button>
                </div>
            </div>
        `;
    }

    cartCount.textContent = totalCount;
    cartTotal.textContent = totalPrice.toFixed(2);

    if (cart.length > 0) {
        cartIcon.style.display = "block";
    } else {
        cartIcon.style.display = "none";
        closeCart();
    }
}

function plusItem(index) {
    cart[index].count++;
    updateCart();
}

function minusItem(index) {
    cart[index].count--;

    if (cart[index].count <= 0) {
        cart.splice(index, 1);
    }

    updateCart();
}

function deleteItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function clearCart() {
    cart = [];
    updateCart();
}

function buyCart() {
    if (cart.length === 0) {
        alert("Cart is empty");
        return;
    }

    alert("Thanks for your order!");

    cart = [];
    updateCart();
}

function openCart() {
    document.getElementById("cartModal").classList.add("active");
    document.getElementById("cartOverlay").style.display = "block";
}

function closeCart() {
    document.getElementById("cartModal").classList.remove("active");
    document.getElementById("cartOverlay").style.display = "none";
}