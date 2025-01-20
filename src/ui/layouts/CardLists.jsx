import { css } from "@emotion/css";

const CardListsLayout = ({ children }) => {
  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 24px;
        flex-direction: column;
        margin-bottom: 24px;
      `}
    >
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;

          @media (max-width: 768px) {
            justify-content: center;
          }

          @media (max-width: 480px) {
            flex-direction: column;
            align-items: center;
          }
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default CardListsLayout;
