import { css } from "@emotion/css";
import { useTheme } from "@/context/themeContext";
import Button from "@/ui/elements/Button";
import { useNavigate } from "react-router-dom";

const Card = ({ title, japaneseTitle, image, id }) => {
  const { currentTheme } = useTheme();
  const navigate = useNavigate();

  const cardTheme = currentTheme?.card;

  return (
    <div
      className={css`
        width: 210px;
        display: flex;
        padding: 12px;
        flex-direction: column;
        align-items: center;
        max-height: 321px;
        background: rgba(255, 255, 255, 0.19);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(2.9px);
        -webkit-backdrop-filter: blur(2.9px);
        cursor: pointer;

        &:hover .image-container {
          transform: scale(1.03);
          transition: transform 0.2s ease-in-out;
        }

        &:hover .title-wrapper {
          display: none;
          transition: transform 0.2s ease-in-out;
        }

        &:hover .action-section {
          display: flex;
          transition: transform 0.3s ease-in-out;
        }

        @media (max-width: 507px) {
          width: 85vw;
        }
      `}
    >
      <div
        className={
          `image-container ` +
          css`
            background-image: url(${image});
            background-size: cover;
            background-position: center;
            width: 100%;
            max-width: 210px;
            border-radius: 12px;
            min-height: 321px;
            position: relative;
            overflow: hidden;
            transition: transform 0.2s ease-in-out;

            @media (max-width: 507px) {
              max-width: 100%;
            }

            &::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(
                to top,
                rgba(0, 0, 0, 0.8) 0%,
                rgba(0, 0, 0, 0) 100%
              );
              border-radius: 12px;
              z-index: 1;
            }
          `
        }
      >
        <div
          className={
            `title-wrapper ` +
            css`
              position: absolute;
              font-weight: 600;
              font-size: 12px;
              text-align: center;
              padding: 8px 0;
              bottom: 0px;
              width: 100%;
              color: ${cardTheme.text};
              z-index: 2;
              transition: transform 0.2s ease-in-out;
            `
          }
        >
          <p
            className={css`
              width: 80%;
              margin: 0 auto;
            `}
          >
            {title}
          </p>
          <p
            className={css`
              width: 80%;
              margin: 4px auto;
            `}
          >
            {japaneseTitle ? `(${japaneseTitle})` : ""}
          </p>
        </div>
        <div
          className={
            `action-section ` +
            css`
              display: none;
              position: absolute;
              font-weight: 600;
              font-size: 12px;
              text-align: center;
              padding: 8px 0;
              top: 0px;
              height: 321px;
              width: 100%;
              color: ${cardTheme.text};
              z-index: 2;

              flex-direction: column;
              justify-content: center;
              align-items: center;
              gap: 8px;

              transition: transform 0.3s ease-in-out;
              background: rgba(0, 0, 0, 0.19);
              box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
              backdrop-filter: blur(2.9px);
              -webkit-backdrop-filter: blur(2.9px);
            `
          }
        >
          <p
            className={css`
              width: 80%;
              margin: 0 auto;
            `}
          >
            {title}
          </p>
          <p
            className={css`
              width: 80%;
              margin: 0px auto;
            `}
          >
            {japaneseTitle ? `(${japaneseTitle})` : ""}
          </p>
          <Button
            onClick={() => {
              navigate(`/detail-anime/${id}`);
            }}
          >
            Show Detail
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
