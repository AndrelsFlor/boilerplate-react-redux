const INITIAL_STATE = {

    teste: '2222'

};

export default (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case 'ADD_TODO':
            return { ...state, teste: action.payload };
        default:
            return state;
    }
}
