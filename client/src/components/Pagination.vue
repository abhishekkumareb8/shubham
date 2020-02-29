<template>
  <nav>
    <ul class="pagination">
      <li class="page-item" :class="{ 'disabled': (page -1 <= 0) }">
        <button type="button" class="page-link" @click="next(page - 1, sort, order)"> Previous </button>
      </li>
      <li class="page-item" v-for="pageNumber in totalPage" v-bind:key="pageNumber" :class="{ 'disabled active': page === pageNumber }" >
        <button type="button" class="page-link" @click.prevent="next(pageNumber, sort, order)"> {{pageNumber}} </button>
      </li>
      <li class="page-item" :class="{ 'disabled': page === totalPage }">
        <button type="button" class="page-link" @click="next(page + 1, sort, order)"> Next </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'pagination',
  props: {
    page: Number,
    totalPage: Number,
    sort: String,
    order: String
  },
  methods: {
    next(page, sort, order) {
      this.$emit('getPeople', { page, sort, order });
    }
  }
};
</script>
