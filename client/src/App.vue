<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark header pl-5">
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="/">People <span class="sr-only">(current)</span></a>
        </div>
      </div>
    </nav>
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
