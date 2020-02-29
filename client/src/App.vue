<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="primary">
        <b-navbar-brand href="#">People</b-navbar-brand>
      </b-navbar>
    </div>
    <b-container fluid="sm">
      <router-view/>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>
