import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

import { OptimizedPokemon } from '../interfaces/pokemon-optimized';
import { existPokemonInFavorites, toggleFavorites } from '../utils';

export const usePokemonComponent = (pokemon:OptimizedPokemon) => {

    const [ isInFavorites, setIsInFavorites ] = useState<boolean>(false);

    const onToggleFavorite = () => {
        toggleFavorites( pokemon.id );
        setIsInFavorites( existPokemonInFavorites(pokemon.id) );

        if ( isInFavorites ) return;

        confetti({
            zIndex:999,
            particleCount:100,
            spread:160,
            angle:-100,
            origin:{
                x:1,
                y:0
            }
        });

    }

    useEffect(() => {
        setIsInFavorites(existPokemonInFavorites(pokemon.id))
    }, [])

    return {
        isInFavorites,
        onToggleFavorite
    }
}
