export default {
  ADD_COACH(state, payload) {
    state.coaches.push(payload);
  },
  SET_COACH_LIST(state, payload) {
    state.coaches = payload;
  },
  TEST(state) {
    console.log(state);
  },
};
