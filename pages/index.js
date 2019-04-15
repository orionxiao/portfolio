import Page from "../layouts/Page"

const Index = () => (
    <Page>
        <div className="content" id="home">
            <h1>Orion Xiao</h1>
            <p>Software Developer // NYU '19</p>
            <span id="btn-group">
                <a
                    href="../static/Xiao_Orion_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="https://cdn4.iconfinder.com/data/icons/staff-management-vol-1/72/34-512.png" />
                </a>
                <a href="#projects">
                    <img src="https://freeiconshop.com/wp-content/uploads/edd/code-outline.png" />
                </a>
                <a
                    href="https://github.com/orionxiao"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="https://camo.githubusercontent.com/7710b43d0476b6f6d4b4b2865e35c108f69991f3/68747470733a2f2f7777772e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f6f637469636f6e732f313032342f6d61726b2d6769746875622d3235362e706e67" />
                </a>
                <a
                    href="https://linkedin.com/in/orionxiao"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="https://image.flaticon.com/icons/png/512/61/61109.png" />
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
                        <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" />
                        <img src="https://tutorialedge.net/images/node.png" />
                        <img src="https://image.flaticon.com/icons/png/512/873/873120.png" />
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
                    <p>A Group Chat App</p>
                    <span id="icon-group">
                        <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" />
                        <img src="https://avatars0.githubusercontent.com/u/13142323?s=400&v=4" />
                        <img src="https://www.shareicon.net/download/2016/07/08/117547_developer_512x512.png" />
                    </span>
                </div>
            </a>
        </div>
    </Page>
)

export default Index
