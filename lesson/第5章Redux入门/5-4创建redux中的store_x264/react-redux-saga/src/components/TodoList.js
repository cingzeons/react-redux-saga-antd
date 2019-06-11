import React, {Component} from 'react';
import { Input, Button, List, Typography } from "antd";
import store from "../store";

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: store.getState()
        };
        console.log(this.state.data);
    }

    render() {
        const container = {
            margin: 10,
        };

        const styles = {
            width: 300,
            marginRight: 10
        };


        return (
            <div style={container}>
                <div>
                    <Input value={this.state.data.inputValue} placeholder="todo info" style={styles}/>
                    <Button type="primary">提交</Button>
                </div>
                <List
                    style={{marginTop: 10, width: 300}}
                    bordered
                    dataSource={this.state.data.list}
                    renderItem={item => <List.Item>{item}</List.Item>}
                />
            </div>
        );
    }
}

export default TodoList;