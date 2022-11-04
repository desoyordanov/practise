export default {
  TOGGLE_LOGIN_SCREEN(state) {
    state.onLogInScreen = !state.onLogInScreen;
  },
  TOGGLE_NAVIGATION(state, payload) {
    state.showNavigation = payload;
  },
  SET_USER_DETAILS(state, payload) {
    state.userDetails = payload;
    sessionStorage.setItem('user', JSON.stringify(payload));
  },
  SET_ERROR(state, payload) {
    state.errorMessage = payload;
  },
};
