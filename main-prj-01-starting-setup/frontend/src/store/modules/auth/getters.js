export default {
  getUsrDetails(state) {
    return state.userDetails;
  },
  getErrorMessage(state) {
    return state.errorMessage;
  },
  getNavStatus(state) {
    return state.showNavigation;
  },
  showLogInScreen(state) {
    return state.onLogInScreen;
  },
};
