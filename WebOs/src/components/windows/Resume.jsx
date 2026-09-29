import React from 'react'
import MacWindow from './MacWindows'
import "./resume.scss"

const Resume = ({ windowName, setwindowsState }) => {
    return (
        <MacWindow windowName={windowName} setwindowsState={setwindowsState} >
            <div className="resume-window">
                {/* <embed src="/resume.pdf" frameborder="0"></embed> */}
                <iframe src="/resume.pdf" frameBorder="0"></iframe>
            </div>
        </MacWindow>
    )
}

export default Resume