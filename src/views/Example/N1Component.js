import React from 'react'

class N1Component extends React.Component {

    render() {
        return (
            <div> Hello world</div>
        )
    }
}

class PrintHelloFriend extends React.Component {

    render() {
        return (
            <div> Hello my friend </div>
        )
    }
}

export {N1Component, PrintHelloFriend}