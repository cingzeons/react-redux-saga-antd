import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";

import createSagaMiddleware from "redux-saga";
import reducer from "./reducer";
import Todosagas from "./sagas";
/**
 * 创建了一个数据公共仓库
 * store 代表管理员
 *
 * reducer(记录本) 传递给 store(管理员)
 */
// https://github.com/cingzeons/redux-devtools-extension

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =  typeof window === 'object' &&  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
    // applyMiddleware(thunk),
);

const store = createStore(reducer, enhancer);
sagaMiddleware.run(Todosagas);

export default store;