<template>
        <div class="container">
            <div class="prime-logo-container">    
                <div class="prime-logo">
                    <div>
                        <b>prime</b>
                    </div>
                </div>
            </div>
            <div class="container-img">
                <img :src="imagem" alt="Capa do filme">
            </div>
            <div class="container-overview">
                <p>{{ overview }}</p>
            </div>
        </div>
</template>

<script>
export default {

    name: 'MovieList',

    props: {
        
        imagem: {
            type: String
        },
        overview:{
            type:String
        }
    },



}
</script>

<style scoped>
    .container{
        overflow: hidden;
        position: relative;
        
        width: 327px;
        
        margin: 0 4px;
        
        border-radius: 4px;
        transition: ease 0.1s;
        z-index: 1;
    }
    .container:hover{
        transform: scale(1.08);
        border: solid blue;
        z-index: 50;
    }
    .prime-logo-container{
        position: absolute;
        left: 0;
        top: -4px;

        width: 60px;
        height: 26px;

        background: black;

        border-bottom-right-radius: 16px;
        border-top-right-radius: 16px;

        display: flex;
        justify-content: center;
        align-items: center;


        overflow: hidden;
    }
    .prime-logo {
        position: relative;
        background: blue;
        color: black;
        width: 100%;
        height: 18px;
       
        border-bottom-right-radius: 16px;
        border-top-right-radius: 16px;
        
        margin-left: -8px;
        
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 12px;
        font-weight: bold;
    }
    .container-img {
        width: 100%;
        height: 183px;
    }
    .container-img img{
       width: 100%; 
       height: 100%;
    }
    .container-overview{
        display: none;
    }
    .container:hover .container-overview {
        display: block;
        width: 100%;
        padding: 8px;
        font-size: 14px;
        background: #293443;
    }



</style>