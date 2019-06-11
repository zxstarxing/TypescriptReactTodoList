import * as React from 'react'
import { inject } from 'mobx-react';
import Store from 'src/contants/store/Store';
import ITodo from 'src/interface/ITodo';
import TodoStore from 'src/store/TodoStore';

interface ITodoDetail extends ITodo {
    todoStore: TodoStore
}

@inject(Store.TodoStore)
class Todo extends React.Component<ITodoDetail> {
    public handleRemoveTodo = () => {
        const { todoStore } = this.props;
        todoStore.RemoveTodo(this.props.Id);
    }
    public render() {
        return (
            <>
                <p>{this.props.Todo} <button onClick={this.handleRemoveTodo}>X</button></p>
            </>
        )
    }
}
export default Todo;
