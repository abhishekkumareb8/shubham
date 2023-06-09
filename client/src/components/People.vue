<template>
  <div>
    <SearchFilter v-on:refreshPeople="refreshPeople" />
    <b-row class="people">
      <b-col class="loading text-center" v-if="loading">
        <div><b-spinner variant="primary" label="Spinning"></b-spinner></div>
      </b-col>
      <b-col v-else>
        <div v-if="total > 0">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th @click="sort('name', order === 'desc' ? 'asc' : 'desc')"><b-icon-arrow-up-down></b-icon-arrow-up-down> Name</th>
                  <th @click="sort('location', order === 'desc' ? 'asc' : 'desc')"><b-icon-arrow-up-down></b-icon-arrow-up-down> Location</th>
                  <th @click="sort('email', order === 'desc' ? 'asc' : 'desc')"><b-icon-arrow-up-down></b-icon-arrow-up-down> Email</th>
                  <th @click="sort('status', order === 'desc' ? 'asc' : 'desc')"><b-icon-arrow-up-down></b-icon-arrow-up-down> Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="person in people" v-bind:key="person.name">
                  <td>{{ person.name }}</td>
                  <td>{{ person.location }}</td>
                  <td>{{ person.email }}</td>
                  <td>{{ person.status }}</td>
                  <td class="align-right pr-0">
                    <b-button variant="primary" class="view-btn" v-b-modal.user @click="setPerson(person)">View</b-button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Pagination :page="this.page" :totalPage="this.totalPage" :sort="this.sortBy" :order="this.order" :filterParams="this.filterParams" v-on:getPeople="getPeople" />
        </div>
        <div class="no-results" v-else>
          No results found
        </div>
      </b-col>
    </b-row>
    <User :person="this.person" />
  </div>
</template>

<script>
import peopleService from '@/services/peopleService';
import SearchFilter from './SearchFilter';
import Pagination from './Pagination';
import User from './User';
import { BButton, BRow, BCol, BIconArrowUpDown, BSpinner } from 'bootstrap-vue';

export default {
  name: 'people',
  components: {
    SearchFilter,
    Pagination,
    User,
    'b-button': BButton,
    'b-row': BRow,
    'b-col': BCol,
    'b-icon-arrow-up-down': BIconArrowUpDown,
    'b-spinner': BSpinner
  },
  data() {
    return {
      people: [],
      total: 0,
      page: 0,
      per_page: 0,
      totalPage: 0,
      person: {},
      order: 'desc',
      sortBy: '',
      filterParams: {},
      loading: true
    };
  },
  mounted() {
    this.getPeople();
  },
  methods: {
    refreshPeople(response, params) {
      this.setData(response.data);
      this.filterParams = params;
    },
    async getPeople(params) {
      const response = await peopleService.searchPeople(params);
      this.setData(response.data);
      this.loading = false;
    },
    async sort(sort, order) {
      const params = { sort, order };
      const finalParams = { ...params, ...this.filterParams };
      const response = await peopleService.searchPeople(finalParams);
      this.setData(response.data);
      this.sortBy = sort;
      this.order = order;
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
    },
    setPerson(person) {
      this.person = person;
    }
  }
};
</script>
