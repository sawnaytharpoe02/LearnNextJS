'use client';

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import usePokemon from '@/hooks/usePokemon';

const PokemonDetail = ({ pokemon }: { pokemon: string }) => {
  const pokemonName = pokemon?.toString() || '';
  const { pokemon: PokemonDetail, pokemonLoading } = usePokemon(pokemonName);

  return (
    <>
      <Head>
        {PokemonDetail && (
          <title>{`${PokemonDetail.name}`} - NextJS Pokedex</title>
        )}
      </Head>
      <div>
        <Link href="/pokemon">Back Home</Link>
        {pokemonLoading && (
          <div className="m-6">................Loading...................</div>
        )}

        {PokemonDetail === null && <p>Pokemon Not Found .....</p>}

        {PokemonDetail && (
          <div>
            <h1>{PokemonDetail.name}</h1>
            <Image
              src={
                PokemonDetail.sprites.other['official-artwork'].front_default
              }
              alt={'pokemon : ' + PokemonDetail.name}
              width={400}
              height={400}
            />

            <div>
              <div>
                Types: {PokemonDetail.types.map((t) => t.type.name).join(', ')}
              </div>
              <p> Weight: {PokemonDetail.weight * 10 + 'kg'} </p>
              <p> Height: {PokemonDetail.height * 10 + 'cm'} </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PokemonDetail;
