<template>
  <div>
    <section>
      <base-card>
        <h2>{{ selectedUser.username }}</h2>
        <h3>${{ selectedUser.rate }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <base-button>Contact</base-button>
        </header>
      </base-card>
    </section>
    <section>
      <base-card>
        <BaseBadge
          v-for="(category, index) in selectedUser.categories"
          :key="index"
          :className="category"
          >{{ category }}</BaseBadge
        >
        <p>{{ selectedUser.description }}</p>
      </base-card>
    </section>
  </div>
</template>

<script>
import BaseButton from '../ui-components/BaseButton.vue';
import BaseBadge from '../ui-components/BaseBadge.vue';
import BaseCard from '../ui-components/BaseCard.vue';
export default {
  props: ['id'],
  data() {
    return {};
  },
  components: { BaseButton, BaseBadge, BaseCard },
  computed: {
    selectedUser() {
      return this.$store.getters['coach/getAllCoaches'].find(
        (coach) => coach._id === this.id
      );
    },
  },
  //   computed: {
  //     fullName() {
  //       return this.selectedCoach.username;
  //     },
  //     areas() {
  //       return this.selectedCoach.categories;
  //     },
  //     rate() {
  //       return this.selectedCoach.rate;
  //     },
  //     description() {
  //       return this.selectedCoach.description;
  //     },
  //     contactLink() {
  //       return this.$route.path + '/' + this.id + '/contact';
  //     },
  //   },
  //   created() {
  //     this.selectedCoach = this.$store.getters['coaches/getAllCoaches'].find(
  //       (coach) => coach._id === this.id
  //     );
  //   },
};
</script>
