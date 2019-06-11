import React, {Component} from 'react';
import { Input, Button, List, Typography } from "antd";
import store from "../store";
import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from "../store/actionTypes";

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: store.getState()
        };
        console.log(this.state.data);
        // 订阅store
        store.subscribe(this.handleStoreChange);
    }

    handleInputChange = (e) => {

        const action = {
            type: CHANGE_INPUT_VALUE,
            value: e.target.value
        };
        console.log(action);
        // 通过 store.dispatch 传递数据给 store的reducer
        store.dispatch(action);
    }

    handleStoreChange = () => {
        this.setState({
            data: store.getState()
        });
        console.log("handl store change");
    }

    handleBtnClick = () => {
        const action = {
            type: ADD_TODO_ITEM
        };

        store.dispatch(action);
    }

    handleItemDelete = (index) => {
        const action = {
            type: DELETE_TODO_ITEM,
            index
        };

        store.dispatch(action);
        console.log(index)
    }

    render() {
        const container = { margin: 10 };
        const styles = { width: 300, marginRight: 10 };

        return (
            <div style={container}>
                <div>
                    <Input
                        style={styles}
                        value={this.state.data.inputValue}
                        placeholder="todo info"
                        onChange={this.handleInputChange}
                    />
                    <Button
                        type="primary"
                        onClick={this.handleBtnClick}
                    >提交</Button>
                </div>
                <List
                    style={{marginTop: 10, width: 300}}
                    bordered
                    dataSource={this.state.data.list}
                    renderItem={item => <List.Item onClick={(item, index) => this.handleItemDelete(index)}>{item}</List.Item>}
                />
            </div>
        );
    }
}

export default TodoList;