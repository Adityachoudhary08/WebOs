import React, { useState } from 'react'
import { Rnd } from 'react-rnd'
import './windows.scss'
const MacWindows = ({ children, width = "40vw", height = "40vh", windowName, setwindowsState }) => {
    const [isMinimized, setIsMinimized] = useState(false)
    const [isMaximized, setIsMaximized] = useState(false)

    return (
        <Rnd  default={{
                width: width,
                height: height,
                x: 300,
                y: 200
            }}>
            <div className={`windows${isMaximized ? ' maximized' : ''}`}>
                <div className="nav">
                    <div className="dots">
                        <button aria-label="Close window" onClick={() => setwindowsState(prev => ({ ...prev, [windowName]: false }))} className="red dot"></button>
                        <button aria-label="Minimize window" onClick={() => setIsMinimized(prev => !prev)} className="yellow dot"></button>
                        <button aria-label="Maximize window" onClick={() => setIsMaximized(prev => !prev)} className="green dot"></button>
                    </div>
                    <div className="title"><p>AdityaChoudhary- zsh</p></div>
                </div>
                <div className={`main${isMinimized ? ' minimized' : ''}`}>
                    {children}
                </div>
            </div>
        </Rnd>
    )
}

export default MacWindows