<template lang="pt-br">
  <section>
    <Header/>
    <FeaturedMovie :imagem=" 'https://image.tmdb.org/t/p/original' " :array="movies_originals"/>
    <MovieList />
  </section>
</template>

<script>
import MovieList from './components/MovieList';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
export default {
  name: 'App',
  components: {
    Header,
    MovieList,
    FeaturedMovie,
  },
}
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap');
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: none;
}

body{
  background-color: #0f171e;
  font-family: 'Source Sans Pro', sans-serif;
  overflow-x: hidden;
  color: #fff;
}
</style>