import { useNavigate, useLocation } from "react-router-dom";
import {
  ITEMS_PER_PAGE,
  PAGINATION_PAGE_LIMIT,
} from "@/utils/constant/paginationConstant";

export const usePagination = (totalItems, currentPage) => {
  const navigate = useNavigate();
  const location = useLocation();

  const pageLimit = PAGINATION_PAGE_LIMIT;
  const totalPages = totalItems ? Math.ceil(totalItems / ITEMS_PER_PAGE) : 0;

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      navigate({
        pathname: location.pathname,
        search: `?page=${newPage}`,
      });
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    let startPage = Math.max(currentPage - Math.floor(pageLimit / 2), 1);
    let endPage = Math.min(currentPage + Math.floor(pageLimit / 2), totalPages);

    if (endPage - startPage < pageLimit) {
      if (startPage === 1) {
        endPage = Math.min(startPage + pageLimit - 1, totalPages);
      } else {
        startPage = Math.max(endPage - pageLimit + 1, 1);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return {
    totalPages,
    handlePageChange,
    renderPageNumbers,
  };
};
