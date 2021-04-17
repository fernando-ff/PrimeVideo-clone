<template>
   <div id="app">
    
    <div class="movies">
       <div>{{titulo}}</div>
       <div>{{descricao}}</div>
    </div>
  </div>
</template>

<script>



export default {

    name: 'MovieList',

    props: {

        titulo:{    
            type: String,
            required: true,

        },
        descricao: {
            type: String,
        }
    }

}
</script>

<style>

</style>