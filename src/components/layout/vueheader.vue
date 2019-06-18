<template>
 <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
  <a class="navbar-brand mr-auto mr-lg-0" href="/">Company</a>
  <button class="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item ">
        <a class="nav-link" href="/">Dashboard <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/SCG">SCG Page</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/search">Search Page</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/resume">Resume Page</router-link>
      </li>
    </ul>
  </div>
</nav>

</template>

<script>
export default {
  name: 'vueheader',
  data () {
    return {
      headermsg: 'Header'
    }
  }
}
</script>

