<template>
  <nav>
    <ul class="pagination">
      <li class="page-item" :class="{ 'disabled': (page -1 <= 0) }">
        <button type="button" class="page-link" @click="next(page - 1)"> Previous </button>
      </li>
      <li class="page-item" v-for="pageNumber in totalPage" v-bind:key="pageNumber" :class="{ 'disabled active': page === pageNumber }" >
        <button type="button" class="page-link" @click.prevent="next(pageNumber)"> {{pageNumber}} </button>
      </li>
      <li class="page-item" :class="{ 'disabled': page === totalPage }">
        <button type="button" class="page-link" @click="next(page + 1)"> Next </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'pagination',
  props: {
    page: Number,
    totalPage: Number
  },
  methods: {
    next(page) {
      this.$emit('getPeople', page);
    }
  }
};
</script>
