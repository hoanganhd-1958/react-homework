import React from 'react'

export default class ListToDo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul id="myUL">
                {this.props.listToDo.map(item => (
                    <li 
                        key={item.id} 
                        className={item.isComplete ? 'checked': ''}
                        onClick={e => this.props.action(item.id)}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        );
    }
}