
import { Product as ProductType } from './Product';
import {Product} from './components/Product';
import {Pagination} from './components/Pagination';
import productsData from './db.json';
import { useEffect, useState } from 'react';

export function App (){
  const [products, setProducts] = useState<ProductType[]>([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [productsPerPage] = useState(5);

   useEffect(() => {
      setProducts(productsData.products);
   }, []);

   // Get current products
   const indexOfLastProduct = currentPage * productsPerPage;
   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

   // Change page
   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

   return (
      <div className='container mt-5'>
         <h1 className='text-primary mb-3'>My Products</h1>
         {currentProducts.map(product => (
            <Product key={product.id} product={product} />
         ))}
         <Pagination
            productsPerPage={productsPerPage}
            totalProducts={products.length}
            paginate={paginate}
         />
      </div>
   );
}

