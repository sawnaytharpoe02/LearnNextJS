import React from 'react';
import PokemonList from '../components/PokemonList';

const page = (props: any) => {
  const { searchParams } = props;

  return (
    <div>
      <PokemonList page={searchParams.page} />
    </div>
  );
};

export default page;
