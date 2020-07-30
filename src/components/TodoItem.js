import React , {Component} from "react";
import {observer} from "mobx-react";
import store from "../stores/TodoStore";


@observer
class TodoItem extends Component{

    render() {
        const { todo } = this.props

            return(
                <li className={todo.isComplete? "completed" :" "}>
                    <div className={todo.isShown?"view":"hidden"}>
                        <input onChange={()=>{todo.toggle()}} type="checkbox" className="toggle" value="on" checked={todo.isComplete}/>
                        <label> {todo.title} </label>
                        <button onClick={()=>{store.removeElement(todo.id)}} className="destroy"/>

                    </div>

                </li>

            )


    }
}
export default TodoItem