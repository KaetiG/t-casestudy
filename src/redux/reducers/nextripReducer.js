const nextripReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_NEXTRIP':
            return [ ...state, ...action.payload ];
        case 'CLEAR_NEXTRIP':
            return [];
        default:
            return state;
    }
}

export default nextripReducer;