const products = [
  { name: "Smartphone", category: "electronics", price: 15000, image: "https://via.placeholder.com/200x150?text=Smartphone" },
  { name: "Headphones", category: "electronics", price: 800, image: "https://via.placeholder.com/200x150?text=Headphones" },
  { name: "T-Shirt", category: "clothing", price: 1200, image: "https://via.placeholder.com/200x150?text=T-Shirt" },
  { name: "Jacket", category: "clothing", price: 2500, image: "https://via.placeholder.com/200x150?text=Jacket" },
  { name: "Watch", category: "accessories", price: 4000, image: "https://via.placeholder.com/200x150?text=Watch" },
  { name: "Sunglasses", category: "accessories", price: 900, image: "https://via.placeholder.com/200x150?text=Sunglasses" },
];

const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const searchInput = document.getElementById("searchInput");

function displayProducts(filteredProducts) {
  productList.innerHTML = "";
  if (filteredProducts.length === 0) {
    productList.innerHTML = "<p>No products found</p>";
    return;
  }
  filteredProducts.forEach((p) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <p class="category">${p.category}</p>
    `;
    productList.appendChild(productDiv);
  });
}

function filterProducts() {
  const searchText = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  const price = priceFilter.value;

  const filtered = products.filter((p) => {
    const matchCategory = category === "all" || p.category === category;
    const matchSearch = p.name.toLowerCase().includes(searchText);

    let matchPrice = true;
    if (price === "low") matchPrice = p.price < 1000;
    else if (price === "mid") matchPrice = p.price >= 1000 && p.price <= 3000;
    else if (price === "high") matchPrice = p.price > 3000;

    return matchCategory && matchPrice && matchSearch;
  });

  displayProducts(filtered);
}

categoryFilter.addEventListener("change", filterProducts);
priceFilter.addEventListener("change", filterProducts);
searchInput.addEventListener("input", filterProducts);

// Display all products initially
displayProducts(products);
