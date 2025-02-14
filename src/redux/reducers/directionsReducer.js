const directionsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DIRECTIONS':
            return [ ...state, ...action.payload ];
        case 'CLEAR_DIRECTIONS':
            return [];
        default:
            return state;
    }
}

export default directionsReducer;