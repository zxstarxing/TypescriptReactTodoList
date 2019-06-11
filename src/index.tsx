import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';
import TodoStore from './store/TodoStore';

const todoStore: TodoStore = new TodoStore();

ReactDOM.render(
  <Provider todoStore={todoStore}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
