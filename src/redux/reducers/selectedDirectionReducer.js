const selectedDirectionReducer = (state = "", action) => {
    switch (action.type) {
        case 'SELECTED_DIRECTION':
            return action.payload;
        case 'CLEAR_SELECTED_DIRECTION':
            return "";
        default:
            return state;
    }
}

export default selectedDirectionReducer;