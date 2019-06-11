import React, {Component} from 'react';
import axios from "axios";
import store from "../store";
import { getInitList, getInputChangeAction, getAddItemAction, getDeleteItemAction} from "../store/actionCreators";

import TodoListUI from "./TodoListUI";

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: store.getState()
        };
        store.subscribe(this.handleStoreChange);
    }

    componentDidMount() {
        const action = getInitList();
        store.dispatch(action);
        console.log(action);
        /*axios.get("/mock/list.json").then((res) => {
            const data = res.data;
            const action = initListAction(data);
            store.dispatch(action);
            console.log('数据请求成功：', res);
        });*/
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