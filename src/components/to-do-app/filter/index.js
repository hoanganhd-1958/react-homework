import React from 'react'

export default class Filter extends React.Component {
    setFilter(event) {
        this.props.handleFilter(event.target.value);
    }

    render() {
        return (
            <div className="filter" onChange={this.setFilter.bind(this)}>
                <label className="container">Need to do
                    <input type="radio" name="radio" value="toDo" defaultChecked></input>
                    <span className="checkmark"></span>
                </label>
                <label className="container">Done
                    <input type="radio" name="radio" value="done"></input>
                    <span className="checkmark"></span>
                </label>
            </div>
        )
    };
}