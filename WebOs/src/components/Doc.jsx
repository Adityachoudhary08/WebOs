import React from 'react'
import "./doc.scss"
const Doc = ({ windowsState, setwindowsState }) => {
  return (
    <footer className='doc'>
      <div  onClick={()=>{window.open("https://calendar.google.com/","_blank")}}className="icon calender"><img src="/doc-icons/calender.svg" alt="" /></div>
      <div onClick={() => setwindowsState({ ...windowsState, github: !windowsState.github })} className="icon github"><img src="/doc-icons/github.svg" alt="" /></div>
      <div onClick={() => { window.open("https://www.linkedin.com/in/aditya-choudhary-001ab332a", "_blank", "noopener,noreferrer") }} className="icon link"><img src="/doc-icons/link.svg" alt="LinkedIn" /></div>
      <div onClick={() => { window.open("mailto:Aditya@example.com", "_blank") }} className="icon mail"><img src="/doc-icons/mail.svg" alt="" /></div>
      <div onClick={() => setwindowsState({ ...windowsState, notes: !windowsState.notes })} className="icon note"><img src="/doc-icons/note.svg" alt="" /></div>
      <div onClick={() => setwindowsState({ ...windowsState, cli: !windowsState.cli })} className="icon cli"><img src="/doc-icons/cli.svg" alt="" /></div>
      <div onClick={() => setwindowsState({ ...windowsState, resume: !windowsState.resume })} className="icon pdf"><img src="/doc-icons/pdf.svg" alt="" /></div>
      <div onClick={() => setwindowsState({ ...windowsState, spotify: !windowsState.spotify })} className="icon spotify"><img src="/doc-icons/spotify.svg" alt="" /></div>
    </footer>
  )
}

export default Doc