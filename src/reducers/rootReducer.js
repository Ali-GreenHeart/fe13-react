const initialStore = {
    counter: 0,
    users: []
}

const rootReducer = (state = initialStore, action) => {
    switch (action.type) {
        case 'inc':
            return { ...state, counter: state.counter + 1 }
        case 'dec':
            return { ...state, counter: state.counter - 1 }
        case 'reset':
            return { ...state, counter: 0 }
        default:
            return state;
    }
}

export default rootReducer;
