import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <h1>Mi Aplicación de React</h1>
      </header>
      <main>
        <p>Bienvenido a mi aplicación de React. Esta es una página de inicio de presentación.</p>
        <p>Aquí puedes comenzar a construir tu aplicación web.</p>
      </main>
      <footer>
        <p>© 2023 Tu Nombre</p>
      </footer>
    </div>
  );
}

export default App
