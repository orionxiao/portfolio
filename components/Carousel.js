import { Component } from "react"

class Carousel extends Component {
    state = {
        index: 0,
        projects: [
            {
                title: "CitiMap",
                path: "../static/citimap-thumb.png",
                description: "An app for finding nearby Citibike stations"
            },
            {
                title: "Grouped",
                path: "../static/citimap-thumb.png",
                description: "A real-time group messaging app"
            }
        ]
    }

    prevItem = () => {
        const { index, projects } = this.state
        this.setState({
            index:
                index - 1 < 0
                    ? projects.length - 1
                    : (index - 1) % projects.length
        })
    }

    nextItem = () => {
        const { index, projects } = this.state
        this.setState({
            index: (index + 1) % projects.length
        })
    }

    render() {
        const { index, projects } = this.state
        return (
            <div className="carousel">
                <h2>{projects[index].title}</h2>
                <img src={projects[index].path} />
                <p>
                    <button onClick={this.prevItem}>prev</button>
                    {projects[index].description}
                    <button onClick={this.nextItem}>next</button>
                </p>
            </div>
        )
    }
}

export default Carousel
