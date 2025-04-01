import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  const audioRef = useRef(null)

  useEffect(() => {
    // Start playing music when component mounts
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.log("Audio play failed:", error)
      })
    }
  }, [])

  return (
    <div className="app-container">
      <audio
        ref={audioRef}
        src="./assets/background-music.m4a"
        loop
      />
      <div className="content">
        <div className="gif-container">
          <img src="./assets/spinny-fan.gif" alt="Spinny Fan 1" className="spinny-gif" />
          <img src="./assets/spinny-fan.gif" alt="Spinny Fan 2" className="spinny-gif" />
        </div>
        <a 
          href="https://spinnycat.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="spinny-button"
        >
          Take me to spinnycat.com!
        </a>
      </div>
    </div>
  )
}

export default App
