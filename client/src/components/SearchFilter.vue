<template>
  <div class="search">
    <b-row>
      <b-col class="mt-3 mb-3">
        <b-input-group>
          <template v-slot:prepend>
            <b-input-group-text ><b-icon-search></b-icon-search></b-input-group-text>
          </template>
          <b-form-input id="search" class="filterDropdown" v-on:keyup="onSearchKeyUp" v-model="searchText" placeholder="Search users" @focus="$event.target.select()" trim></b-form-input>
        </b-input-group>
      </b-col>
      <b-col class="mt-3 mb-3" cols="12" md="auto"><b-form-select v-model="filter" :options="filterOptions"></b-form-select></b-col>
      <b-col class="mt-3 mb-3" col lg="1"><b-button variant="primary" class="filterBtn" @click="onChange()">Filter</b-button></b-col>
    </b-row>
  </div>
</template>

<script>
import { BRow, BCol, BInputGroup, BInputGroupText, BFormInput, BButton, BFormSelect } from 'bootstrap-vue';
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
  components: {
    'b-row': BRow,
    'b-col': BCol,
    'b-input-group': BInputGroup,
    'b-input-group-text': BInputGroupText,
    'b-form-input': BFormInput,
    'b-button': BButton,
    'b-form-select': BFormSelect
  },
  methods: {
    onSearchKeyUp(e) {
      if (e.keyCode === 13) {
        this.onChange();
      }
    },
    async onChange() {
      const params = {};
      params[this.filter || 'any'] = this.searchText;
      const response = await peopleService.searchPeople(params);
      this.$emit('refreshPeople', response, params);
    }
  }
};
</script>
