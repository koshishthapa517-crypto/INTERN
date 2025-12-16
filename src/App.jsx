import React from 'react'
import ThemeProvider from './context/ThemeProvider'
import useTheme from './hooks/useTheme'
const Content = () => {
  const {theme, toggleTheme} = useTheme();  
  return (  
    <div style={{padding: '40px'}}>
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}
function App () {
  return (
  <ThemeProvider>
    <Content/>
  </ThemeProvider>
  )
}

export default App