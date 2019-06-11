// 默认数据是空
const defaultState = {
    inputValue: '',
    list: []
};

/**
 *
 * reducer 代表笔记本，记录的数据
 * reducer 可以接受state, 但是不绝对不能修改state
 * @param state
 * @param action
 * @returns {{inputValue: string, list: number[]}|any}
 *
 * 创建 笔记本，并传递给 store(管理员)
 */
export default (state = defaultState, action) => {
    if(action.type === 'change_input_value'){
        // 做一次深拷贝数据
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;

    }

    if(action.type === 'add_todo_item'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        console.log(newState);
        return newState;
    }

    if(action.type === 'delete_todo_item'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    console.log(state, action);
    return state;
}

