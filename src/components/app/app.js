import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from "../item-add-form";

import './app.css';

export default class App extends Component {

    maxId = 100;

    state = {
        todoData:  [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch'),
        ]
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        };
    };

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const  idx = todoData.findIndex((el) => el.id === id);

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            };
        });
    };

    addItem = (text) => {

        // gen id
        /*const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        };*/

        // add item in new state
        this.setState(({ todoData }) => {

            let newArr = [
                ...todoData,
                this.createTodoItem(text)
            ];

            return {
                todoData: newArr
            };
        });
    };

    toggleProperty(arr, id, propName) {

        const  idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    };

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };

    render() {

        const { todoData } = this.state;

        // Количество сделанных элементов
        const doneCount = todoData
            .filter((el) => el.done)
            .length;

        // Элементов осталось сделать
        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    todos={todoData}
                    onDeleted={ (id) => this.deleteItem(id) }
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />

                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    }
}
