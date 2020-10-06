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

    const seachText = 'Type here to seach';
    const seachStyle = {
        fontSize: '20px'
    };

    return (
        <input
            style={seachStyle}
            placeholder={seachText}/>
    );
};

const TodoList = () => {

    const items = ['Learn React', 'Build Awesome App'];
    return (
        <ul>
            <li>${ items[0] }</li>
            <li>${ items[1] }</li>
        </ul>
    );
};

const App = () => {

    const isLoggedIn = true;
    const loginBox = <span>Log in please</span>;
    const welcomeBox = <span>Welcome Back</span>

    const value = '<script>alert("")</script>';

    return (
      <div>
          {value} <br/>
          { loginBox } <br/>
          { isLoggedIn ? null : loginBox } <br/>
          { isLoggedIn ? welcomeBox : loginBox } <br/>
          <span>{ (new Date()).toString() }</span>
          <AppHeader />
          <SearchPanel />
          <TodoList />
      </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
