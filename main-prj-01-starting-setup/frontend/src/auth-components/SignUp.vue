<template>
  <main>
    <div class="container">
      <div class="pic-container">
        <img
          src="../img-resources/kisspng-vector-graphics-coach-stock-illustration-stock-pho-hiit-timer-voice-motivation-on-google-play-review-5d242fe5c5c1b5.03317232156265264581.png"
          alt=""
        />
        <img src="../img-resources/goal-post-1.png" class="goal-post-pic" />
      </div>
      <div class="form-container">
        <LogInForm v-if="onLogInScreen"></LogInForm>
        <CreateAccountForm v-else></CreateAccountForm>
      </div>
    </div>
    <div class="change-forms">
      Already on board? Let us take you to
      <span @click="toggleInputFields">Sign In!</span>
    </div>
  </main>
</template>

<script>
import CreateAccountForm from './CreateAccountForm.vue';
import LogInForm from './LogInForm.vue';
export default {
  data() {
    return {};
  },
  methods: {
    toggleInputFields() {
      this.$store.dispatch('auth/toggleLoginScreen');
    },
  },
  computed: {
    onLogInScreen() {
      return this.$store.getters['auth/showLogInScreen'];
    },
  },
  components: {
    CreateAccountForm,
    LogInForm,
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,300,0,0');

main {
  background-color: azure;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.container {
  width: 60%;
  height: 70%;
  background-color: rgb(255, 255, 255);

  display: flex;
  justify-content: space-around;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.pic-container,
.form-container {
  width: 50%;
  display: flex;
}

.pic-container {
  justify-content: center;
  position: relative;
}

img {
  width: 80%;
  height: 60%;
  margin-top: 2rem;
}

.goal-post-pic {
  position: absolute;
  width: 50%;
  height: 40%;
  bottom: 0;
  left: -20%;
}

.form-container {
  flex-direction: column;
  position: relative;
  margin: 2rem 6rem;
}

.change-forms {
  margin-top: 3rem;
}

.change-forms span {
  color: dodgerblue;
  font-weight: bold;
  cursor: pointer;
}
</style>
