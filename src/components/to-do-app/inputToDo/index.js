import React from 'react';

export default class InputToDo extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            todo: ""
        }
    }

    handleType(e){
        this.setState({todo : e.target.value})
    }
    render(){
        return (
            <div>
                <input type="text" id="myInput" placeholder="Title..." onChange={e => this.handleType(e)} value={this.state.todo}/>
                <button disable={this.state.todo !== ''} onClick={() => { this.props.action(this.state.todo); this.setState({todo : ''}); }} className="addBtn">Add</button>
            </div>
        );
    }
}