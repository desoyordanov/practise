// import { createStore } from 'vuex';
// import axios from 'axios';
// import router from './router';

// const store = createStore({
//   state() {
//     return {
//       userDetails: {},
//       errorMessage: '',
//       showNavigation: false,
//       onLogInScreen: true,
//       coaches: [],
//     };
//   },
//   mutations: {
//     ADD_COACH(state, payload) {
//       state.coaches.push(payload);
//     },
//     SET_COACH_LIST(state, payload) {
//       state.coaches = payload;
//     },
//     TOGGLE_LOGIN_SCREEN(state) {
//       state.onLogInScreen = !state.onLogInScreen;
//     },
//     TOGGLE_NAVIGATION(state, payload) {
//       state.showNavigation = payload;
//     },
//     SET_USER_DETAILS(state, payload) {
//       state.userDetails = payload;
//     },
//     SET_ERROR(state, payload) {
//       state.errorMessage = payload;
//     },
//   },
//   actions: {
//     setUser(context, user) {
//       context.commit('SET_USER_DETAILS', user);
//       context.commit('TOGGLE_NAVIGATION', true);
//     },
//     setCoaches(context, payload) {
//       context.commit('SET_COACH_LIST', payload);
//     },
//     async addCoach(context, payload) {
//       try {
//         const response = await axios.post(
//           'http://localhost:3000/api/coaches/addcoach',
//           {
//             fullname: payload.fullname,
//             description: payload.description,
//             rate: payload.rate,
//             categories: payload.categories,
//           }
//         );
//         console.log(response);
//         context.commit('ADD_COACH', payload);
//       } catch (error) {
//         console.log(error);
//       }
//     },
//     toggleLoginScreen(context) {
//       context.commit('TOGGLE_LOGIN_SCREEN');
//     },
//     logout(context) {
//       context.commit('TOGGLE_NAVIGATION', false);
//       context.commit('SET_USER_DETAILS', {});
//       sessionStorage.removeItem('user');
//     },
//     clearError(context) {
//       context.commit('SET_ERROR', '');
//     },

//     async createAccount(context, payload) {
//       try {
//         const response = await axios.post(
//           'http://localhost:3000/api/auth/signup',
//           {
//             accessToken: payload.accessToken,
//             type: payload.type,
//             password: payload.password,
//             username: payload.username,
//             email: payload.email,
//           }
//         );
//         console.log(response);
//       } catch (error) {
//         console.log(error);
//       }
//       context.commit('SET_USER_DETAILS', payload);
//     },

//     async logIn(context, payload) {
//       try {
//         const response = await axios.post(
//           'http://localhost:3000/api/auth/signin',
//           {
//             accessToken: payload.accessToken,
//             password: payload.password,
//             type: payload.type,
//             email: payload.email,
//           }
//         );
//         if (response.status == 200) {
//           context.commit('SET_USER_DETAILS', response.data);
//           sessionStorage.setItem('user', JSON.stringify(response.data));
//           router.push('/allcoaches');
//           context.commit('TOGGLE_NAVIGATION', true);
//         }
//         console.log(response);
//       } catch (error) {
//         console.log(error);
//       }
//     },
//   },
//   getters: {
//     getAllCoaches(state) {
//       return state.coaches;
//     },
//     getUsrDetails(state) {
//       return state.userDetails;
//     },
//     getErrorMessage(state) {
//       return state.errorMessage;
//     },
//     getNavStatus(state) {
//       return state.showNavigation;
//     },
//     showLogInScreen(state) {
//       return state.onLogInScreen;
//     },
//   },
// });

// export default store;
