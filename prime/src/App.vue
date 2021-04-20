<template lang="pt-br">

  

  <section>

    <section :style="{
      'height': '8vh',
    }">
     
    </section>


    <section>
      <FeaturedMovie :imagem=" 'https://image.tmdb.org/t/p/original' + this.movies_originals[getRandom(this.movies_originals)].backdrop_path"/>
    </section>

    <section class="movieArea">
        <h4 class="titles">Filmes e séries para assistir a seguir</h4>
          <!-- <div class="movies-list"> -->
            <div class="movies-item">
              <div v-for="(movies, index) in movies_originals" :key="index">
                <div v-if="movies.title === undefined">
                  <MovieList 
                    :imagem="getImagem(movies.backdrop_path)" 
                    :overview="movies.overview"
                    :title="movies.name"
                  />
                </div>
                <div v-else>
                  <MovieList 
                    :imagem="getImagem(movies.backdrop_path)" 
                    :overview="movies.overview"
                    :title="movies.title"
                  />
                </div>
              </div>
          </div>
            <h4 class="titles">Amazon Originals e exclusivos</h4>
            <div class="movies-item">
              <div v-for="(movies, index) in movies_week" :key="'a'+index">
                <div v-if="movies.title === undefined">
                  <MovieList 
                    :imagem="getImagem(movies.backdrop_path)" 
                    :overview="movies.overview"
                    :title="movies.name"
                  />
                </div>
                <div v-else>
                  <MovieList 
                    :imagem="getImagem(movies.backdrop_path)" 
                    :overview="movies.overview"
                    :title="movies.title"
                  />
                </div>
              </div>
            </div>
            <h4 class="titles">Filmes recomendados</h4>
            <div class="movies-item">
              <div  v-for="(movies, index) in movies_topRated" :key="'b'+index">
                <div v-if="movies.title === undefined">
                  <MovieList 
                    :imagem="getImagem(movies.backdrop_path)" 
                    :overview="movies.overview"
                    :title="movies.name"
                  />
                </div>
                <div v-else>
                  <MovieList 
                    :imagem="getImagem(movies.backdrop_path)" 
                    :overview="movies.overview"
                    :title="movies.title"
                  />
                </div>
              </div>
            </div>
            <h4 class="titles">Filmes de Ação</h4>
            <div class="movies-item">
              <div v-for="(movies, index) in movies_action" :key="'c'+index">
                <div v-if="movies.title === undefined">
                  <div v-if="movies.title === undefined">
                    <MovieList 
                      :imagem="getImagem(movies.backdrop_path)" 
                      :overview="movies.overview"
                      :title="movies.name"
                    />
                  </div>
                  <div v-else>
                    <MovieList 
                      :imagem="getImagem(movies.backdrop_path)" 
                      :overview="movies.overview"
                      :title="movies.title"
                    />
                  </div>
                </div>
                <div v-else>
                <div v-if="movies.title === undefined">
                  <MovieList 
                    :imagem="getImagem(movies.backdrop_path)" 
                    :overview="movies.overview"
                    :title="movies.name"
                  />
                </div>
                <div v-else>
                  <MovieList 
                    :imagem="getImagem(movies.backdrop_path)" 
                    :overview="movies.overview"
                    :title="movies.title"
                  />
                </div>
                </div>
              </div>
            </div>
            <h4 class="titles">Filmes de Comédia</h4>
            <div class="movies-item">
              <div class="movies-item" v-for="(movies, index) in movies_comedy" :key="'d'+index">
                <div v-if="movies.title === undefined">
                  <MovieList 
                    :imagem="getImagem(movies.backdrop_path)" 
                    :overview="movies.overview"
                    :title="movies.name"
                  />
                </div>
                <div v-else>
                  <MovieList 
                    :imagem="getImagem(movies.backdrop_path)" 
                    :overview="movies.overview"
                    :title="movies.title"
                  />
                </div>
              </div>
            </div>
            <h4 class="titles">Filmes de Terror</h4>
            <div class="movies-item">
              <div v-for="(movies, index) in movies_terror" :key="'e'+index">
                <div v-if="movies.title === undefined">
                  <MovieList 
                    :imagem="getImagem(movies.backdrop_path)" 
                    :overview="movies.overview"
                    :title="movies.name"
                  />
                </div>
                <div v-else>
                  <MovieList 
                    :imagem="getImagem(movies.backdrop_path)" 
                    :overview="movies.overview"
                    :title="movies.title"
                  />
                </div>
              </div>
            </div>
            <h4 class="titles">Filmes de Documentário</h4>
            <div  class="movies-item">
              <div v-for="(movies, index) in movies_documentary" :key="'f'+index">
                <div v-if="movies.title === undefined">
                  <MovieList 
                    :imagem="getImagem(movies.backdrop_path)" 
                    :overview="movies.overview"
                    :title="movies.name"
                  />
                </div>
                <div v-else>
                  <MovieList 
                    :imagem="getImagem(movies.backdrop_path)" 
                    :overview="movies.overview"
                    :title="movies.title"
                  />
                </div>
              </div>
            </div>
            <h4 class="titles">Filmes de Ficção</h4>
            <div class="movies-item">
              <div v-for="(movies, index) in movies_ficion" :key="'g'+index">
                <div v-if="movies.title === undefined">
                  <MovieList 
                    :imagem="getImagem(movies.backdrop_path)" 
                    :overview="movies.overview"
                    :title="movies.name"
                  />
                </div>
                <div v-else>
                  <MovieList 
                    :imagem="getImagem(movies.backdrop_path)" 
                    :overview="movies.overview"
                    :title="movies.title"
                  />
                </div>
              </div>
            </div>
            <h4 class="titles">Filmes de Romance</h4>
            <div class="movies-item">
              <div v-for="(movies, index) in movies_romance" :key="'h'+index">
                <MovieList 
                  :imagem="getImagem(movies.backdrop_path)" 
                  :overview="movies.overview"
                  :title="movies.title"
                />
              </div>
            </div> 
          </div>
        </div>
    </section>
  </section>
</template>

<script>

import Tmdb from './API/Tmdb'
import MovieList from './components/MoviesList'  
import FeaturedMovie from './components/FeaturedMovie' 

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
      movies_romance: [],
      featured: []
      
    }
  },
  created(){
    Tmdb.getMovies('/discover/tv?with_network=213&language=pt-BR&api_key=', movies =>{ this.movies_originals = JSON.parse(JSON.stringify(movies.data.results)); 
    console.log(this.movies_originals)})
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
    Tmdb.getMovies('/discover/movie?with_genres=10749&language=pt-BR&api_key=', movies =>{ this.movies_romance = JSON.parse(JSON.stringify(movies.data.results))
    })
    
    },
    methods: {
      getImagem: function(movie) {
        
        return 'https://image.tmdb.org/t/p/w300' + movie;
        
  
      },
      getRandom: function(movies){
        console.log(Math.floor(Math.random() * (movies.length)));
        return Math.floor(Math.random() * (movies.length));
        
      }
      
  },
  name: 'App',

  components: {
    MovieList,
    FeaturedMovie
  },

}

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: none;
}

body{
  background-color: #13181f;
  font-family: 'Open Sans', sans-serif;
  overflow-x: hidden;
  color: #fff;
}
.movieArea {
  padding: 36px;
}
.movies-item{
  display: flex;
  height: 200px;
}

</style>
