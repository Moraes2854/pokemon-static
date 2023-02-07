
import { useState, useEffect } from 'react';

import { FavoritesListPokemon } from '../../components/pokemon';
import { MainLayout } from '../../components/layouts/MainLayout';
import { NoFavorites } from '../../components/ui';
import { getPokemonsIdsInFavorites } from '../../utils/localFavorites';

const FavoritesPage = () => {

  const [ favoritePokemons, setFavoritePokemons ] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons( getPokemonsIdsInFavorites() )
  }, [])
  

  return (
    <MainLayout title='Pokémones fávoritos'>

      {
        ( favoritePokemons.length === 0 )
        ? ( <NoFavorites/> )
        : ( <FavoritesListPokemon pokemons={favoritePokemons}/>)
      }
      
    </MainLayout>
  )
}

export default FavoritesPage;
