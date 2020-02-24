<template>
  <div class="people p-5">
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
          <td>
          </td>
        </tr>
      </tbody>
    </table>

     <Modal btnText="Press me, senpai 😊"
            :closeBtn="true"
            closeBtnContent="<span>X</span>"
    >
      <ExampleComponent/>
    </Modal>

    <!-- <b-button v-b-modal.modal-1>Launch demo modal</b-button>
    <b-modal id="modal-1" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
    </b-modal> -->

    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{ 'disabled': (page -1 <= 0) }">
          <button type="button" class="page-link" @click="next(page - 1)"> Previous </button>
        </li>
        <li class="page-item" v-for="pageNumber in totalPage" v-bind:key="pageNumber" :class="{ 'active': page === pageNumber }">
          <button type="button" class="page-link" @click.prevent="next(pageNumber)"> {{pageNumber}} </button>
        </li>
        <li class="page-item" :class="{ 'disabled': page === totalPage }">
          <button type="button" class="page-link" @click="next(page + 1)"> Next </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import peopleService from '@/services/peopleService';
import Modal from '@melmacaluso/vue-modal';
import ExampleComponent from './ExampleComponent';

export default {
  name: 'people',
  data() {
    return {
      people: [],
      total: 1,
      page: 0,
      per_page: 0,
      totalPage: 0
    };
  },
  mounted() {
    this.getPeople();
  },
  components: {
    ExampleComponent
  },
  methods: {
    async getPeople(page = 1) {
      const response = await peopleService.fetchPeople(page);
      this.people = response.data.people;
      this.total = response.data.meta.total;
      this.page = response.data.meta.page;
      this.per_page = response.data.meta.per_page;
      this.totalPage = Math.ceil(this.total / this.per_page);
    },
    next(page) {
      this.getPeople(page);
    }
  }
};
</script>
