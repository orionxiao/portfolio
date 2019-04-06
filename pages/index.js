import Page from "../layouts/Page"
import DownButton from "../components/DownButton"

const Index = () => (
    <Page>
        <div className="content" id="home">
            <h1>Orion Xiao</h1>
            <p className="home-description">
                Software Developer <br />
                NYU Stern '19
            </p>
            <DownButton href="#portfolio" />
        </div>
        <div className="content" id="portfolio">
            <h1>CitiMap</h1>
            <p>About CitiMap</p>
            <DownButton href="#portfolio-1" />
        </div>
        <div className="content" id="portfolio-1">
            <h1>Grouped</h1>
            <p>About Grouped</p>
            <DownButton href="#contact" />
        </div>
        <div className="content" id="contact">
            <h1>Contact Me</h1>
        </div>
    </Page>
)

export default Index
