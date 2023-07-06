import { GetStaticPaths, GetStaticProps } from 'next';
//import { urlFor } from '../library/client';
import { Product } from '../../components';


//const ProductDetails: 

//export default ProductDetails;

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type == "product"]{
    slug {
      current
    }
  }`;
  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: {
      product,
      products, //product for the product itself, products for related products that would appear on the page bellow
    },
  };
};
