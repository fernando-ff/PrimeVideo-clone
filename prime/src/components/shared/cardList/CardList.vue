<template>
    <div class="card-list-container">
        <h3 class="card-list-title">{{ sectionTitle }}</h3>
        <div class="card-list">
            <div 
                v-for="(movie, index) in movies" 
                :key="index"
            >
                <div v-if="movie.title === undefined">
                    <Card 
                        :imagem="getImagem(movie.poster_path)" 
                        :overview="movie.overview"
                        :title="movie.name"
                    />
                </div>
                <div v-else>
                    <Card 
                        :imagem="getImagem(movie.poster_path)" 
                        :overview="movie.overview"
                        :title="movie.title"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Card from '../card/Card';
export default {
    name:"CardList",
    props:{
        sectionTitle:{
            type: String,
            required:true,
        },
        movies:{
            type:Array,
            required:true,
        }
    },
    components:{
        Card
    },
    methods: {
      getImagem: function(movie) { 
        return 'https://image.tmdb.org/t/p/w300' + movie; 
      },
    }
}
</script>
<style scoped>
    .card-list-container{ 
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 18px;
    }
    .card-list-title {
        width: 100%;
        margin-bottom: 2px;
        margin-left: 5px;
    }
    .card-list {
        display: flex;
        max-height: 188px;
    }
</style>