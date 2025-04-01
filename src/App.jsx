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
      <div className="video-container">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="background-video"
        >
          <source src="/assets/spinnycatonlyfans.mov" type="video/quicktime" />
        </video>
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
  )
}

export default App
