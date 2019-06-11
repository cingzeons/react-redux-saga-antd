import React, {Component} from 'react';
import { connect } from "react-redux";
import { Input, Button } from "antd";
import store from "../store"

class TodoList extends Component{
    render(){
        const styles = {width: 300, marginRight: 10};
        const {inputValue, handleInputChange, handleClick, handleDelete} = this.props;
        return (
            <div>
                <div>
                    <Input
                        style={styles}
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <Button onClick={handleClick} type="primary">提交</Button>
                </div>
                <ul>
                    {
                        this.props.list.map((item, index) => {
                            return <li key={index}>{index}-{item}</li>
                        })
                    }

                </ul>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    inputValue: state.inputValue,
    list: state.list
});

const mapDispatchToProps = dispatch => ({
    handleInputChange(e){
        const action = {
            type: 'CHANGE_INPUT_VALUE',
            value: e.target.value
        };
        dispatch(action);
        console.log(e.target.value);
    },
    handleClick(){
        const action = {
            type: "ADD_ITEM"
        };
        dispatch(action);
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);