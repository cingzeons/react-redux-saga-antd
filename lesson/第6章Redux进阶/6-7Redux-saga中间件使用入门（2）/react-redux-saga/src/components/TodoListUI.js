import React from 'react';
import {Button, Input, List} from "antd";

// 无状态组件
const TodoListUi = (props) => {
        const { inputValue, handleInputChange, handleBtnClick, list, handleItemDelete } = props;
        const container = { margin: 10 };
        const styles = { width: 300, marginRight: 10 };
        return (
            <div style={container}>
                <div>
                    <Input
                        style={styles}
                        value={inputValue}
                        placeholder="todo info"
                        onChange={handleInputChange}
                    />
                    <Button
                        type="primary"
                        onClick={handleBtnClick}
                    >提交</Button>
                </div>
                <List
                    style={{marginTop: 10, width: 300}}
                    bordered
                    dataSource={list}
                    renderItem={(item, index) => <List.Item onClick={() => handleItemDelete(index)}>{index}-{item}</List.Item>}
                />
            </div>
        );
}

export default TodoListUi;