import Link from "next/link"
import Page from "../layouts/Page"

const Index = () => (
    <Page>
        <div className="content" id="home">
            <h1>Hi, I'm Orion.</h1>
            <p className="home-description">
                I study Finance and Data Science at NYU, with a minor in
                Computer Science.
            </p>
            <button className="btn">
                <a href="#portfolio">⮟</a>
            </button>
        </div>
        <div className="content" id="portfolio">
            <h1>Project 1</h1>
            <p>About project 1</p>
            <button className="btn">
                <a href="#contact">⮟</a>
            </button>
        </div>
        <div className="content" id="contact">
            <h1>Contact Me</h1>
        </div>
    </Page>
)

export default Index
