import types from '../actions/types';

const DEFAULT_STATE = {
    auth: false,
    error: '',
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.SIGN_IN:
        case types.SIGN_UP:
            return { auth: true, error: '' };
        case types.ERROR:
            return { auth: false, error: action.payload };
        case types.LOG_OUT:
            return { auth: false, error: '' };
        default:
            return state;
    }
}

