export default {
    AUTH_USER_OK (state, user) {
        state.authenticated = true,
        state.me = user
    },

    CHANGE_URL_BACK(state, url) {
        state.urlBack = url
    }
}