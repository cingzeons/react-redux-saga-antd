import React, {Component} from 'react';
import { Input, Button, List, Typography } from "antd";

class TodoList extends Component {
    render() {
        const container = {
            margin: 10,
        };

        const styles = {
            width: 300,
            marginRight: 10
        };


        const data = [
            'Racing car sprays burning fuel into crowd.',
            'Japanese princess to wed commoner.',
            'Australian walks 100km after outback crash.',
            'Man charged over missing wedding girl.',
            'Los Angeles battles huge wildfires.',
        ];









        return (
            <div style={container}>
                <div>
                    <Input placeholder="todo info" style={styles}/>
                    <Button type="primary">提交</Button>
                </div>
                <List
                    style={{marginTop: 10, width: 300}}
                    bordered
                    dataSource={data}
                    renderItem={item => <List.Item>{item}</List.Item>}
                />
            </div>
        );
    }
}

export default TodoList;