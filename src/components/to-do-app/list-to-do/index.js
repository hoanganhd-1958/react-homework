import React from 'react'

export default class ListToDo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul id="myUL">
                {this.props.listToDo.map((item, key) => (
                    <li 
                        key={key} 
                        className={item.isComplete ? 'checked': ''}
                        onClick={e => this.props.action(key)}
                    >
                        {item.name}
                        <button 
                            className="button"
                            onClick={e => {e.stopPropagation(); this.props.handleRemove(key)}}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        );
    }
}