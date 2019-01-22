

const INITIAL_STATE = { username: '', email: '', error: '',  loading: false};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "USER_REGISTER":
            return state;
        default :
            return state;
    }
}

