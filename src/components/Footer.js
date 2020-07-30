import React , {Component} from "react";
import {observer} from "mobx-react";
import store from "../stores/TodoStore";
import Show from "./Show";
import storeSelect from "../stores/SelectStore";

@observer
class Footer extends Component{

    render() {
            let counter = 0
            for (let a = 0; a < store.todos.length ; a++){
                if (store.todos[a].isComplete === false){
                    counter++
                }
            }

        return(
            <div className="footer">
                <div className="todo-count">{counter} Items left</div>
                <ul className="filters">
                    {
                        storeSelect.select.map(select =>{
                            return(
                                <Show select={select}/>
                            )
                        })
                    }
                </ul>
                <div onClick={()=>store.clearCompletes()} className="clear-completed">Clear completed</div>
            </div>
        )
    }

    active() {

    }
}
export default Footer