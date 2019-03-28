import Link from "next/link";
import Page from "../layouts/Page";

const Index = () => (
    <Page>
        <section className="content">
            <h1>Hi, I'm Orion.</h1>
            <p className="home-description">
                I study Finance and Data Science at NYU, with a minor in
                Computer Science.
            </p>
            <button className="btn">
                <Link href="/portfolio">
                    <a>View My Work</a>
                </Link>
            </button>
            <br />
            <button className="btn">
                <Link href="/bio">
                    <a>More About Me</a>
                </Link>
            </button>
        </section>
    </Page>
);

export default Index;
