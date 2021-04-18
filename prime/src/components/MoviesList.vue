<template>
    <img :src="imagem" alt="Capa do filme">
</template>

<script>



export default {

    name: 'MovieList',

    props: {
        
        imagem: {
            type: String
        },
       
    }

}
</script>

<style>



</style>