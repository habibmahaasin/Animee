import { css } from "@emotion/css";

const Header = () => {
  return (
    <header
      className={css`
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;
      `}
    >
      <h1
        className={css`
          font-size: 5rem;

          @media (max-width: 768px) {
            font-size: 2.5rem;
          }
        `}
      >
        ./Animee
      </h1>
      <p
        className={css`
          margin-top: -42px;
          opacity: 0.5;

          @media (max-width: 768px) {
            margin-top: -18px;
            font-size: 12px;
          }
        `}
      >
        Aku Bukan Wibu - Aku Bukan Wibu - Aku Bukan Wibu
      </p>
    </header>
  );
};

export default Header;
