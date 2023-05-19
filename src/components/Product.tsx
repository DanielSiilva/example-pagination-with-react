import { Product as ProductType } from '../Product';

interface ProductProps {
   product: ProductType;
}

export function Product ({ product }: ProductProps) {
   return (
      <div>
         <h2>{product.name}</h2>
         <p>{product.description}</p>
      </div>
   );
}

