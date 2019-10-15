const stopsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_STOPS':
            return [ ...state, ...action.payload ];
        case 'CLEAR_STOPS':
            return [];
        default:
            return state;
    }
}

export default stopsReducer;