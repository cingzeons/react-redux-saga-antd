import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import { GET_INIT_LIST } from "./actionTypes";
import { initListAction } from "./actionCreators";

// 请求数据
function* getInitList(){
    // 处理异常
    try{
        const res = yield axios.get("/mock/list.json");
        const action = initListAction(res.data);
        yield put(action);
    }catch(e){
        console.log("List.json 网络请求失败！");
    }

}

// generator 函数
function* mySaga(){
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;