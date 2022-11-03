<template>
  <h2>Create Your Account</h2>
  <div class="secondary-title">Find the BEST coach!!!</div>
  <div class="name-surname-fields">
    <div>
      <label>NAME</label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label>SURNAME</label>
      <input type="text" v-model="surname" />
    </div>
  </div>
  <label>E-MAIL ADDRESS</label>
  <input type="text" v-model="email" />
  <label>PASSWORD</label>
  <div class="password-field">
    <input v-model="password" :type="isPassVisible ? 'text' : 'password'" />
    <span
      @click="togglePassVisibility"
      class="material-symbols-outlined password-icon"
    >
      {{ isPassVisible ? 'visibility_off' : 'visibility' }}
    </span>
  </div>

  <div>
    <input type="checkbox" />
    <label> I've read and accepted Terms of Service and Privacy Policy</label>
  </div>
  <button @click="createAccount">Create and account</button>
  <div class="singup-seperator">
    <hr />
    <span>or use</span>
    <hr />
  </div>
  <GoogleLogin
    :buttonConfig="{ text: 'signup_with' }"
    :callback="createGoogleAccount"
  />

  <!-- <v-facebook-login
    @login="fbsignup"
    v-model="model"
    @sdk-init="handleSdkInit"
    app-id="421903083362869"
  ></v-facebook-login> -->
  <CreatePasswordModal
    v-if="showCreatePass"
    :type="type"
    :token="token"
    v-model="password"
    @togglePwdField="togglePwdModal"
  ></CreatePasswordModal>
</template>

<script>
// import VFacebookLogin from 'vue-facebook-login-component-next';

import CreatePasswordModal from './CreatePasswordModal.vue';
export default {
  components: {
    // VFacebookLogin,
    CreatePasswordModal,
  },
  data() {
    return {
      notLogged: false,
      FB: {},
      model: {},
      scope: {},
      isPassVisible: false,
      name: '',
      surname: '',
      email: '',
      password: '',
      type: '',
      token: '',
      showCreatePass: false,
    };
  },

  methods: {
    togglePwdModal() {
      this.showCreatePass = !this.showCreatePass;
    },
    fbsignup(response) {
      console.log(response);
      this.token = response.authResponse.accessToken;
      this.type = 'fb';
      this.showCreatePass = true;
    },
    handleSdkInit({ FB, scope }) {
      this.FB = FB;
      this.scope = scope;
    },
    createGoogleAccount(response) {
      this.token = response.credential;
      this.type = 'gg';
      this.showCreatePass = true;
    },
    togglePassVisibility() {
      this.isPassVisible = !this.isPassVisible;
    },
    createAccount() {
      this.$store.dispatch('auth/createAccount', {
        username: this.name + ' ' + this.surname,
        email: this.email,
        password: this.password,
        type: '',
        accessToken: '',
      });
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,300,0,0');
hr {
  width: 43%;
  display: inline-block;
  margin-top: 1rem;
}
.password-icon {
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  cursor: pointer;
  user-select: none;
}

label {
  margin-bottom: 0.5rem;
  color: rgb(148, 148, 146);
}
.password-field {
  position: relative;
}
input:not([type='checkbox']) {
  border-width: 2px;
  border-radius: 1px;
  border-color: rgb(175, 179, 183);
  border: 2px solid rgb(175, 179, 183);
  margin-bottom: 1.5rem;
  height: 2.2rem;
  padding-left: 1rem;
  width: 100%;
}

.facebook-login-button {
  color: white;
  background-color: #3b5998;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.name-surname-fields {
  display: flex;
  justify-content: space-between;
}
.name-surname-fields input {
  width: 100%;
}

.name-surname-fields label {
  display: block;
}

h2 {
  margin-bottom: 0.5rem;
}
.secondary-title {
  margin-bottom: 1rem;
  color: rgb(148, 148, 146);
}

button {
  background-color: dodgerblue;
  border: 0;
  border-radius: 5px;
  height: 2.2rem;
  color: white;
  width: 100%;
  margin: 1rem 0;
}

button:hover {
  background-color: rgb(7, 109, 210);
}

.singup-seperator {
  display: flex;
  align-items: baseline;
}

.singup-seperator span {
  margin: 0 0.5rem;
}
</style>
