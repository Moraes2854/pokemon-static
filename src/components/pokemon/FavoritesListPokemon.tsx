import { FC } from 'react';
import { Grid } from '@nextui-org/react';
import { FavoriteCardPokemon } from './';

interface FavoritesListPokemonProps {
    pokemons:number[];
}

export const FavoritesListPokemon:FC<FavoritesListPokemonProps> = ({ pokemons }) => {
  return (
    <Grid.Container gap={ 2 } direction='row' justify='flex-start'>
        {
            pokemons.map( ( id ) => <FavoriteCardPokemon id={ id } /> )
        }
    </Grid.Container>
  )
}
