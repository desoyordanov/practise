<template>
  <h2>Log in to your account</h2>
  <div class="secondary-title">Find the BEST coach!!!</div>

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
  <button @click="logIn">Log In</button>
  <div class="singup-seperator">
    <hr />
    <span>or use</span>
    <hr />
  </div>
  <GoogleLogin :callback="callback" />

  <!-- <v-facebook-login
    @login="fblogin"
    v-model="model"
    @sdk-init="handleSdkInit"
    app-id="421903083362869"
  ></v-facebook-login> -->
</template>

<script>
// import VFacebookLogin from 'vue-facebook-login-component-next';

export default {
  components: {
    // VFacebookLogin,
  },
  data() {
    return {
      FB: {},
      model: {},
      scope: {},
      isPassVisible: false,
      email: '',
      password: '',
      token: true,
      userData: '',
    };
  },

  methods: {
    fblogin(response) {
      console.log(response);
      const token = response.authResponse.accessToken;
      this.FB.api(
        '/me?fields=id,name,email',
        'get',
        { access_token: token },
        (response) => {
          console.log(response);
          this.$store.dispatch('logInWithFacebook', {
            email: response.email,
            accessToken: token,
            accountId: response.id,
          });
        }
      );
    },

    handleSdkInit({ FB, scope }) {
      this.FB = FB;
      this.scope = scope;
    },
    callback(response) {
      this.$store.dispatch('auth/logIn', {
        accessToken: response.credential,
        password: this.password,
        type: 'gg',
        email: '',
      });
    },
    togglePassVisibility() {
      this.isPassVisible = !this.isPassVisible;
    },
    logIn() {
      this.$store.dispatch('auth/logIn', {
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
  width: 100%;
  color: white;
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
