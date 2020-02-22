<template>
  <div class="people">
    <h1>Posts</h1>
    This file will list all the posts.

    <div v-for="person in people" v-bind:key="person.name">
      <p>
        <span><b>{{ person.name }}</b></span><br />
        <span>{{ person.location }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import peopleService from '@/services/peopleService';

export default {
  name: 'people',
  data() {
    return {
      people: []
    };
  },
  mounted() {
    this.getPeople();
  },
  methods: {
    async getPeople() {
      const response = await peopleService.fetchPeople();
      this.people = response.data;
    }
  }
};
</script>
