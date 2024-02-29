import React from 'react';
import PokemonList from '../components/PokemonList';

const page = ({ searchParams }: { searchParams: { page: string } }) => {
  return (
    <div>
      <PokemonList page={searchParams.page} />
    </div>
  );
};

export default page;
