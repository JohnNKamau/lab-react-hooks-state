
import React from 'react'

const DarkModeToggle = ({ darkMode, setDarkMode }) => {

  function handleToggle() {
    setDarkMode(!darkMode)
  }

  return (
    <button onClick={handleToggle}>
      {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
    </button>
  )
}

export default DarkModeToggle