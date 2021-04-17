<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="movies" v-for="(movies, index) in movies" :key="index">
       <div>{{movies}}</div>
    </div>
  </div>
</template>

<script>
import getHomeList from './API/Tmdb'
export default {
  data(){
    return {
      movies: []
    }
  },
  async mounted(){

    await getHomeList.getHomeList().then(res => { console.log(res) });
    console.log(this.movies)

   

  },
  name: 'App',
  components: {

  },

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
