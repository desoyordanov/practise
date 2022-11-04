import { createStore } from 'vuex';
import coachModule from './modules/coaches/index.js';
import authModule from './modules/auth/index.js';

const store = createStore({
  state() {
    return {
      testDetails: true,
    };
  },
  modules: {
    coach: coachModule,
    auth: authModule,
  },
});

export default store;
