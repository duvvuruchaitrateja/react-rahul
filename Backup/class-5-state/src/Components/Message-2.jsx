import React from 'react'
class Message extends React.Component {

    state = {
        msg: "Hello...."
    }
    gmHandler = () => {
        this.setState({ msg: "GM Rahul" })
    }
    gnHandler = () => {
        this.setState({ msg: "GN Rahul" })
    }
    render() {
        console.log("Render Method -executing")
        return <div>
            <h1>Message Value:{this.state.msg}</h1>
            <button onClick={this.gmHandler}>GM  </button>
            <button onClick={this.gnHandler}>GN </button>
        </div >
    }
}
export default Message