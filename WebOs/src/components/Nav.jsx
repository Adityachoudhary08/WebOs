import React, { useState } from 'react'
import './nav.scss'
import DateTime from './DateTime'
const Nav = ({ windowsState, setwindowsState }) => {
    const [activeMenu, setActiveMenu] = useState(null)
    const [showAbout, setShowAbout] = useState(false)

    const toggleWindow = (windowName) => {
        setwindowsState(prev => ({ ...prev, [windowName]: !prev[windowName] }))
        setActiveMenu(null)
    }

    const closeWindows = () => {
        setwindowsState(prev => Object.fromEntries(Object.keys(prev).map(key => [key, false])))
        setActiveMenu(null)
    }

    return (
        <nav>
            <div className="left nav-group">

                <div className="menu-wrap">
                    <button aria-label="Open WebOS menu" className="webos-logo" onClick={() => setActiveMenu(activeMenu === 'apple' ? null : 'apple')}>
                        <img src="/nav-icons/webos-logo.svg" alt="WebOS logo" />
                    </button>
                    {activeMenu === 'apple' && <div className="menu-dropdown apple-menu">
                        <button onClick={() => { setActiveMenu(null); setShowAbout(true) }}>About this portfolio</button>
                        <button onClick={closeWindows}>Close all windows</button>
                    </div>}
                </div>


                <div className="nav-item portfolio-name">
                    <p>Aditya Choudhary</p>
                </div>

                <div className="menu-wrap">
                    <button className="nav-item" onClick={() => setActiveMenu(activeMenu === 'file' ? null : 'file')}>File</button>
                    {activeMenu === 'file' && <div className="menu-dropdown">
                        <button onClick={() => toggleWindow('github')}>GitHub & Projects</button>
                        <button onClick={() => toggleWindow('resume')}>Resume</button>
                        <button onClick={() => toggleWindow('notes')}>Notes</button>
                    </div>}
                </div>
                <div className="menu-wrap">
                    <button className="nav-item" onClick={() => setActiveMenu(activeMenu === 'window' ? null : 'window')}>Window</button>
                    {activeMenu === 'window' && <div className="menu-dropdown">
                        <button onClick={closeWindows}>Close all windows</button>
                        <button onClick={() => setActiveMenu(null)}>Open windows: {Object.values(windowsState).filter(Boolean).length}</button>
                    </div>}
                </div>
                <div className="menu-wrap">
                    <button className="nav-item" onClick={() => toggleWindow('cli')}>Terminal</button>
                </div>
            </div>




            <div className="right nav-group system-status">
                <div className="menu-wrap">
                    <button aria-label="Show network status" className="wifi-icon" onClick={() => setActiveMenu(activeMenu === 'wifi' ? null : 'wifi')}>
                    <img src="/nav-icons/wifi.svg" alt="" />
                    </button>
                    {activeMenu === 'wifi' && <div className="menu-dropdown wifi-menu">
                        <p>Network</p>
                        <strong>Connected</strong>
                    </div>}
                </div>
                  <div className="nav-item clock">
                    <DateTime/>
                </div>
            </div>

            {showAbout && <div className="about-overlay" onClick={() => setShowAbout(false)}>
                <section className="about-panel" role="dialog" aria-modal="true" aria-labelledby="about-title" onClick={event => event.stopPropagation()}>
                    <button className="about-close" aria-label="Close about panel" onClick={() => setShowAbout(false)}>x</button>
                    <p className="about-kicker">The idea behind WebOS</p>
                    <h1 id="about-title">A portfolio with a point of view.</h1>
                    <p>
                        This portfolio is my way of showing how I think as a web developer, not only what I can build. I wanted it to feel like a small personal operating system: familiar enough to explore, but personal enough to feel like mine.
                    </p>
                    <p>
                        Instead of relying on a polished showcase or an oversized visual statement, I chose a quieter and more meaningful approach. The windows, tools, and small interactions invite you to discover my work at your own pace, just as good software reveals its character through use.
                    </p>
                    <p>
                        It is a record of my projects, curiosity, and craft, presented in a style that values intention over noise.
                    </p>
                </section>
            </div>}
        </nav>
    )
}

export default Nav