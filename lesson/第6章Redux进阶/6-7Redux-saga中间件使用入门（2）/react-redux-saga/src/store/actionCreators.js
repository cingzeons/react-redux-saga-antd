// import axios from "axios";
import {GET_INIT_LIST, CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from "./actionTypes";

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});


export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM,
});


export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
});

// 请求数据
export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
});

export const getInitList = (data) => ({
    type: GET_INIT_LIST
});

/*
export const getTodoList = () => {
    return (dispatch) => {
        axios.get("/mock/list.json").then((res) => {
           const data = res.data;
           const action = initListAction(data);
           dispatch(action);
           console.log('数据请求成功：', data);
        })
    }
}*/
