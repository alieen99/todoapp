import {action, observable} from "mobx";
import TodoModel from "./TodoModel"
import todo from "./TodoModel";

class TodoStore {

    @observable todos = []
    @observable lastID = 0
    @observable showState =true


    @action
    addTodo(title) {
        this.todos.push(new TodoModel(this, title, false, this.lastID++,this.showState))
    }

    @action
    removeElement(i) {
        let x = this.todos.length
        const sample = this.todos
        this.todos = sample.slice(0, i)
        this.lastID = i
        sample.slice(i + 1, x).map(todo => {
            this.todos.push(new TodoModel(this, todo.title, todo.isComplete, this.lastID++,todo.isShown))

        })

    }

    @action
    clearComplete() {
        for(let a = 0 ; a < this.todos.length ; a++){
            if(this.todos[a].isComplete === true){
                this.removeElement(this.todos[a].id)
            }
        }

    }

    @action
    clearCompletes() {
        let x = this.todos.length
        for(let a = 0 ; a < x ; a++){
            this.clearComplete()
        }

    }

    @action
    showAll(){
        this.todos.map(todo => {
            if (todo.isShown === false) todo.toggle_second()
        })
        this.showState =true

        }

    @action
    showActive(){
        this.todos.map(todo =>{
            if (todo.isComplete === false) todo.show()
            else todo.hide()
        })
        this.showState =true

    }

    @action
    showComplete(){
        this.todos.map(todo =>{
            if (todo.isComplete === true) todo.show()
            else todo.hide()
        })
        this.showState = false

    }


}

const store = new TodoStore()
export default store