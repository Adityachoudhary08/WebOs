import React from 'react'
import githubData from "../../assets/github.json"
import MacWindow from './MacWindows'
import "./github.scss"

const GitCard = ({ data = { id: 1, image: "", title: "", description: "", tags: [], repoLink: "", demoLink: "" } }) => {
    return <div className="card">

        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p className='description' >{data.description}</p>

        <div className="tags">
            {
                data.tags.map(tag => <p className='tag' >{tag}</p>)
            }
        </div>

        <div className="urls">
            <a href={data.repoLink}>Repository</a>
            {data.demoLink && <a href={data.demoLink}>Demo link</a>}
        </div>
    </div>
}


const Github = ({ windowName, setwindowsState }) => {
    return (
        <MacWindow windowName={windowName} setwindowsState={setwindowsState} >
            <div className="github-window">
                <div className="github-profile">
                    <div>
                        <p className="eyebrow">GitHub profile</p>
                        <h1>Aditya Choudhary</h1>
                    </div>
                    <a href="https://github.com/Adityachoudhary08" target="_blank" rel="noreferrer">
                        github.com/Adityachoudhary08
                    </a>
                </div>
                <div className="cards">
                {githubData.map(project => {
                    return <GitCard key={project.id} data={project} />
                })}
                </div>
            </div>
        </MacWindow>
    )
}

export default Github