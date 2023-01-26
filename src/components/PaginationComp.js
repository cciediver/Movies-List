import React from "react";
import ReactPaginate from "react-paginate";

const PaginationComp = ({ getPage, pageCount }) => {
  const handlePageClick = (data) => {
    getPage(data.selected + 1);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel="< السابق"
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default PaginationComp;
