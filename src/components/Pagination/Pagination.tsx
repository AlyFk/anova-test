import React from "react";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  allItems: number;
  setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  allItems,
  setPage,
}) => {
  return (
    <ReactPaginate
      containerClassName="flex bg-white p-2 shadow-sm rounded my-12 border-2 border-gray-200"
      previousClassName="rounded-sm border border-gray-100 px-3 py-2 border-gray-200 hover:bg-gray-100 text-gray-600 no-underline mx-2 text-sm"
      pageClassName="rounded-sm border border-gray-100 px-3 py-2 border-gray-200 hover:bg-gray-100 text-gray-600 no-underline mx-2"
      nextClassName="rounded-sm border border-gray-100 px-3 py-2 border-gray-200 hover:bg-gray-100 text-gray-600 no-underline mx-2 text-sm"
      activeClassName="rounded-sm border border-blue-100 px-3 py-2 border-gray-200 bg-blue-100 no-underline text-blue-500 cursor-not-allowed mx-2"
      marginPagesDisplayed={2}
      pageCount={allItems}
      pageRangeDisplayed={3}
      onPageChange={({ selected }) => setPage(selected + 1)}
    />
  );
};


export default Pagination