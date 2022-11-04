<template>
  <BaseCard>
    <div class="filter-option">
      <h2>Find your coach</h2>
      <div class="checkbox-container">
        <ui-checkbox
          v-model="filters.frontend"
          input-id="frontend"
          value="frontend"
        ></ui-checkbox>
        <label for="frontend">Frontend</label>
        <ui-checkbox
          v-model="filters.backend"
          input-id="backend"
          value="backend"
        ></ui-checkbox>
        <label for="backend">Backend</label>
        <ui-checkbox
          v-model="filters.career"
          input-id="career"
          value="career"
        ></ui-checkbox>
        <label for="career">Career</label>
      </div>
      <!-- <input v-model="filters.frontend" type="checkbox" />
      <label for="">Frontend</label>
      <input v-model="filters.backend" type="checkbox" />
      <label for="">Backend</label>
      <input v-model="filters.career" type="checkbox" />
      <label for="">Career</label> -->
    </div>
  </BaseCard>
  <BaseCard class="card">
    <div class="coaches-header">
      <base-button className="outline">Refresh</base-button>
      <base-button @click="routeToAddCoach" v-show="!usrDetails.isCoach"
        >Register as Coach</base-button
      >
    </div>
    <ul>
      <li v-for="coach in allCoachesTest" :key="coach._id">
        <h3>{{ coach.username }}</h3>
        <h4>{{ coach.rate }}$ per hour</h4>
        <BaseBadge
          v-for="(category, index) in coach.categories"
          :key="index"
          :className="category"
          >{{ category }}</BaseBadge
        >

        <div class="actions">
          <base-button @click="routeToContact(coach._id)" className="outline"
            >Contacts</base-button
          >
          <base-button @click="routeToDetails(coach._id)"
            >View Details</base-button
          >
        </div>
      </li>
    </ul>
  </BaseCard>
</template>
<script>
import BaseButton from '../ui-components/BaseButton.vue';
import BaseBadge from '../ui-components/BaseBadge.vue';
import BaseCard from '../ui-components/BaseCard.vue';
import axios from 'axios';

export default {
  async created() {
    try {
      const response = await axios.get('/coaches/getall');
      console.log(response.data);
      this.coachList = response.data;
      this.$store.dispatch('coach/setCoaches', response.data);
    } catch (err) {
      console.log(err);
    }
  },
  components: { BaseButton, BaseBadge, BaseCard },
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      },
      coachList: [],
    };
  },
  methods: {
    routeToContact(id) {
      this.$router.push(`/allcoaches/${id}/contact`);
    },
    routeToDetails(id) {
      this.$router.push(`/allcoaches/${id}`);
    },
    routeToAddCoach() {
      this.$router.push('/addcoach');
    },
    categoryFilterFlag(categories) {
      let flag;
      categories.reduce((previousValue, currentValue) => {
        if (previousValue) {
          return;
        }
        if (this.filters[currentValue]) {
          previousValue = true;
          flag = true;
        }
      }, false);
      return flag;
    },
  },
  computed: {
    usrDetails() {
      return this.$store.getters['auth/getUsrDetails'];
    },
    allCoachesTest() {
      const filteredList = this.coachList.filter((coach) =>
        this.categoryFilterFlag(coach.categories)
      );
      return filteredList;
    },
    allCoaches() {
      return this.$store.getters['coach/getAllCoaches'];
    },
  },
};
</script>

<style scoped>
.checkbox-container {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}
.coaches-header {
  display: flex;
  justify-content: space-between;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}

li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}

.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}

h2 {
  margin: 0.5rem 0;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
  margin-right: 1rem;
}

input:checked + label {
  /* font-weight: bold; */
  text-shadow: 0 0 0.01px black, 0 0 0.01px black;
}
</style>
