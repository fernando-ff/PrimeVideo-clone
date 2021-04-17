import axios from 'axios';

const API_KEY = "e4357e1610a457171f291ea6688a5cb9";
const API_BASE = "https://api.themoviedb.org/3";


const basicFetch = async (endpoint) => {
    const response = await axios.get(`${API_BASE}${endpoint}`);
    return JSON.parse(JSON.stringify(response.data.results));
}

export default {
    
    getHomeList: async ()=> {
        return [
            {
                slug: 'originals',
                title: 'Amazon Originals e exclusivos',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            
            }
        ]   
    }

}