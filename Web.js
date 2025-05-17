let card = document.querySelector(".trend");
let card2 = document.getElementById("trendSec");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");
let Login_btn = document.querySelector(".Log-in");

console.log(card);
let blog = document.querySelector(".trends");
let mainPage = document.querySelector(".main");

function homes() {
    mainPage.style.display = "flex";
    card.style.display = "block";
    card2.style.display = "block";
    blog.style.display = "none";
    about.style.display = "none";
    Login_btn.style.display = "block";

    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "rgb(2, 173, 173)";
    document.getElementById("shop").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "black";
}

function shops() {
    mainPage.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    card.style.display = "block";
    card2.style.display = "block";
    Login_btn.style.display = "block";

    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "rgb(2, 173, 173)";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "black";
}

function blogs() {
    mainPage.style.display = "none";
    blog.style.display = "block";
    about.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    contact.style.display = "none";
    Login_btn.style.display = "none";

    document.getElementById("blog").style.color = "rgb(2, 173, 173)";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "black";
}

function abouts() {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    about.style.display = "block";
    Login_btn.style.display = "none";

    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "rgb(2, 173, 173)";
}

function contacts() {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    contact.style.display = "block";
    Login_btn.style.display = "none";

    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("about").style.color = "black";
    document.getElementById("contact").style.color = "rgb(2, 173, 173)";
}

function LoginFunction() {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    contact.style.display = "none";
    Login_btn.style.display = "block";

    let loginForm = document.querySelector(".Login_class");
    if (loginForm) {
        loginForm.style.display = "block";
    } else {
        console.error("Login form not found.");
    }
}

// Cart Functions
function show(img) {
    let newImg = document.getElementById("newImg");
    if (newImg) newImg.src = img.src;

    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    contact.style.display = "none";

    let cart = document.querySelector(".cart");
    if (cart) cart.style.display = "flex";
}

function addCart() {
    alert("Added To Cart Successfully!");
    location.reload();
}

function BackCart() {
    alert("Returning to Home Page...");
    location.reload();
}

document.getElementById("backToHomeBtn")?.addEventListener("click", BackCart);

function BuyNow() {
    alert("Proceeding to Buy Now...");
    location.reload();
}

document.getElementById("buyNowBtn")?.addEventListener("click", BuyNow);

function AddToCart() {
    alert("Added To Your Cart Successfully!");
}

// Form Submission
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");

    if (form) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault();

            const formData = {
                name: document.querySelector("input[name='name']")?.value || "",
                email: document.querySelector("input[name='email']")?.value || "",
                message: document.querySelector("textarea[name='message']")?.value || ""
            };

            try {
                const response = await fetch("/submit-form", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData)
                });

                if (!response.ok) {
                    throw new Error("Failed to submit form");
                }

                const result = await response.json();
                alert(result.message);
            } catch (error) {
                console.error("Error submitting form:", error);
            }
        });
    }
});
