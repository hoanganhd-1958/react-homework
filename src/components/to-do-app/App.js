import React from 'react';
import './App.scss'
import InputToDo from './inputToDo'
import ListToDo from './list-to-do'
import { v4 as uuidv4 } from 'uuid';

export default class ToDoApp extends React.Component{
    constructor(props) {
        super(props)
        
        this.state = {
            toDo: []
        }

        this.handlerInput = this.handlerInput.bind(this);
        this.handlerClickToDo = this.handlerClickToDo.bind(this);

    }

    // This method will be sent to the child component
    handlerInput(newTodo) {
        this.setState({
            toDo:[...this.state.toDo, {'id': uuidv4(), 'name': newTodo, 'isComplete': false}]
        });
    };

    handlerClickToDo(toDoId) {
        let findToDoStatus = this.state.toDo.find(item => item.id = toDoId).isComplete
        this.setState(prevState => ({
            toDo: prevState.toDo.map(
            obj => (obj.id === toDoId ? Object.assign(obj, { isComplete: !findToDoStatus }) : obj)
          )
        }));
        
    }

    render() {
        return (
            <div>
                <div id="myDIV" className="header">
                    <h2>My To Do List</h2>
                    <InputToDo 
                        action={this.handlerInput}
                    />
                </div>

                <ListToDo 
                    listToDo = {this.state.toDo}
                    action={this.handlerClickToDo}
                />
            </div>
        );
    }
}