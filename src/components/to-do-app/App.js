import React from 'react';
import './App.scss'
import InputToDo from './inputToDo'
import ListToDo from './list-to-do'
import Filter from './filter'

export default class ToDoApp extends React.Component{
    constructor(props) {
        super(props)
        
        this.state = {
            toDo: [{'id': 0, 'name': 'Learn React', 'isComplete': false}, {'id': 1, 'name': 'Write Viblo', 'isComplete': true}],
            filter: 'toDo'
        }

        this.handlerInput = this.handlerInput.bind(this);
        this.handlerClickToDo = this.handlerClickToDo.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    // This method will be sent to the child component
    handlerInput(newTodo) {
        if (newTodo !== '') {
            this.setState({
                toDo:[...this.state.toDo, {'id': this.state.toDo.length > 0 ? this.state.toDo.pop().id+1 : 0, 'name': newTodo, 'isComplete': false}]
            });
        }
    };

    handlerClickToDo(key) {
        this.setState({
            toDo: this.state.toDo.map((obj, index) => {
                if (index === key) {
                    obj.isComplete = !obj.isComplete;
                }

                return obj;
            }),
        });
    }

    handleRemove(key) {
        this.setState({
            toDo: this.state.toDo.filter((_, i) => _.id !== key)
        });
    }
    
    handleFilter(filter) {
        this.setState({
            filter: filter
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
                <Filter
                    handleFilter={this.handleFilter}
                />
                <ListToDo 
                    listToDo = {this.state.filter === 'toDo' ? this.state.toDo.filter(i => i.isComplete === false) : this.state.toDo.filter(i => i.isComplete === true)}
                    action={this.handlerClickToDo}
                    handleRemove={this.handleRemove}
                />
            </div>
        );
    }
}