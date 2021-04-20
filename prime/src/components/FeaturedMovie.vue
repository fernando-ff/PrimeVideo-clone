<template>
  <section class="featured" :style="{
    'background-size': 'cover', 
    'background-position':'center',
    'background-image': `url(${imagem})`}">



aaaaaaaaaaaa
  </section>
</template>

<script>
export default {
    name: 'FeaturedMovie',

    props: {
        
        imagem: {
            type: String

        }
    }

}
</script>

<style>
.featured{
    height: 30vh;
    width: 86vw;

    margin-left: 6vw;
}
</style>