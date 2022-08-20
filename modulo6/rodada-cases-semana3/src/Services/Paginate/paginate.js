import React, { useContext } from "react";
import ReactPaginate from "react-paginate";
import { PaginateContainer } from "./style";
import { MoviesContext } from "../getMovies";

const Paginate = () => {
  const { setPage } = useContext(MoviesContext);
  return (
    <PaginateContainer>
      <ReactPaginate
        previousLabel="Prev"
        nextLabel="Next"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={18}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={(pagination) => {
          setPage(pagination.selected + 1);
        }}
        containerClassName="pagination"
        activeClassName="active"
      />
    </PaginateContainer>
  );
};
export default Paginate;
