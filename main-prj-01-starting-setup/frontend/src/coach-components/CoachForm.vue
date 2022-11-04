<template>
  <BaseCard>
    <div class="form-control">
      <h1>Register as a coach now!</h1>
      <ui-textfield class="test" v-model="firstname" :fullwidth="true"
        >Firstname</ui-textfield
      >
      <ui-textfield class="test" v-model="lastname" :fullwidth="true"
        >Lastname</ui-textfield
      >
      <ui-textfield
        v-model="description"
        class="test"
        :fullwidth="true"
        input-type="textarea"
        rows="5"
        cols="15"
        >Description</ui-textfield
      >
      <ui-textfield
        class="test"
        :fullwidth="true"
        input-type="number"
        v-model="rate"
        >Hourly Rate</ui-textfield
      >
      <div class="areas-of-expertise-container">
        <h3>Areas of Expertise</h3>
        <div class="checkbox-container">
          <ui-checkbox
            v-model="categories"
            input-id="frontend"
            value="frontend"
          ></ui-checkbox>
          <label for="frontend">Frontend</label>
          <ui-checkbox
            v-model="categories"
            input-id="backend"
            value="backend"
          ></ui-checkbox>
          <label for="backend">Backend</label>
          <ui-checkbox
            v-model="categories"
            input-id="career"
            value="career"
          ></ui-checkbox>
          <label for="career">Career</label>
        </div>
        <ui-fab class="new-button" @click="addCoach" extended>Create</ui-fab>
      </div>
      <!-- <h1>Register as a coach now!</h1>
      <label for="">Firstname</label>
      <input v-model="firstname" class="form-control" type="text" />
      <label for="">Lastname</label>
      <input v-model="lastname" class="form-control" type="text" />
      <label for="">Description</label>
      <textarea
        v-model="description"
        class="form-control"
        name=""
        id=""
        cols="15"
        rows="5"
      ></textarea>
      <label for="">Hourly Rate</label>
      <input v-model="rate" type="number" />
    </div>
    <h3>Areas of Expertise</h3>
    <input v-model="categories" value="frontend" type="checkbox" />
    <label for="">Frontend</label>
    <input v-model="categories" value="backend" type="checkbox" />
    <label for="">Backend</label>
    <input v-model="categories" value="career" type="checkbox" />
    <label for="">Career</label>
    <div class="form-control">
      <base-button @click="addCoach">Register</base-button> -->
    </div>
  </BaseCard>
</template>

<script>
// import BaseButton from './BaseButton.vue';
import BaseCard from '../ui-components/BaseCard.vue';

export default {
  data() {
    return {
      categories: [],
      firstname: '',
      lastname: '',
      description: '',
      rate: '',
    };
  },
  components: {
    BaseCard,
    // BaseButton,
  },
  methods: {
    addCoach() {
      this.$store.dispatch('coach/addCoach', {
        id: this.usrDetails.id,
        description: this.description,
        rate: this.rate,
        categories: this.categories,
      });
      this.$store.dispatch('auth/setUser', {
        ...this.usrDetails,
        isCoach: true,
      });
      this.$router.push('/allcoaches');
    },
  },
  computed: {
    usrDetails() {
      return this.$store.getters['auth/getUsrDetails'];
    },
  },
};
</script>

<!-- <style lang="sass" scoped>
.test {
  height: 500px;
  width: 500px;
}
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style> -->
<style scoped>
.new-button {
  width: 100%;
  background-color: purple;
}
.areas-of-expertise-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.checkbox-container {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}
.test {
  margin-bottom: 1rem;
}
</style>
