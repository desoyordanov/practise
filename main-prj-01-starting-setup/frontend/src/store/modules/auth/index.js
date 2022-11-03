import authMutations from './mutations.js';
import authActions from './actions.js';
import authGetters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      userDetails: {},
      errorMessage: '',
      showNavigation: false,
      onLogInScreen: true,
    };
  },
  mutations: authMutations,
  actions: authActions,
  getters: authGetters,
};
