import axios from 'axios';

const API_KEY = "e4357e1610a457171f291ea6688a5cb9";
const API_BASE = "https://api.themoviedb.org/3";



export default {
    getMovies: async (url, callback) => {
        const urlMovies = API_BASE + url + API_KEY ;
        axios.get(urlMovies).then((res) => {
            if(callback){
                callback(JSON.parse(JSON.stringify(res)) );
            }
        })
    }
}