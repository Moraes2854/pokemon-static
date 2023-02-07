import { NextPage, GetStaticProps, GetStaticPaths } from 'next';

import { MainLayout } from '../../components/layouts';
import { PokemonComponent, PokemonComponentProps } from '../../components/pokemon/PokemonComponent';
import { getOptimizedPokemon } from '../../utils/getOptimizedPokemon';


const PokemonPageById:NextPage<PokemonComponentProps> = ({ pokemon }) => {

    return (
        <MainLayout title={ pokemon.name }>
            
            <PokemonComponent pokemon={pokemon}/>

        </MainLayout>
    );

}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const pokemons151 = [...Array(151)].map( (value, index) => `${ index + 1 }`);

    return {
        paths: pokemons151.map( ( id ) => ({
            params : { id }
        })),
        fallback: "blocking"
    }
}


export const getStaticProps: GetStaticProps = async ( { params } ) => {
    const { id } = params as { id: string };

    const pokemon = await getOptimizedPokemon( id );

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


export default PokemonPageById;