import React from 'react'
import MacWindow from './MacWindows'
import "./spotify.scss"

const Spotify = ({ windowName, setwindowsState }) => {
    return (
        <MacWindow width="25vw" windowName={windowName} setwindowsState={setwindowsState}>
            <div className="spotify-window">
                <iframe
                    src="https://open.spotify.com/embed/playlist/37i9dQZF1E8PkBLjNfBeDl"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                />
            </div>
        </MacWindow>

    )
}

export default Spotify


