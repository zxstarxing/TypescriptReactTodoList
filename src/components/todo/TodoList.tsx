import { inject, observer } from 'mobx-react';
import { observable } from "mobx";
import * as React from 'react';
import Store from 'src/contants/store/Store';
import TodoStore from 'src/store/TodoStore';
import TodoModel from 'src/models/TodoModel';
import Todo from './Todo';

interface ITodoList {
    todoStore: TodoStore
}

@inject(Store.TodoStore)
@observer
class TodoList extends React.Component<ITodoList | any> {
    @observable
    private todo: string;
    public handleAddTodo: any = () => {
        const { todoStore } = this.props;
        todoStore.AddTodo(new TodoModel(this.todo));
    }
    public handleChange: any = (e: any) => {
        this.todo = e.target.value;
    }
    public render() {
        const { todoStore } = this.props;
        return (
            <>
                <div>
                    <input placeholder="添加待办事项" name="todo" onChange={this.handleChange} />
                    <button onClick={this.handleAddTodo}>添加待办事项</button>
                </div>
                {
                    todoStore.List.map((item: any, index: number) => <Todo key={index} {...item} />)
                }
            </>
        )
    }
}

export default TodoList;
