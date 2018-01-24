import types from '../actions/types';

const DEFAULT_STATE = {
    quote: ''
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_QUOTE:
            return { quote: action.payload };
        default:
            return state
    }
}