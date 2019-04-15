import { Component } from "react"
import Meta from "../components/Meta"

import "../styles/styles.scss"

class Page extends Component {

    render() {
        return (
            <>
                <Meta />
                <div className="main-bg" />
                <main className="main">
                    {this.props.children}
                </main>
            </>
        )
    }
}

export default Page
