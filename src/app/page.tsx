'use client';

import Login from '@/components/Login';
import {
  useGetAllProductsQuery,
  useGetProductQuery,
} from '@/redux/features/product-api-slice';
import { useAppSelector } from '@/redux/store';

export default function Home() {
  const username = useAppSelector((state) => state.authReducer.value.name);
  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);
  const isModerator = useAppSelector(
    (state) => state.authReducer.value.isModerator
  );

  const { data, error, isLoading } = useGetAllProductsQuery();
  const { data: SingleSearchProduct } = useGetProductQuery('phone');

  console.log(SingleSearchProduct);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Login />

      <h2>User Name : {username}</h2>
      {isModerator && <h2>User is a moderator</h2>}

      {isAuth &&
        data?.products?.map((product: any) => (
          <div
            key={product.id}
            className="border border-red-300 p-1 mb-2 rounded-lg">
            <h2>{product.brand}</h2>
            <h2>{product.category}</h2>
          </div>
        ))}
    </main>
  );
}
