import axios from '../axios';

const getPokemons = async () => {
    return await axios.get('/BrunnerLivio/PokemonDataGraber/master/output.json');
};

export {
    getPokemons
};
