import { Component } from "react";
import Meta from "../components/Meta";
import Header from "../components/Header";
import "../styles.scss";

class Page extends Component {
    displayFireflies = () => {
        let fireflies = [];
        for (let i = 0; i < 20; i++) {
            fireflies.push(<div className="firefly" key={i} />);
        }
        return fireflies;
    };

    render() {
        return (
            <>
                <Meta />
                <main className="main">
                    <Header />
                    {this.props.children}
                    {this.displayFireflies()}
                </main>
            </>
        );
    }
}

export default Page;
