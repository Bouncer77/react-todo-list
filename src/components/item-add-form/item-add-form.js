import React, { Component } from "react";

import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        });
    };

    onSubmit = (event) => {
        event.preventDefault(); // Не выполнять действие по умолчанию
        /*
        * Для формыц действие по умолчанию отправка данных на сервер и перезагрузка страницы
        * */

        this.props.onItemAdded(this.state.label);
    };

    render() {
        return (
            <form className="item-add-form d-flex"
                  onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-control"
                       onChange={this.onLabelChange}
                       placeholder="What needs to be done"/>
                <button
                    className="btn btn-outline-secondary">
                    Add Item
                </button>
            </form>
        )
    };
}