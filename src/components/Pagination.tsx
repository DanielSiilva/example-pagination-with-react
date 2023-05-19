interface PaginationProps {
   productsPerPage: number;
   totalProducts: number;
   paginate: (pageNumber: number) => void;
}

export function Pagination ({ productsPerPage, totalProducts, paginate }: PaginationProps) {
    
   const pageNumbers = [];

   for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
      pageNumbers.push(i);
   }

   return (
      <nav>
         <ul>
            {pageNumbers.map(number => (
               <li key={number}>
                  <a onClick={() => paginate(number)} href='!#'>
                     {number}
                  </a>
               </li>
            ))}
         </ul>
      </nav>
   );
}


