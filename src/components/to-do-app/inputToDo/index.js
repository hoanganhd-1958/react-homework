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
                <input type="text" id="myInput" placeholder="Title..." onKeyUp={e => this.handleType(e)}/>
                <span onClick={() => this.props.action(this.state.todo)} className="addBtn">Add</span>
            </div>
        );
    }
}