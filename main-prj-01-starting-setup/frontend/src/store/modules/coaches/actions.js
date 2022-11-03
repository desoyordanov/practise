import axios from 'axios';

export default {
  async sendRequest(context, payload) {
    try {
      const response = await axios.post('/coaches/addRequest', {
        id: payload.id,
        requests: payload.requests,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
  setCoaches(context, payload) {
    context.commit('SET_COACH_LIST', payload);
  },
  async addCoach(context, payload) {
    try {
      const response = await axios.post('/coaches/addcoach', {
        id: payload.id,
        description: payload.description,
        rate: payload.rate,
        categories: payload.categories,
      });
      console.log(response);
      context.commit('ADD_COACH', payload);
    } catch (error) {
      console.log(error);
    }
  },
};
