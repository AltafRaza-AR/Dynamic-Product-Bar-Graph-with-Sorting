let products = [];

function addProduct() {
    const name = document.getElementById("product-name").value;
    const price = parseFloat(document.getElementById("product-price").value);
    const rating = parseFloat(document.getElementById("product-rating").value);

    if (name && price && rating) {
        products.push({ name, price, rating });
        updateGraphs();
    }
}

function updateGraphs() {
    const priceGraph = document.getElementById("price-graph");
    const ratingGraph = document.getElementById("rating-graph");

    priceGraph.innerHTML = '';
    ratingGraph.innerHTML = '';

    products.forEach(product => {
        const priceBar = document.createElement("div");
        priceBar.classList.add("bar");
        priceBar.style.height = product.price * 2 + "px";
        priceBar.innerHTML = `<span>${product.price}</span>`;
        priceGraph.appendChild(priceBar);

        const ratingBar = document.createElement("div");
        ratingBar.classList.add("bar");
        ratingBar.style.height = product.rating * 40 + "px";
        ratingBar.innerHTML = `<span>${product.rating}</span>`;
        ratingGraph.appendChild(ratingBar);
    });
}

function sortByPrice() {
    products.sort((a, b) => a.price - b.price);
    updateGraphs();
}

function sortByRating() {
    products.sort((a, b) => a.rating - b.rating);
    updateGraphs();
}
