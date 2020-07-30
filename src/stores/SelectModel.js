import {observable, action} from "mobx";

class SelectModel {
    @observable store
    @observable id
    @observable name
    @observable isSelected

    constructor(store, id, isSelected,name) {
        this.store = store
        this.id = id
        this.name = name
        this.isSelected =isSelected

    }


}

export default SelectModel