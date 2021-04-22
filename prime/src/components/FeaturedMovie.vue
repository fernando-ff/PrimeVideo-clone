<template>

    <div class="featured">
       
        <vueper-slides fixed-height="true" arrows-outside bullets-outside slide-image-inside autoplay>
            <vueper-slide v-for="(slide, i) in slides" :key="i"  :image="slide.image"  />
        </vueper-slides>
        
      
    </div>

</template>

<script>
import 'vueperslides/dist/vueperslides.css'
import { VueperSlides, VueperSlide } from 'vueperslides'


export default {


    data(){
           
        return {
            slides: [
                {
                    image: 'https://image.tmdb.org/t/p/original/6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg'
                
                },
                {
                    image: 'https://image.tmdb.org/t/p/original/b0WmHGc8LHTdGCVzxRb3IBMur57.jpg'
                },
                {
                    image: 'https://image.tmdb.org/t/p/original/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg'
                },
                {
                    image: 'https://image.tmdb.org/t/p/original//88J6waYVTta8Qz3iX3qUeWNA5d5.jpg'
                },
                {
                    image: 'https://image.tmdb.org/t/p/original/uro2Khv7JxlzXtLb8tCIbRhkb9E.jpg'
                },
                {
                    image: 'https://image.tmdb.org/t/p/original/57vVjteucIF3bGnZj6PmaoJRScw.jpg'
                },
                {
                    image: 'https://image.tmdb.org/t/p/original/7prYzufdIOy1KCTZKVWpjBFqqNr.jpg'
                }
                
            ],
        }

        
    },
    
    mounted (){
        
    },

    methods: {
        getRandom: function(array){
            
        return Math.floor(Math.random() * (array.length));  
        
      },

      toObject: function(){

      }
      
    },

    name: 'FeaturedMovie',

    props: {
        
        imagem: {
            type: String

        },
        array: {
            type: Array
        }
    },
    
    components:{
        VueperSlides, VueperSlide
      
    },


}
</script>

<style>
.featured{
    height: 30vh;
    width: 100%;

    margin-left: 4.5vw;
    margin-bottom: 100px;
}



.vueperslides--fixed-height { height: 35vh; width: 90%;}

.vueperslide__image {
    object-fit: contain;
}


</style>