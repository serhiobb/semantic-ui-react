import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

const MESSAGE_INITIAL_STATE = {
    messages: null
}

const applySetMessages = (state, action) => {
    state.messages = action.messages
    return state
}

function messageReducer(state = MESSAGE_INITIAL_STATE, action) {
    switch (action.type) {
        case 'MESSAGES_SET': {
            return applySetMessages(state, action)
        }
        default:
            return state
    }
}

const SESSION_INITIAL_STATE = {
    authUser: null,
}

const applySetAuthUser = (state, action) => {
    state.authUser = action.authUser
    return state
}

function sessionReducer(state = SESSION_INITIAL_STATE, action) {
    switch (action.type) {
        case 'AUTH_USER_SET': {
            return applySetAuthUser(state, action)
        }
        default:
            return state
    }
}

const USER_INITIAL_STATE = {
    users: null,
}

const applySetUsers = (state, action) => {
    state.users = action.users
    return state
}

const applySetUser = (state, action) => {
    state.users[action.uid] = action.user
    return state
}

function userReducer(state = USER_INITIAL_STATE, action) {
    switch (action.type) {
        case 'USERS_SET': {
            return applySetUsers(state, action)
        }
        case 'USER_SET': {
            return applySetUser(state, action)
        }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    sessionState: sessionReducer,
    userState: userReducer,
    messageState: messageReducer,
})

const store = createStore(
    rootReducer,
    devToolsEnhancer()
)

export default store