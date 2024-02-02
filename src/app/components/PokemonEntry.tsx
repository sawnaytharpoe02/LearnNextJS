import React from 'react';
import usePokemon from '@/hooks/usePokemon';
import Link from 'next/link';
import Image from 'next/image';

const PokemonEntry = ({ name }: { name: string }) => {
  const { pokemon, pokemonLoading } = usePokemon(name);

  return (
    <Link href={'/pokemon/' + name}>
      {pokemonLoading && <div>................Loading...................</div>}
      {pokemon && (
        <div className="border border-cyan-100 p-2 rounded-xl">
          <h1>{pokemon?.name}</h1>
          <Image
            width={200}
            height={200}
            priority
            src={pokemon?.sprites.other['official-artwork'].front_default}
            alt={pokemon?.name}
          />
        </div>
      )}
    </Link>
  );
};

export default PokemonEntry;
