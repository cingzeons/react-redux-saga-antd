
const defaultState = {
    inputValue: '',
    list: []
};

export default (state = defaultState, action) => {
    switch(action.type){
        case 'CHANGE_INPUT_VALUE':
           const newChangeState = JSON.parse(JSON.stringify(state));
            newChangeState.inputValue = action.value;
           return newChangeState;
        case 'ADD_ITEM':
           const newAddState = JSON.parse(JSON.stringify(state));
            newAddState.list.push(newAddState.inputValue);
            newAddState.inputValue = "";
           return newAddState;
        default:
            return state;

    }

}