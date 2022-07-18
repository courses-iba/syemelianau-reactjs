import axios from '../axios';

const getPokemon = async () => {
    return await axios.get('/BrunnerLivio/PokemonDataGraber/master/output.json');
};

export {
    getPokemon
};
