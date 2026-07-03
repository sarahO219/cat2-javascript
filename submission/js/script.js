const services = [
    {
        name: "Luxurious Accommodations",
        description: "Our resort offers a range of beautifully designed rooms and suites, each equipped with modern amenities to ensure a comfortable stay."
    },
    {
        name: "En-suite amenities",
        description: "Enjoy hot, refreshing showers, pristine linens, and complimentary high-speed wifi in every single room."
    },
    {
        name: "Recreational Activities",
        description: "Enjoy a variety of recreational activities, including sport screenings, a high-energy space featuring local music and entertainment."
    },
    {
        name: "Fully stocked bar",
        description: "Indulge in chilled local and international beers, fine wine, and signature spirits to wash down the highway dust."
    }

];
const servicelist = document.getElementById("services-list");

services.forEach(function(service) {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${service.name}</strong><p>${service.description}</p>`;
    servicelist.appendChild(li);
});

const wishList = document.getElementById("wishlist-list");
const wishInput = document.getElementById("wishlist-input");
const addWishButton = document.getElementById("add-wishlist-btn");

addWishButton.addEventListener("click", function() {
    const wishItem = wishInput.value.trim();
    if (wishItem !== "") {
        const li = document.createElement("li");
        li.textContent = wishItem;
        
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove"; 
        removeButton.addEventListener("click", function() {
            li.remove();
        });
        li.appendChild(removeButton);
        wishList.appendChild(li);
        wishInput.value = "";
    }
});
const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const formFeedback = document.getElementById("form-feedback");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "" || message === "") {
        formFeedback.textContent = "Please fill in all fields.";
        formFeedback.style.color = "red";
        return;
    }

    if (!emailPattern.test(email)) {
        formFeedback.textContent = "Please enter a valid email address.";
        formFeedback.style.color = "red";
        return;
    }

    formFeedback.textContent = "Message sent successfully!";
    formFeedback.style.color = "green";
    contactForm.reset();
});