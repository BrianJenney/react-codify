


export default(state = {}, action) => {
    switch (action.type) {
        case 'ADD':
            return Object.assign({}, state, {
                loggedIn: action.isLogged,
                name: action.name,
                id: action.id
            });
        default:
            return state;
    }
};