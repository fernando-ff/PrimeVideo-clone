<template lang="pt-br">
  <section>
    <CardList 
      sectionTitle="Amazon Orignals"
      :movies="movies_originals"
    />
    <CardList 
      sectionTitle="Filmes da Semana"
      :movies="movies_week"
    />
    <CardList
      sectionTitle="Top filmes"
      :movies="movies_topRated"
    />
    <CardList 
      sectionTitle="Filmes de ação"
      :movies="movies_action"
    />
    <CardList 
      sectionTitle="Filmes de comédia"
      :movies="movies_comedy"
    />
    <CardList 
      sectionTitle="Filmes de terror"
      :movies="movies_terror"
    />
    <CardList 
      sectionTitle="Documentários"
      :movies="movies_documentary"
    />
    <CardList 
      sectionTitle="Filmes de Ficção"
      :movies="movies_ficion"
    />
    <CardList 
      sectionTitle="Filmes de Romance"
      :movies="movies_romance"
    />
  </section>
</template>
<script>
import Tmdb from '../API/Tmdb';
import CardList from './shared/cardList/CardList';
export default {
  name: 'MovieList',
  components: {
    CardList,
  },
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
    console.log(movies.data.results)})
    Tmdb.getMovies('/trending/all/week?&language=pt-BR&api_key=', movies =>{ this.movies_week = JSON.parse(JSON.stringify(movies.data.results)); 
    console.log(movies.data.results)})
    Tmdb.getMovies('/movie/top_rated?&language=pt-BR&api_key=', movies =>{ this.movies_topRated = JSON.parse(JSON.stringify(movies.data.results));   
    console.log(movies.data.results)})
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
}
</script>

<style scoped>
  section {
    margin-left: 48px;
    margin-top: 26px;
  }
</style>
