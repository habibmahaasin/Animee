import React from "react";
import Button from "@/ui/elements/Button";
import { css } from "@emotion/css";

const Pagination = ({
  page,
  totalPages,
  handlePageChange,
  renderPageNumbers,
}) => {
  const data = [
    { label: "First", action: () => handlePageChange(1), disabled: page <= 1 },
    {
      label: "Prev",
      action: () => handlePageChange(page - 1),
      disabled: page <= 1,
    },
    ...renderPageNumbers().map((pageNum) => ({
      label: pageNum,
      action: () => handlePageChange(pageNum),
      active: page === pageNum,
    })),
    {
      label: "Next",
      action: () => handlePageChange(page + 1),
      disabled: page >= totalPages,
    },
    {
      label: "Last",
      action: () => handlePageChange(totalPages),
      disabled: page >= totalPages,
    },
  ];

  return (
    <div
      className={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;

        @media (max-width: 640px) {
          flex-direction: column;
        }
      `}
    >
      <p
        className={css`
          margin-left: 10px;
          font-size: 12px;
        `}
      >
        Page {page} of {totalPages}
      </p>
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;
          flex-wrap: wrap;
        `}
      >
        {data.map((item, index) => (
          <Button
            key={index}
            size="small"
            disabled={item.disabled}
            active={item.active}
            onClick={item.action}
          >
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
