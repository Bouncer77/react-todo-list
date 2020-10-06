import React from "react";
import ReactDOM from 'react-dom';


// const el = React.createElement('h1', null, 'Hello, World!');
// const el = <h1>Hello, World!</h1>; // JSX код
// ReactDOM.render(el, document.getElementById('root'));

const AppHeader = () => {
    return (
        <h1>My Todo List</h1>
    );
};

const SearchPanel = () => {
    return (
        <input placeholder="search" />
    );
};

const TodoList = () => {
    return (
        <ul>
            <li>Learn React</li>
            <li>Build Awesome App</li>
        </ul>
    );
};

const App = () => {
  return (
      <div>
          <AppHeader />
          <SearchPanel />
          <TodoList />
      </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
