import React, {Component} from 'react';
import store from "../store";
import { getInputChangeAction, getAddItemAction, getDeleteItemAction} from "../store/actionCreators";

import TodoListUI from "./TodoListUI";

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: store.getState()
        };
        store.subscribe(this.handleStoreChange);
    }

    handleInputChange = (e) => {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleStoreChange = () => {
        this.setState({
            data: store.getState()
        });
    }

    handleBtnClick = () => {
        const action = getAddItemAction();
        store.dispatch(action);
    }

    handleItemDelete = (index) => {
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.data.inputValue}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                list={this.state.data.list}
                handleItemDelete={this.handleItemDelete}
            />
        );
    }
}

export default TodoList;