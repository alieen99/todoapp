import React , {Component} from "react";
import TodoItem from "./TodoItem";
import store from "../stores/TodoStore"
import {observer} from "mobx-react";
import Footer from "./Footer";

@observer
class TodoItems extends Component{
    render() {
        return(
            <section className="main">
                <ul className="todo-list">
                    {
                        store.todos.map(todo =>{

                            return(
                                <TodoItem todo={todo}/>
                            )
                        })
                    }

                </ul>
                <Footer/>
            </section>
        )
    }
}
export default TodoItems