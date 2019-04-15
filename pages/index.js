import Page from "../layouts/Page"

const Index = () => (
    <Page>
        <div className="content" id="home">
            <h1>Orion Xiao</h1>
            <p>Software Developer // NYU '19</p>
            <span id="btn-group">
                <a
                    href="../static/files/Xiao_Orion_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="../static/icons/cv-icon.png" />
                    <span>
                        Resume
                    </span>
                </a>
                <a href="#projects">
                    <img src="../static/icons/projects-icon.png" />
                    <span>
                        Projects
                    </span>
                </a>
                <a
                    href="https://github.com/orionxiao"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="../static/icons/github-icon.png" />
                    <span>
                        &nbsp;GitHub
                    </span>
                </a>
                <a
                    href="https://linkedin.com/in/orionxiao"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="../static/icons/linkedin-icon.png" />
                    <span>
                        LinkedIn
                    </span>
                </a>
            </span>
        </div>
        <div className="content" id="projects">
            <a
                className="project"
                href="https://github.com/orionxiao/citimap"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="bg-citimap" />
                <div className="project-desc">
                    <h1>CitiMap</h1>
                    <p>CitiBike Station Finder</p>
                    <span id="icon-group">
                        <img src="../static/icons/react-icon.png" />
                        <img src="../static/icons/node-icon.png" />
                        <img src="../static/icons/heroku-icon.png" />
                    </span>
                </div>
            </a>
            <a
                className="project"
                href="https://github.com/orionxiao/grouped"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="bg-grouped" />
                <div className="project-desc">
                    <h1>Grouped</h1>
                    <p>Group Messaging App</p>
                    <span id="icon-group">
                        <img src="../static/icons/react-icon.png" />
                        <img src="../static/icons/redux-icon.png" />
                        <img src="../static/icons/firebase-icon.png" />
                    </span>
                </div>
            </a>
        </div>
    </Page>
)

export default Index
