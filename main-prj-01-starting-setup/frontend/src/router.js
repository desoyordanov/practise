import { createRouter, createWebHistory } from 'vue-router';
import AllCoaches from './coach-components/AllCoaches.vue';
import Requests from './requests-components/Requests.vue';
import SignUp from './auth-components/SignUp.vue';
import CoachForm from './coach-components/CoachForm.vue';
import CoachDetails from './coach-components/CoachDetails.vue';
import ContactCoach from './coach-components/ContactCoach.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/signup',
    },
    {
      path: '/signup',
      component: SignUp,
    },
    {
      name: 'allcoaches',
      path: '/allcoaches',
      component: AllCoaches,
    },
    {
      path: '/allcoaches/:id',
      component: CoachDetails,
      props: true,
    },
    { path: '/allcoaches/:id/contact', component: ContactCoach, props: true },
    {
      name: 'requests',
      path: '/requests',
      component: Requests,
    },
    {
      name: 'addcoach',
      path: '/addcoach',
      component: CoachForm,
    },
  ],
});

export default router;
