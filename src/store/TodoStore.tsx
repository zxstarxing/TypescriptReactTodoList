import { observable, action, computed,toJS } from "mobx";
import TodoModel from 'src/models/TodoModel';

export default class TodoStore {
    @observable
    public TodoList: TodoModel[] = [];
    @action
    public AddTodo(todoModel: TodoModel) {
        this.TodoList.push(todoModel);
    }
    @action
    public RemoveTodo(id?: number) {
        if (id !== undefined) {
            this.TodoList.splice(this.TodoList.findIndex(item => item.Id === id), 1);
        }
    }
    @computed
    public get List(): TodoModel[] {
        return toJS(this.TodoList);
    }


}
