import React from "react";
import ReactDOM from 'react-dom';

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";

// const el = React.createElement('h1', null, 'Hello, World!');
// const el = <h1>Hello, World!</h1>; // JSX код
// ReactDOM.render(el, document.getElementById('root'));

const App = () => {

    const isLoggedIn = true;
    const loginBox = <span>Log in please</span>;
    const welcomeBox = <span>Welcome Back</span>
    const value = '<script>alert("")</script>';

    const todoData = [
        { label: 'Drink coffe', important: false, id: 1},
        { label: 'Make Awesome App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3}
    ];

    return (
      <div>
          {value} <br/>
          { loginBox } <br/>
          { isLoggedIn ? null : loginBox } <br/>
          { isLoggedIn ? welcomeBox : loginBox } <br/>
          <span>{ (new Date()).toString() }</span>
          <AppHeader />
          <SearchPanel /> <br/>
          <TodoList todos={todoData} />
      </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
