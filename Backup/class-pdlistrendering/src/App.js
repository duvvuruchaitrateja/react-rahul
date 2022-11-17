import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Product from './Product/Product'
import CompA from './PropsDrilling/CompA'
import Employee from './Employee/Employee'
class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Employee />
            </div>
        )
    }
}

export default App
