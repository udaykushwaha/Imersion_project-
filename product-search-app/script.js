// Load all products initially
window.onload = function() {
    fetchProducts();
  };
  
  function fetchProducts() {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        displayProducts(data.products);
      })
      .catch(error => console.error("Error:", error));
  }
  
  function searchProducts() {
    const query = document.getElementById("searchInput").value.trim();
    const errorMsg = document.getElementById("errorMsg");
  
    if (query === "") {
      errorMsg.textContent = "Search field cannot be empty.";
      return;
    }
  
    errorMsg.textContent = "";
  
    fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then(res => res.json())
      .then(data => {
        displayProducts(data.products);
      })
      .catch(error => {
        errorMsg.textContent = "Failed to fetch products.";
        console.error("Error:", error);
      });
  }
  
  function displayProducts(products) {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
  
    if (products.length === 0) {
      productList.innerHTML = "<p>No products found.</p>";
      return;
    }
  
    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p><strong>Brand:</strong> ${product.brand}</p>
        <p><strong>Price:</strong> $${product.price}</p>
      `;
      productList.appendChild(card);
    });
  }
  