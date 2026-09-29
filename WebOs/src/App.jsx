import React, { useState } from 'react'
import "./app.scss"
import Doc from './components/doc'
import Nav from './components/Nav'
import GitHub from './components/windows/github'
import Note from './components/windows/Notes'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli.jsx'
import github from 'react-syntax-highlighter/dist/esm/styles/hljs/github.js'
const App = () => {
  const [windowsState, setwindowsState] = useState({
    github: false,
    notes: false,
    resume: false,
    spotify: false,
    cli: false,
  })
  return (
    <main>
      <Nav windowsState={windowsState} setwindowsState={setwindowsState} />
      <Doc windowsState={windowsState} setwindowsState={setwindowsState} />
      {windowsState.github && <GitHub windowName="github" setwindowsState={setwindowsState} />}
      {windowsState.notes && <Note windowName="notes" setwindowsState={setwindowsState} />}
      {windowsState.resume && <Resume windowName="resume" setwindowsState={setwindowsState} />}
      {windowsState.spotify && <Spotify windowName="spotify" setwindowsState={setwindowsState} />}
      {windowsState.cli && <Cli windowName="cli" setwindowsState={setwindowsState} />}
    </main>
  )
}

export default App

