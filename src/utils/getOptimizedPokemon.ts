import { OptimizedPokemon, Pokemon } from '../interfaces';
import pokeApi from '../api/pokeApi';

export const getOptimizedPokemon= async( nameOrId: string ):Promise<OptimizedPokemon> => {

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ nameOrId }`);

    const pokemon:OptimizedPokemon = {
        id:data.id,
        name:data.name,
        sprites: data.sprites
    }

    return pokemon;
} 