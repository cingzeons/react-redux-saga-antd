// 默认数据是空
const defaultState = {
    inputValue: '1234',
    list: [1,123]
};
/**
 * reducer 代表笔记本，记录的数据
 * @param state
 * @param action
 * @returns {*}
 */

// 创建 笔记本，并传递给 store(管理员)
export default (state = defaultState, action) => {
    return state;
}

