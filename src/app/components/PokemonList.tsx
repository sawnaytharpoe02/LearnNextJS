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
  const parsedPage = parseInt(page?.toString() || '1');

  const { data, isLoading } = useSWR(['getPokemonPage', page], () =>
    PokemonApi.getPokemonPage(parsedPage)
  );

  // const handleClickPrevious = () => {
  //   router.push({ query: { ...router.query page: parsedPage - 1} });
  // };

  // const handleClickNext = () => {
  //   router.push({searchParams: {page: parsedPage + 1}})
  // }

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="flex flex-wrap gap-4">
      {data?.results.map((pokemon) => (
        <PokemonEntry key={pokemon.name} name={pokemon.name} />
      ))}

      <div className="flex gap-4 justify-center">
        {data?.previous && (
          <button onClick={handleClickPrevious}>Previous paage</button>
        )}
        {data?.next && <button onClick={handleClickNext}>Next Page</button>}
      </div>
    </div>
  );
};

export default PokemonList;
