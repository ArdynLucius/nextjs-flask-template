//import { getClient } from '../library/client';
import { useState } from 'react';
//import Product from '../components/Product';
import { GetServerSideProps } from 'next';

interface SearchProps {
  results: Product[];
}

interface Product {
  _id: string;
  name: string;
  type: string;
  slug: string;
  price: number;
  image: string;
}

const Search: React.FC<SearchProps> = ({ results }) => {
  //const [searchTerm, setSearchTerm] = useState('');
    //ihope the errors are due to config issues from my side, give them a look when you can
  return (
    <div className="search-container">
      <div className="products-heading">
        <h1>Search Results</h1>
      </div>
      <div className="products-container">
        {results.map((result) => (
          <Product key={result._id} product={result} />
        ))}
      </div>
    </div>
  );
};

export default Search;

export const getServerSideProps: GetServerSideProps<SearchProps> = async ({ query }) => {
  const term = query.term as string;

  const client = getClient();//this is api access stuff, to be replaced when the lib/client file is updated

  const results: Product[] = await client
    .fetch(
      `*[_type == "product" && name match $term || type match $term] | order(_createdAt desc) {
        _id,
        name,
        type,
        slug,
        price,
        image
      }`,
      { term: `${term}*` }
    )
    .catch((err: Error) => console.error(err));

  return {
    props: {
      results,
    },
  };
};
