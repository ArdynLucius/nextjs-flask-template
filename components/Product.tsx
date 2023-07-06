import React from 'react';
import Link from 'next/link';
//import database link from lib/client here ;

interface ProductProps {
  product: {
    image: string[];
    name: string;
    slug: {
      current: string;
    };
    price: number;
    type: string;
    subType: string;
  };
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <div>
      <Link href={`/product/${product.slug.current}`}>
        <div className="product-card">
          {product.image && product.image[0] && (
            <img
              src={urlFor(product.image[0]).url()}
              height={250}
              width={250}
              className="product-image"
            />
          )}
          <p className="product-name">{product.name} </p>
          <p className="product-price">${product.price} </p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
