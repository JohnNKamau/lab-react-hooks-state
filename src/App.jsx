import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {

  // Dark mode state
  const [darkMode, setDarkMode] = useState(false)

  // Cart state
  const [cart, setCart] = useState([])

  // Category filter state
  const [category, setCategory] = useState("All")

  // Add to cart function
  function handleAddToCart(product) {
    setCart([...cart, product])
  }

  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>🛒 Shopping App</h1>

      <p>
        Welcome! Your task is to implement filtering,
        cart management, and dark mode.
      </p>

      {/* Dark mode toggle */}
      <DarkModeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <br />
      <br />

      {/* Category filter dropdown */}
      <label>Filter by Category: </label>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList
        category={category}
        onAddToCart={handleAddToCart}
      />

      {/* Cart component */}
      <Cart cart={cart} />
    </div>
  )
}

export default App