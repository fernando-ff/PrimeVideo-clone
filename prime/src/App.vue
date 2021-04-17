<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">

    <div class="" v-for="movies, key in movies" :key="key">
      <MovieList :titulo="movies.name" :descricao="movies.overview"/>
    </div>
    
  </div>
</template>

<script>

import Tmdb from './API/Tmdb'
import MovieList from './components/MoviesList'  

export default {

  data(){
    return {
      movies: []
    }
  },
  created(){
    Tmdb.getAllMovies('/discover/tv?with_network=213&language=pt-BR&api_key=', movies =>{
      this.movies = JSON.parse(JSON.stringify(movies.data.results)); 
      console.log( this.movies);
    })
  },
  name: 'App',

  components: {
    MovieList
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
