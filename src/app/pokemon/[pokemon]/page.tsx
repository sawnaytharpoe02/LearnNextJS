// import React from 'react';

// const page = (props: {
//   params: { postId: string };
//   searchParams: { searchQuery: string };
// }) => {
//   const { params, searchParams } = props;
//   return (
//     <div>
//       <div>Post ID: {params.postId}</div>

//       <div>Post SearchQuery : {searchParams.searchQuery}</div>
//     </div>
//   );
// };

// export default page;
import React from 'react';
import PokemonDetail from '@/app/components/PokemonDetail';

const page = ({ params }: { params: { pokemon: string } }) => {
  // const router = useRouter();
  // const pokemonName = router.query.pokemon?.toString() || '';
  const { pokemon } = params;

  return (
    <>
      <PokemonDetail pokemon={pokemon} />
    </>
  );
};

export default page;
