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