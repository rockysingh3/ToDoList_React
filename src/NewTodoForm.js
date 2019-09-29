import React, { Component } from 'react'
import uuid from 'uuid/v4'


class NewTodoForm extends Component {

    constructor(props) {
        super(props)
        this.state = { task: "" }
        this.hangleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.createTodo({...this.state, id : uuid()});
        // we reset the state so all the info in the form is gone
        this.setState({ task: "" })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="task">New Todo</label> <br/>
                    <input 
                        type="text" 
                        placeholder="New Todo"
                        id="task"
                        name="task"
                        value={this.state.task}
                        onChange={this.hangleChange} />
                    <button>Add Todo</button>
                </form>
            </div>
        )
    }
}

export default NewTodoForm;