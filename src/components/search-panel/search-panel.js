import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        term: ''
    };

    onSearchChancge = (event) => {
        const term = event.target.value;
        this.setState({term});
        this.props.onSearchChancge(term);
    }

    render() {
        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder="type to search"
                   value={this.state.term}
                   onChange={this.onSearchChancge}/>
        );
    }
}
