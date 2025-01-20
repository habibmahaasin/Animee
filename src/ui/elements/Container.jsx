import { css } from "@emotion/css";

const Container = ({ children }) => {
  return (
    <div
      className={css`
        width: 100%;
        max-width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding-left: 16px;
        padding-right: 16px;

        @media (min-width: 640px) {
          max-width: 640px; /* sm */
        }

        @media (min-width: 768px) {
          max-width: 768px; /* md */
        }

        @media (min-width: 1024px) {
          max-width: 1024px; /* lg */
        }

        @media (min-width: 1280px) {
          max-width: 1280px; /* xl */
        }

        @media (min-width: 1536px) {
          max-width: 1536px; /* 2xl */
        }
      `}
    >
      {children}
    </div>
  );
};

export default Container;
