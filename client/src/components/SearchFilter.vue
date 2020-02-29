<template>
  <b-row class="mt-3 mb-3">
    <b-col><b-form-input id="search" v-on:keyup="onKeyUp" v-model="searchText" placeholder="Search users" trim></b-form-input></b-col>
    <b-col cols="12" md="auto"><b-form-select v-model="filter" :options="filterOptions"></b-form-select></b-col>
    <b-col col lg="1"><b-button variant="success" @click="onChange()">Filter</b-button></b-col>
  </b-row>
</template>

<script>
import peopleService from '@/services/peopleService';

export default {
  name: 'searchfilter',
  data() {
    return {
      searchText: '',
      filter: '',
      filterOptions: [
        { value: '', text: 'Select an option' },
        { value: 'name', text: 'Name' },
        { value: 'location', text: 'Location' },
        { value: 'email', text: 'Email' },
        { value: 'status', text: 'Status' }
      ]
    };
  },
  methods: {
    onKeyUp: function(e) {
      if (e.keyCode === 13) {
        this.onChange();
      } 
    },
    async onChange() {
      const params = {};
      params[this.filter || 'any'] = this.searchText;
      const response = await peopleService.searchPeople(params);
      this.$emit('refreshPeople', response);
    }
  }
};
</script>
