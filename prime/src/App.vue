<template lang="pt-br">

  <section class="movieArea">
      <h4 class="titles">Filmes e séries para assistir a seguir</h4>
        <div class="movies-list">
          <div class="movies-item" v-for="(movies, index) in movies_originals" :key="index">
            <MovieList :imagem="getImagem(movies.poster_path)"/>
          </div>
          <h4 class="titles">Amazon Originals e exclusivos</h4>
          <div class="movies-item" v-for="(movies, index) in movies_week" :key="'a'+index">
            <MovieList :imagem="getImagem(movies.poster_path)"/>
          </div>
          <h4 class="titles">Filmes recomendados</h4>
          <div class="movies-item" v-for="(movies, index) in movies_topRated" :key="'b'+index">
            <MovieList :imagem="getImagem(movies.poster_path)"/>
          </div>
          <h4 class="titles">Filmes de Ação</h4>
          <div class="movies-item" v-for="(movies, index) in movies_action" :key="'c'+index">
            <MovieList :imagem="getImagem(movies.poster_path)"/>
          </div>
          <h4 class="titles">Filmes de Comédia</h4>
          <div class="movies-item" v-for="(movies, index) in movies_comedy" :key="'d'+index">
            <MovieList :imagem="getImagem(movies.poster_path)"/>
          </div>
          <h4 class="titles">Filmes de Terror</h4>
          <div class="movies-item" v-for="(movies, index) in movies_terror" :key="'e'+index">
            <MovieList :imagem="getImagem(movies.poster_path)"/>
          </div>
          <h4 class="titles">Filmes de Documentário</h4>
          <div class="movies-item" v-for="(movies, index) in movies_documentary" :key="'f'+index">
            <MovieList :imagem="getImagem(movies.poster_path)"/>
          </div>
          <h4 class="titles">Filmes de Ficção</h4>
          <div class="movies-item" v-for="(movies, index) in movies_ficion" :key="'g'+index">
            <MovieList :imagem="getImagem(movies.poster_path)"/>
          </div>
          <h4 class="titles">Filmes de Romance</h4>
          <div class="movies-item" v-for="(movies, index) in movies_romance" :key="'h'+index">
            <MovieList :imagem="getImagem(movies.poster_path)"/>
          </div>
        </div>
      </div>
  </section>
</template>

<script>

import Tmdb from './API/Tmdb'
import MovieList from './components/MoviesList'  

export default {

  data(){
    return {
      movies_originals: [],
      movies_week: [],
      movies_topRated: [],
      movies_action: [],
      movies_comedy: [],
      movies_terror: [],
      movies_documentary: [],
      movies_ficion: [],
      movies_romance: []
    }
  },
  created(){
    Tmdb.getMovies('/discover/tv?with_network=213&language=pt-BR&api_key=', movies =>{ this.movies_originals = JSON.parse(JSON.stringify(movies.data.results)); 
    })
    Tmdb.getMovies('/trending/all/week?&language=pt-BR&api_key=', movies =>{ this.movies_week = JSON.parse(JSON.stringify(movies.data.results)); 
    })
    Tmdb.getMovies('/movie/top_rated?&language=pt-BR&api_key=', movies =>{ this.movies_topRated = JSON.parse(JSON.stringify(movies.data.results));   
    })
    Tmdb.getMovies('/discover/movie?with_genres=28&language=pt-BR&api_key=', movies =>{ this.movies_action = JSON.parse(JSON.stringify(movies.data.results)); 
    })
    Tmdb.getMovies('/discover/movie?with_genres=35&language=pt-BR&api_key=', movies =>{ this.movies_comedy = JSON.parse(JSON.stringify(movies.data.results));  
    })
    Tmdb.getMovies('/discover/movie?with_genres=27&language=pt-BR&api_key=', movies =>{ this.movies_terror = JSON.parse(JSON.stringify(movies.data.results));  
    })
    Tmdb.getMovies('/discover/movie?with_genres=99&language=pt-BR&api_key=', movies =>{ this.movies_documentary = JSON.parse(JSON.stringify(movies.data.results));  
    })
    Tmdb.getMovies('/discover/movie?with_genres=878&language=pt-BR&api_key=', movies =>{ this.movies_ficion = JSON.parse(JSON.stringify(movies.data.results));  
    })
    Tmdb.getMovies('/discover/movie?with_genres=10749&language=pt-BR&api_key=', movies =>{ this.movies_romance = JSON.parse(JSON.stringify(movies.data.results));  
    })
    },
    methods: {
      getImagem: function(movie) {
        return 'https://image.tmdb.org/t/p/w300' + movie;
  
      }
  },
  name: 'App',

  components: {
    MovieList
  },

}

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

*{
  box-sizing: border-box;
}

body{
  background-color: #293443;
  font-family: 'Open Sans', sans-serif;
  color: #fff;
  margin: 0;

}

.movieArea{
  
  overflow: hidden;
  padding-left: 30px;
  
}

.movies-list{
 
  width: 9999999px;

}
.movies-item{
  height: 150px;
  margin-top: -30px;
  width: 225px;
  display: inline-block;
  
}

.movies-item img{
  object-fit: cover;
  height: 100%;
  width: 100%;
  border: 2px solid transparent;
  border-radius: 5px;
  transform: scale(0.9);
}

.movies-item img:hover{
  transform: scale(1);
  transition: all ease 0.2s;
}

.titles{
  padding-left: 10px;
}

</style>
