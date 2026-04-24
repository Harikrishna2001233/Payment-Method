const theCheckbox = document.getElementById("the-checkbox");
const mastercardBtn = document.getElementById("mastercard-btn");
const visacardBtn = document.getElementById("visacard-btn");
const paypalBtn = document.getElementById("paypal-btn");
const mySubmitBtn = document.getElementById("submit-btn");
const subscribeMessage = document.getElementById("subscribe-message");
const paymentMessage = document.getElementById("payment-message");

mySubmitBtn.addEventListener("click", function() {
    if(theCheckbox.checked) {
        subscribeMessage.textContent = `You are subscribed!`;

    } else {
        subscribeMessage.textContent = `You are NOT subscribed!`;
    }

    if(mastercardBtn.checked) {
        paymentMessage.textContent = `Pay via MasterCard`
    } else if(visacardBtn.checked) {
        paymentMessage.textContent = `Pay via Visa`
    } else if(paypalBtn.checked) {
        paymentMessage.textContent = `Pay via PayPal`
    } else {
        paymentMessage.textContent = `Select any payment method!`
    }
})
