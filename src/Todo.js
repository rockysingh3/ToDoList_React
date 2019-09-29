import React, { Component } from 'react'


// this class renders the list of components
class Todo extends Component {
    render() {
        return (
            <div>
                <button>Edit</button>
                <button>X</button>
                <li>{this.props.task}</li>
            </div>
        )
    }
}

export default Todo;