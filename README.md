
## 🛍️ Product Catalog Web Application

A simple and responsive **Product Catalog Web App** built using **HTML, CSS, and JavaScript**.
This app allows users to **view, search, and filter** products by category and price range — all done on the **frontend (no backend required)**.

---

### 🌟 Features

* 🧾 Display a list of products with images, names, prices, and categories
* 🔍 **Search bar** to filter products by name
* 🗂️ **Filter by category** (e.g., Electronics, Clothing, Accessories)
* 💰 **Filter by price range** (Below ₹1000, ₹1000–₹3000, Above ₹3000)
* ⚡ Instant filtering using pure JavaScript
* 📱 Fully responsive and works on mobile and desktop

---

### 🧠 Technologies Used

| Technology           | Purpose                                                 |
| -------------------- | ------------------------------------------------------- |
| **HTML5**            | Structure of the web app                                |
| **CSS3**             | Styling and responsive layout                           |
| **JavaScript (ES6)** | Logic for filtering, searching, and displaying products |

---

### 📂 Project Structure

```
product-catalog/
│
├── index.html       # Main HTML file
├── style.css        # Styling for layout and design
├── script.js        # JavaScript for app logic
└── README.md        # Documentation
```

---

### ⚙️ How to Run

1. **Download or clone this repository**

   ```bash
   git clone https://github.com/your-username/product-catalog.git
   ```

2. **Open the folder** in your code editor.

3. **Run the app**

   * Simply open the file `index.html` in your web browser.
   * No server or installation required!

---

### 🧩 How It Works

* Products are stored in a JavaScript array (inside `script.js`).
* Each product has properties:

  ```js
  { name, category, price, image }
  ```
* When you:

  * Type in the **search bar** → filters products by name.
  * Select a **category** → filters by that type.
  * Select a **price range** → filters by cost.
* All filters work **together** dynamically.

---

### 🖼️ Example Products

| Name       | Category    | Price   |
| ---------- | ----------- | ------- |
| Smartphone | Electronics | ₹15,000 |
| Headphones | Electronics | ₹800    |
| T-Shirt    | Clothing    | ₹1,200  |
| Jacket     | Clothing    | ₹2,500  |
| Watch      | Accessories | ₹4,000  |
| Sunglasses | Accessories | ₹900    |

---

### 🚀 Future Enhancements

You can extend this project with:

* 🧮 **Sort by price (Low → High / High → Low)**
* 🛒 Add to Cart feature (local storage)
* 🌐 Backend integration with a database (Node.js / Firebase)
* 🧭 Pagination for large product lists

---

### 👨‍💻 Author

**Dev**
Built with ❤️ using HTML, CSS, and JavaScript.

---

Would you like me to **add the “Sort by Price” feature** and update this README accordingly?
