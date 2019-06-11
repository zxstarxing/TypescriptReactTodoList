import { observable } from 'mobx';
import ITodo from "../interface/ITodo";
export default class TodoModel implements ITodo {
    @observable
    public Id?: number;
    @observable
    public Todo: string;
    constructor(todo: string, id: number = Math.random()) {
        this.Id = id;
        this.Todo = todo;
    }
}