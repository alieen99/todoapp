import React , {Component} from "react";
import TodoItem from "./TodoItem";
import store from "../stores/TodoStore"
import {observer} from "mobx-react";
import Footer from "./Footer";
import storeSelect from "../stores/SelectStore";

@observer
class Show extends Component{
    render() {
        const {select} = this.props

        return(
            <li><a onClick={()=>storeSelect.toggle(select.id)} className={select.isSelected? "selected" :" "}>{select.name}</a></li>
        )
    }
}
export default Show