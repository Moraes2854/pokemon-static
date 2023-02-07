import { NextPage, GetStaticProps } from 'next';
import { Grid } from '@nextui-org/react';

import { pokeApi } from '../api';
import { MainLayout } from '../components/layouts';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { PokemonCard } from '../components/pokemon';

interface HomePageProps {
  pokemons:SmallPokemon[];
}

const HomePage: NextPage<HomePageProps> = ( { pokemons } ) => {
  return (
    <MainLayout>

      <Grid.Container gap={ 2 } justify='flex-start'>
        
        {
          pokemons.map((pokemon) => <PokemonCard pokemon={ pokemon } key={`PokemonCard${ pokemon.id }`} />)
        }

      </Grid.Container>

    </MainLayout>
  )
}


export const getStaticProps: GetStaticProps = async ( ctx ) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  const pokemons:SmallPokemon[] = data.results.map(( pokemon, i ) => ({
    ...pokemon,
    id:i+1,
    img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg`,
  }))

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage;
