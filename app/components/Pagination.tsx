"use client"

import React from 'react';
import ReactPaginate from 'react-paginate';

interface PaginationProps {
  items: number;
  handlePagination: (selected: { selected: number }) => void;
}

const Pagination: React.FC<PaginationProps> = ({ items , handlePagination}) => {

 return (
   <>
     <ReactPaginate
       onPageChange={handlePagination}
       pageCount={items}
       marginPagesDisplayed={2}
       pageRangeDisplayed={5}
       containerClassName="pagination"
       activeClassName="bg-primary text-white"
     />
   </>
 );
};

export default Pagination;
