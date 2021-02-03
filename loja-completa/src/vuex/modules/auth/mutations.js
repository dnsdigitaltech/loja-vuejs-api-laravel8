export default {
    AUTH_USER_OK (state, user) {
        state.authenticated = true,
        state.me = user
    },

    AUTH_USER_LOGOUT(state,){
        state.authenticated = false,
        state.me = {},
        state.urlBack = 'home'
        
    },

    CHANGE_URL_BACK(state, url) {
        state.urlBack = url
    }
}