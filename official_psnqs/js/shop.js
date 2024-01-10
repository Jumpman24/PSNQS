//cart 
let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')

//open cart
cartIcon.onclick = () =>{
    cart.classList.add("active");
}
//close cart
closeCart.onclick = () => {
    cart.classList.remove("active");
}

//cart Working JS
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}

//Making Function
function ready(){
    //remover Items from cart
    var removeCartButtons = document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons)
    for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i]
        button.addEventListener("click", removeCartItem )
    }
    //Quantity Changes 
    var quantityInputs = document.getElementsByClassName("cart-quantity")
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener("change", quantityChanged);
    }
    //Add to Cart
    var addCart = document.getElementsByClassName('add-cart')
    for (var i = 0; i < addCart.length; i++){
        var button = addCart[i]
        button.addEventListener("click", addCartClicked);
    }
    // Buy Button Work
    document.getElementsByClassName("btn-buy")[0].addEventListener("click", buyButtonClicked);
}
//Buy Button
function buyButtonClicked(){
    alert('Your Order is placed. Check your mail!')
    var cartContent = document.getElementsByClassName('cart-content')[0]
    while (cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal();
}
//Remove Items from Cart
function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
    updatetotal();
}
//Quantity changes 
function quantityChanged(event){
    var input = event.target 
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updatetotal();
}
//Add to cart
function addCartClicked(event){
    var button = event.target
    var shopProducts = button.parentElement
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
}
function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement('div');
    // cartShopBox.classList.add('cart-box');

    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");

    for (var i = 0; i < cartItemsNames.length; i++) {
        alert("You have already added this item to cart");
        return;
    }

    var cartBoxContent = `
        <img src="${productImg}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <!-- Remove from Cart -->
        <i class="bx bxs-trash-alt cart-remove"></i>`;

    cartShopBox.innerHTML = cartBoxContent;
    cartItems.appendChild(cartShopBox);

    cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartItem);
    cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged);

    updatetotal();
}

//update total
function updatetotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0]
    var cartBoxes = cartContent.getElementsByClassName('cart-box')
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i]
        var priceElement = cartBox.getElementsByClassName('cart-price')[0]
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
        var price = parseFloat(priceElement.innerText.replace("$",""));
        var quantity = quantityElement.value
        total = total + (price * quantity);
    }
        // If price contains decimal
        total = Math.round(total * 100) / 100;

        document.getElementsByClassName('total-price')[0].innerText = "$" + total;
}


document.addEventListener('DOMContentLoaded', function () {
    // Set the date we're counting down to
    var countDownDate = new Date().getTime() + 1000 * 60 * 60 * 280; // Example: 2 hours from now

    // Update the countdown every 1 second
    var x = setInterval(function () {
        // Get the current date and time
        var now = new Date().getTime();

        // Calculate the remaining time
        var distance = countDownDate - now;

        // Calculate hours, minutes, and seconds
        var hours = Math.floor(distance / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Format time with leading zeros and separate with colons
        var formattedTime = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);

        // Display the formatted countdown
        document.getElementById('countdown').innerText = formattedTime;

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(x);
            document.getElementById('countdown').innerText = '00:00:00';
        }
    }, 1000);

    // Function to format time with leading zeros
    function formatTime(time) {
        return time < 10 ? '0' + time : time;
    }
});


// Pop-Up on Page Load

document.addEventListener('DOMContentLoaded', function() {
    // Show the initial popup when the page loads
    showPopup();
});

function showPopup() {
    var popupContainer = document.getElementById('popup-container');
    popupContainer.classList.add('show');

    // Attach an event listener to the "Close" button
    var closeButton = document.getElementById('close-button');
    closeButton.addEventListener('click', function() {
        // Close the current popup after 2 seconds
        setTimeout(function() {
            popupContainer.classList.remove('show');
            // Show another popup after 2 seconds
            setTimeout(function() {
                showSecondPopup();
            }, 2000);
        }, 2000);
    });
}

function showSecondPopup() {
    var secondPopupContainer = document.getElementById('second-popup-container');
    secondPopupContainer.classList.add('show');
}

function closeSecondPopup() {
    var secondPopupContainer = document.getElementById('second-popup-container');
    secondPopupContainer.classList.remove('show');
}