import { Component } from "react"
import Meta from "../components/Meta"
import Header from "../components/Header"
import "../styles/styles.scss"

class Page extends Component {
    displaySparks = () => {
        let sparks = []
        for (let i = 0; i < 15; i++) {
            sparks.push(<div className="spark" key={i} />)
        }
        return sparks
    }

    render() {
        return (
            <>
                <Meta />
                {/* <div className="background-image" /> */}
                <main className="main">
                    {this.props.children}
                    {this.displaySparks()}
                </main>
            </>
        )
    }
}

export default Page
