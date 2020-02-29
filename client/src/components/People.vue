<template>
  <div>
    <SearchFilter v-on:refreshPeople="refreshPeople" />

    <b-row>
      <b-col v-if="total > 0">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Email</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="person in people" v-bind:key="person.name">
                <td>{{ person.name }}</td>
                <td>{{ person.location }}</td>
                <td>{{ person.email }}</td>
                <td>{{ person.status }}</td>
                <td class="align-right">
                  <b-button variant="primary" @click="toggleModal(person)">View</b-button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Pagination :page="this.page" :totalPage="this.totalPage" v-on:getPeople="getPeople" />
      </b-col>
      <b-col v-else>
        No results found
      </b-col>
    </b-row>

    <User/>
  </div>
</template>

<script>
import peopleService from '@/services/peopleService';
import SearchFilter from './SearchFilter';
import Pagination from './Pagination';
import User from './User';

export default {
  name: 'people',
  components: {
    SearchFilter,
    Pagination,
    User
  },
  data() {
    return {
      people: [],
      total: 0,
      page: 0,
      per_page: 0,
      totalPage: 0,
      person: {}
    };
  },
  mounted() {
    this.getPeople();
  },
  methods: {
    refreshPeople(response) {
      this.setData(response.data);
    },
    async getPeople(page = 1) {
      const response = await peopleService.fetchPeople(page);
      this.setData(response.data);
    },
    setData(data) {
      this.people = data.people;
      this.total = data.meta.total;
      this.page = data.meta.page;
      this.per_page = data.meta.per_page;
      this.totalPage = Math.ceil(this.total / this.per_page);
    },
    toggleModal(person) {
      this.$modal.show('user', person);
    }
  }
};
</script>
