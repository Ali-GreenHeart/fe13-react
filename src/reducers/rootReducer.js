
const initialStore = {
    counter: 0,
    users: []
}

export const actions = {
    inc: 0,
    dec: 1,
    reset: 2,
    special: 3
}

const rootReducer = (state = initialStore, action) => {
    switch (action.type) {
        case actions.inc:
            return { ...state, counter: state.counter + 1 }
        case actions.dec:
            return { ...state, counter: state.counter - 1 }
        case actions.reset:
            return { ...state, counter: 0 }
        case actions.special:
            return { ...state, counter: action.payload }
        default:
            return state;
    }
}

export default rootReducer;
