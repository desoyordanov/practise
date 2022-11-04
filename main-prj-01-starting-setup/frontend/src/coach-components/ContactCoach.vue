<template>
  <BaseCard>
    <h1>Send message now!</h1>
    <ui-textfield class="test" v-model="email" :fullwidth="true"
      >Email</ui-textfield
    >
    <ui-textfield
      class="test"
      v-model="message"
      :fullwidth="true"
      input-type="textarea"
      rows="5"
      cols="15"
      >Description</ui-textfield
    >
    <ui-fab class="new-button" @click="sendMessage" extended
      >Send Message</ui-fab
    >
  </BaseCard>
</template>

<script>
import BaseCard from '../ui-components/BaseCard.vue';
export default {
  components: { BaseCard },
  props: ['id'],
  data() {
    return {
      email: '',
      message: '',
    };
  },
  methods: {
    sendMessage() {
      const newList = this.requestList;
      newList.push({ email: this.email, message: this.message });
      this.$store.dispatch('coach/sendRequest', {
        id: this.id,
        requests: newList,
      });
      this.$store.dispatch('auth/getMe', this.usrId._id);
      this.$router.push('/allcoaches');
    },
  },
  computed: {
    requestList() {
      return this.$store.getters['coach/getAllCoaches'].find(
        (coach) => coach._id === this.id
      ).requests;
    },
    usrId() {
      return this.$store.getters['auth/getUsrDetails'];
    },
  },
};
</script>

<style scoped>
.test {
  margin-bottom: 1rem;
}
.new-button {
  margin-top: 1rem;
  width: 100%;
  background-color: purple;
}
</style>
