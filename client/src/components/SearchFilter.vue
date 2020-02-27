<template>
  <div class="filter-search">
    <input type="text" id="search" v-model="searchText" placeholder="Search users"/>
    <select @change="onChange($event)">
      <option value=''>Filter</option>
      <option value='name'>Name</option>
      <option value='location'>Location</option>
      <option value='email'>Email</option>
      <option value='status'>Status</option>
    </select>
  </div>
</template>

<script>
import peopleService from '@/services/peopleService';

export default {
  name: 'searchfilter',
  data() {
    return {
      searchText: ''
    };
  },
  methods: {
    async onChange(evt) {
      const params = { value: this.searchText, filter: evt.target.value };
      const response = await peopleService.searchPeople(params);
      this.$emit('refreshPeople', response);
    }
  }
};
</script>
