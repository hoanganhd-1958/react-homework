import React from 'react';
import './App.scss'
import InputToDo from './inputToDo'
import ListToDo from './list-to-do'

export default class ToDoApp extends React.Component{
    constructor(props) {
        super(props)
        
        this.state = {
            toDo: [{'name': 'Learn React', 'isComplete': false}, {'name': 'Write Viblo', 'isComplete': true}]
        }

        this.handlerInput = this.handlerInput.bind(this);
        this.handlerClickToDo = this.handlerClickToDo.bind(this);
        this.handleRemove = this.handleRemove.bind(this);

    }

    // This method will be sent to the child component
    handlerInput(newTodo) {
        if (newTodo !== '') {
            this.setState({
                toDo:[...this.state.toDo, {'name': newTodo, 'isComplete': false}]
            });
        }
    };

    handlerClickToDo(key) {
        this.setState({
            toDo: this.state.toDo.map((obj, index) => {
                if (index == key) {
                    obj.isComplete = !obj.isComplete;
                }

                return obj;
            }),
        });
    }

    handleRemove(key) {
        this.setState({
            toDo: this.state.toDo.filter((_, i) => i !== key)
        });
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
                    handleRemove={this.handleRemove}
                />
            </div>
        );
    }
}