const routeReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ROUTES':
            return [ ...state, ...action.payload ];
        case 'CLEAR_ROUTES':
            return [];
        default:
            return state;
    }
}

export default routeReducer;