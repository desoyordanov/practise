import axios from 'axios';
import router from '../../../router';

export default {
  async getMe(context, id) {
    try {
      const response = await axios.post('/auth/me', { id: id });
      console.log(response, 'me');
      context.commit('SET_USER_DETAILS', response.data[0]);
    } catch (err) {
      console.log(err);
    }
  },
  setUser(context, user) {
    context.commit('SET_USER_DETAILS', user);
    context.commit('TOGGLE_NAVIGATION', true);
  },
  toggleLoginScreen(context) {
    context.commit('TOGGLE_LOGIN_SCREEN');
  },
  logout(context) {
    context.commit('TOGGLE_NAVIGATION', false);
    context.commit('SET_USER_DETAILS', {});
    sessionStorage.removeItem('user');
  },
  clearError(context) {
    context.commit('SET_ERROR', '');
  },

  async createAccount(context, payload) {
    try {
      const response = await axios.post('/auth/signup', {
        accessToken: payload.accessToken,
        type: payload.type,
        password: payload.password,
        username: payload.username,
        email: payload.email,
      });
      console.log(response, 'create account');
    } catch (error) {
      console.log(error);
    }
    context.commit('SET_USER_DETAILS', payload);
  },

  async logIn(context, payload) {
    try {
      const response = await axios.post('/auth/signin', {
        accessToken: payload.accessToken,
        password: payload.password,
        type: payload.type,
        email: payload.email,
      });
      if (response.status == 200) {
        context.commit('SET_USER_DETAILS', response.data);

        router.push('/allcoaches');
        context.commit('TOGGLE_NAVIGATION', true);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
};
