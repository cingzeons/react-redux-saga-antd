
const defaultState = {
    inputValue: '123',
    list: []
};

export default (state = defaultState, action) => {
    switch(action.type){
        case 'CHANGE_INPUT_VALUE':
           const newState = JSON.parse(JSON.stringify(state));
           newState.inputValue = action.value;
           return newState;

    }
    return state;
}