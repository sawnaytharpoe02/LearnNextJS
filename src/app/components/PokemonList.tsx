'use client';

import React from 'react';
import useSWR from 'swr';
import * as PokemonApi from '../../network/pokemon-api';
import PokemonEntry from './PokemonEntry';
import { useRouter } from 'next/navigation';
// const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const PokemonList = ({ page }: { page: string }) => {
  // await wait(1000);

  const router = useRouter();

  const handlePreviousPage = () => {
    router.push(`?page=${parseInt(page) - 1}`);
  }

  const handleNextPage = () => {
    router.push(`?page=${parseInt(page) + 1}`);
  };

  const parsedPage = parseInt(page?.toString() || '1');

  const { data, isLoading } = useSWR(['getPokemonPage', page], () =>
    PokemonApi.getPokemonPage(parsedPage)
  );

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="flex flex-wrap gap-4">
      {data?.results.map((pokemon) => (
        <PokemonEntry key={pokemon.name} name={pokemon.name} />
      ))}

      <div className="flex gap-4 justify-center">
        {data?.previous && (
          <button onClick={handlePreviousPage}>Previous paage</button>
        )}
        {data?.next && <button onClick={handleNextPage}>Next Page</button>}
      </div>
    </div>
  );
};

export default PokemonList;
