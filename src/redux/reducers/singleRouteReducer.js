const singleRouteReducer = (state = "", action) => {
    switch (action.type) {
        case 'SELECTED_ROUTE':
            return action.payload;
        case 'CLEAR_SELECTED_ROUTE':
            return "";
        default:
            return state;
    }
}

export default singleRouteReducer;