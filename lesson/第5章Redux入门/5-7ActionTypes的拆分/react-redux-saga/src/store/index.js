import { createStore } from "redux";
import reducer from "./reducer";
/**
 * 创建了一个数据公共仓库
 * store 代表管理员
 *
 * reducer(记录本) 传递给 store(管理员)
 */
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;