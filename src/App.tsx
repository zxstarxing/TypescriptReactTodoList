import * as React from 'react';
import './App.css';
import TodoList from './components/todo/TodoList';

class App extends React.Component {
  public render() {
    return (
      <>
        <TodoList />
      </>
    );
  }
}

export default App;
