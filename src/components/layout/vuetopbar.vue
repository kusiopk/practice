<template>
<div class="row">
  <div class="col-md-12 nav-scroller bg-white shadow-sm">
    <nav class="nav nav-underline">
      <a class="nav-link active" href="javascript:void(0)">Dashboard</a>
      <a class="nav-link" href="javascript:void(0)">
        Friends
        <span class="badge badge-pill bg-light align-text-bottom">27</span>
      </a>
      <a class="nav-link" href="javascript:void(0)">Explore</a>
      <a class="nav-link" href="javascript:void(0)">Suggestions</a>
    </nav>
  </div>
</div>
</template>

<script>
export default {
  name: 'vuetopbar',
  data () {
    return {
      topbarmsg: 'Top Bar'
    }
  }
}
</script>
