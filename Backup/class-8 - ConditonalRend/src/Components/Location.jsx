import React, { Component } from 'react'

class Location extends Component {
    state = {
        bangalore: false,
        chennai: false,
        managalore: false
    }
    bangaloreHandler = () => {
        this.setState({ bangalore: !this.state.bangalore })
    }
    chennaiHandler = () => {
        this.setState({ chennai: !this.state.chennai })
    }
    mangaloreHandler = () => {
        this.setState({ managalore: !this.state.managalore })
    }
    render() {
        return <div className="container mt-5">
            <div className="row">
                <div className="col-4">
                    <div>
                        <input type="checkbox" onInput={this.bangaloreHandler} /> Bangalore
                    </div>
                    <div>
                        <input type="checkbox" onInput={this.chennaiHandler} /> Chennai
                    </div>
                    <div>
                        <input type="checkbox" onInput={this.mangaloreHandler} /> Mangalore
                    </div>
                </div>
                <div className="col-8">
                    {
                        this.state.bangalore ? <><div className="card-body bg-dark text-white">
                            <p>
                                Bengaluru (also called Bangalore) is the capital of India's southern Karnataka state.
                        </p>
                        </div></> : null
                    }
                    {
                        this.state.chennai ? <> <div className="card-body" className="card-body bg-warning text-white">
                            <p>
                                Chennai (also called Bangalore) is the capital of India's southern Karnataka state. The center of India's high-tech industry,
                        </p>
                        </div></> : null
                    }
                    {
                        this.state.managalore ? <> <div className="card-body bg-danger text-white">
                            <p>
                                Managalore (also called Bangalore) is the capital of India's southern Karnataka state. The center of India's high-tech industry,
                        </p>
                        </div></> : null
                    }

                </div>
            </div>
        </div>
    }
}

export default Location
