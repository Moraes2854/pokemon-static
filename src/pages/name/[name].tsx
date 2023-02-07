import { NextPage, GetStaticProps, GetStaticPaths } from 'next';


import { pokeApi } from '../../api';
import { PokemonListResponse } from '../../interfaces';
import { MainLayout } from '../../components/layouts';
import { PokemonComponent, PokemonComponentProps } from '../../components/pokemon/PokemonComponent';
import { getOptimizedPokemon } from '../../utils/getOptimizedPokemon';




const PokemonByNamePage:NextPage<PokemonComponentProps> = ({ pokemon }) => {



    return (
        <MainLayout title={ pokemon.name }>
           
           <PokemonComponent pokemon={pokemon} />

        </MainLayout>
    );
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

    const names:string[] = data.results.map( ({ name }) => name );

    return {
        paths: names.map( ( name ) => ({
            params : { name }
        })),
        fallback: "blocking"
    }
}


export const getStaticProps: GetStaticProps = async ( { params } ) => {

    const { name } = params as { name: string };

    const pokemon = await getOptimizedPokemon( name );

    if ( !pokemon ) {
        return {
            redirect:{
                destination:'/',
                permanent: false,
            }
        }
    }

    return {
      props: {
        pokemon
      },
      revalidate: 86400,
    }
}

export default PokemonByNamePage;