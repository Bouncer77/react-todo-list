import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = ({ todos }) => {


    // eslint-disable-next-line array-callback-return
    const elements = todos.map((item) => {
        return (
            <li>
                <TodoListItem
                label={item.label}
                important={item.important}/>
            </li>
        );
    });

    return (
        <ul>
            { elements }
        </ul>
    );
};

export default TodoList;