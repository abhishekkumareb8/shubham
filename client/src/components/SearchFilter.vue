<template>
  <b-container class="filter-search" fluid>
    <b-row>
      <b-col cols="2">
        <input type="text" id="search" v-model="searchText" placeholder="Search users"/>
      </b-col>
      <b-col cols="1">
        <select v-model="filter" >
          <option value=''>Select filter</option>
          <option value='name'>Name</option>
          <option value='location'>Location</option>
          <option value='email'>Email</option>
          <option value='status'>Status</option>
        </select>
      </b-col>
      <b-col cols="2">
        <button type="button" class="page-link" @click="onChange()"> Filter </button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import peopleService from '@/services/peopleService';

export default {
  name: 'searchfilter',
  data() {
    return {
      searchText: '',
      filter: ''
    };
  },
  methods: {
    async onChange() {
      const params = {};
      params[this.filter] = this.searchText;
      const response = await peopleService.searchPeople(params);
      this.$emit('refreshPeople', response);
    }
  }
};
</script>
