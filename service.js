const buy = document.querySelectorAll('.btn-buy');
const form = document.getElementById('form-buy');
const close = document.getElementById('form-close');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const country = document.getElementById('country');
const date = document.getElementById('date');
const comment = document.getElementById('comment');
const agreement = document.getElementById('agree');
const submit = document.getElementById('form-buy-submit');


buy.forEach(el => {
    el.addEventListener("click", (event) => {
        event.preventDefault();
        form.style.display = "flex";
    })
});

submit.addEventListener("click", async (event) => {
    event.preventDefault();
    setTimeout(() => alert("Письмо отправлено!"), 1000);
});


close.addEventListener("click", () => {
    form.style.display = "none";
});