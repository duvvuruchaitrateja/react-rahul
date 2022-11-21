import React, { Component } from 'react'
import CompD from './CompD'
class CompC extends Component {
    render() {
        return (
            <div>
                <h1>Component C</h1>
                <pre>{JSON.stringify(this.props)}</pre>
                <hr />
                <CompD name={this.props.name} />
            </div>
        )
    }
}

export default CompC
