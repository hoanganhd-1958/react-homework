import React from 'react'

export default class ListToDo extends React.Component {
    render() {
        return (
            <ul id="myUL">
                {this.props.listToDo.map((item, key) => (
                    <li 
                        key={item.id} 
                        className={item.isComplete ? 'checked': ''}
                        onClick={e => this.props.action(item.id)}
                    >
                        { item.name }
                        <button 
                            className="button"
                            onClick={e => {e.stopPropagation(); this.props.handleRemove(item.id)}}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        );
    }
}