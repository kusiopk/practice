<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 margin-top100">
        <section class="jumbotron text-center">
          <div class="container">
            <h1 class="jumbotron-heading">SCG</h1>
            <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
            <p>
              <router-link class="btn btn-lg btn-primary my-2" to="/search">Search Page</router-link>
              <router-link class="btn btn-lg btn-secondary my-2" to="/resume">Resume Page</router-link>
            </p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Vueindex',
  data () {
    return {
      indexmsg: 'vue index'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.margin-top100 {
  margin-top: 50px;
  min-height: 680px;
}
.margin-bottom50 {
  margin-bottom: 20px;
}
</style>
