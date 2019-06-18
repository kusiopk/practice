<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 margin-top100">
        <div class="row">
          <div class="col-md-8 margin-bottom50 text-center">
            <h2>Filter Function</h2>
             <form class="form-inline my-2 my-lg-0">
              <input class="form-control form-scg" type="text" placeholder="Please type your data" aria-label="Search" v-model="searchTextNumber">
            </form>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8">
            <ul class="list-group">
            <li class="list-group-item" v-for="item in filteredTextNumber" :key="item.id">
              {{item.title}}
            </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Vuescg',
  data() {
    return {
      title: '',
      searchTextNumber:'',
      textNumber:[
        {title:"3",description:"3"},
        {title:"5",description:"5"},
        {title:"9",description:"9"},
        {title:"15",description:"15"},
        {title:"X",description:"X"},
        {title:"Y",description:"Y"},
        {title:"Z",description:"Z"}
      ]
    }
  },
  computed: {
    filteredTextNumber (){
      if(this.searchTextNumber){
      return this.textNumber.filter((item)=>{
        return item.title.startsWith(this.searchTextNumber);
      })
      }else{
        return this.textNumber;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.margin-top100 {
  margin-top: 50px;
  min-height: 680px;
}
.margin-bottom50 {
  margin-bottom: 20px;
}
.form-scg {
  width: 100%;
}
</style>
