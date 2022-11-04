<template>
  <Header v-if="showNavigation"></Header>
  <ErrorModal v-if="errorMessage"></ErrorModal>
  <router-view></router-view>
</template>
<script>
import ErrorModal from './ui-components/ErrorModal.vue';
import Header from './ui-components/Header.vue';
export default {
  created() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user) {
      this.$store.dispatch('auth/setUser', user);
    }
  },
  components: {
    ErrorModal,
    Header,
  },
  computed: {
    errorMessage() {
      return this.$store.getters['auth/getErrorMessage'];
    },
    showNavigation() {
      return this.$store.getters['auth/getNavStatus'];
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
