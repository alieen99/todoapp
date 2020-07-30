import {observable, action} from "mobx";

class TodoModel {
    @observable store
    @observable id
    @observable title
    @observable isComplete
    @observable isShown

    constructor(store, title, isComplete, id,isShown) {
        this.title = title
        this.isComplete = isComplete
        this.id = id
        this.store = store
        this.isShown = isShown
    }

    @action
    toggle() {
        this.isComplete = !this.isComplete
    }
    @action
    toggle_second(){
        this.isShown = !this.isShown
    }

    @action
    hide(){
        this.isShown = false
    }
    @action
    show(){
        this.isShown = true
    }
}

export default TodoModel