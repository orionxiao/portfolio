import Page from "../layouts/Page"
import Carousel from "../components/Carousel"
import DownButton from "../components/DownButton"

const Index = () => (
    <Page>
        <div className="content" id="home">
            <h1>Orion Xiao</h1>
            <p className="home-description">
                Software Developer <br />
                NYU Stern '19
            </p>
            <DownButton href="#projects" />
        </div>
        <div className="content" id="projects">
            <h1>My Projects</h1>
            <Carousel />
            <DownButton href="#contact" />
        </div>
        <div className="content" id="contact">
            <h1>Contact Me</h1>
        </div>
    </Page>
)

export default Index
