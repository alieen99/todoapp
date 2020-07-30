import {observable, action} from "mobx";
import SelectModel from "./SelectModel";
import store from "./TodoStore";

class SelectStore {
    @observable select = [
        new SelectModel(this, 0, true, "All"),
        new SelectModel(this, 1, false, "Active"),
        new SelectModel(this, 2, false, "Completed")
    ]

    @action
    toggle(i) {

       if(this.select[i].isSelected === false){
           this.select[i].isSelected =true
           for(let a = 0 ; a < 3 ; a++){
               if(a !== i){
                   this.select[a].isSelected =false
               }
           }
       }

        if (this.select[0].isSelected === true){store.showAll()}
        if (this.select[1].isSelected === true){store.showActive()}
        if (this.select[2].isSelected === true){store.showComplete()}

        }






}

const storeSelect = new SelectStore()
export default storeSelect