const selectedStopReducer = (state = "", action) => {
    switch (action.type) {
        case 'SELECTED_STOP':
            return action.payload;
        case 'CLEAR_SELECTED_STOP':
            return "";
        default:
            return state;
    }
}

export default selectedStopReducer;