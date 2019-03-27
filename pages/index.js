import Link from "next/link";
import Header from "../components/Header";
import {Main} from '../styles';

function Index() {
    return (
        <Main>
            <Header />
            <section>
                <Link href="/about">
                    <a>Go to About Me</a>
                </Link>
            </section>
        </Main>
    );
}

export default Index;
