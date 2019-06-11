import React, {Component} from 'react';
import { connect } from "react-redux";
import { Input, Button } from "antd";
import store from "../store"

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
    }
    render() {
        const styles = {width: 300, marginRight: 10};
        return (
            <div>
                <div>
                    <Input
                        style={styles}
                        value={this.props.inputValue}
                        onChange={this.props.handleInputChange}
                    />
                    <Button  type="primary">提交</Button>
                </div>
                <ul>
                    <li>Dell</li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    inputValue: state.inputValue
});

const mapDispatchToProps = dispatch => ({
    handleInputChange: e => {
        const action = {
            type: 'CHANGE_INPUT_VALUE',
            value: e.target.value
        };
        dispatch(action);
        console.log(e.target.value);
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);