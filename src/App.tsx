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
    setTimeout(()=>{
      setProducts(productsData.products)
    }, 1000);
  }, []);

  // Indice do ultimo produto
  const indexOfLastProduct = currentPage * productsPerPage;
  // Indice do ultimo produto
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  //O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é incluído) de um array original. O Array original não é modificado.
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

   // Change page
   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

   return (
      <div >
         <h1>My Products</h1>
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

