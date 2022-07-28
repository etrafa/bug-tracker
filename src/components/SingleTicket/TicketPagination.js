import { useState } from "react";
import ReactPaginate from "react-paginate";

const TicketPagination = ({ dbData }) => {
  //pagination show only 10 user's per page
  const [pageNumber, setPageNumber] = useState(0);
  const COMMENTS_PER_PAGE = 3;
  const pagesVisited = pageNumber * COMMENTS_PER_PAGE;
  const pageCount = Math.ceil(dbData?.comments?.length / COMMENTS_PER_PAGE);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const showComments =
    dbData?.comments &&
    dbData?.comments
      .slice(pagesVisited, pagesVisited + COMMENTS_PER_PAGE)
      .map((singleComment) => {
        const { comment, commentOwner, createdAt } = singleComment;
        return (
          <section className="w-full lg:w-11/12 min-h-[5rem] bg-gray-50 mx-auto my-4">
            <header className="flex justify-end">
              <p className="mx-6 mt-2 text-gray-400 text-sm">{commentOwner}</p>
              <p className="mx-6 mt-2 text-gray-400 text-sm">{createdAt}</p>
            </header>
            <article className="text-left m-4">{comment}</article>
          </section>
        );
      });

  return (
    <div>
      {showComments}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default TicketPagination;
