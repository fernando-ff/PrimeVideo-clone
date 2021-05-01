<template>
    <div class="featured">
        <vueper-slides infinite="true" fixed-height="true"  slide-image-inside autoplay>
            <vueper-slide v-for="(slide, i) in slides" :key="i"  :image="slide.image"  />
        </vueper-slides>
    </div>
</template>
<script>
import 'vueperslides/dist/vueperslides.css'
import { VueperSlides, VueperSlide } from 'vueperslides'
export default {
    name: 'FeaturedMovie',
    components:{
        VueperSlides, VueperSlide
    },
    props: {
        imagem: {
            type: String
        },
        array: {
            type: Array
        }
    },
    data(){    
        return {
            slides: [
                {
                    image: 'https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_HorizonLine/be6726a9-620b-468d-88c4-01a7df2cd7d2._UR3000,600_SX1500_FMjpg_.jpeg'
                
                },
                {
                    image: 'https://m.media-amazon.com/images/G/01/digital/video/sonata/svod_row_sh_knivesout/005b9bed-8ea0-4036-a160-6376a1e4e8d2._UR3000,600_SX1500_FMjpg_.jpg'
                },
                {
                    image: 'https://m.media-amazon.com/images/S/sonata-images-prod/CROW_BR_Paramount_BabyDriver/f12bef91-b6c8-4bce-b621-73864b1a8e2b._UR3000,600_SX1500_FMjpg_.jpeg'
                },
                {
                    image: 'https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_Ma/fe624676-a7fd-44df-b2c1-7564aef07536._UR3000,600_SX1500_FMjpg_.jpg'
                },
                {
                    image: 'https://m.media-amazon.com/images/S/sonata-images-prod/CROW_BR_Starzplay_Multititle_DHATLWH/f4014c49-8076-41a9-867e-35952550592f._UR3000,600_SX1500_FMjpg_.jpg'
                },
                {
                    image: 'https://m.media-amazon.com/images/G/01/digital/video/sonata/gl2_downsizing/32297523-63d5-4ef7-9e5e-7d84cf8f7138._UR3000,600_SX1500_FMjpg_.jpg'
                },
                {
                    image: 'https://m.media-amazon.com/images/S/sonata-images-prod/CROW_BR_Starzplay_TheStand/a539f5b0-ca08-473c-8240-9e96dfdd819d._UR3000,600_SX1500_FMjpg_.jpg'
                }
                
            ],
        }
    },
    methods: {
        getRandom(array){  
        return Math.floor(Math.random() * (array.length));  
      }, 
    },
}
</script>

<style scoped>
.featured{
    margin-top: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.vueperslides--fixed-height { 
    height: 35vh;
     width: 100%;
}
.vueperslide__image {
    object-fit: contain;
}
</style>