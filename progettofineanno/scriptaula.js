// Simulated product data
const productData = {
    name: "aula selezionata",
    image: "product.jpg",
    description: "...", //descrizione
    features: ["feature1.png", "feature2.png", "feature3.png"],
    reviews: {
        stars: 4,
    }
};

// Populate the page with product data
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("product-name").textContent = productData.name;
    document.getElementById("product-image").src = productData.image;
    document.getElementById("product-description").textContent = productData.description;

    const featuresContainer = document.querySelector(".product-features");
    featuresContainer.innerHTML = ""; // Clear existing features
    productData.features.forEach(feature => {
        const img = document.createElement("img");
        img.src = feature;
        img.alt = "Caratteristica dell'aula";
        featuresContainer.appendChild(img);
    });

    const stars = "★".repeat(productData.reviews.stars) + "☆".repeat(5 - productData.reviews.stars);
    document.querySelector(".stars").textContent = stars;
    document.getElementById("review-count").textContent = `(${productData.reviews.count} recensioni)`;
});
