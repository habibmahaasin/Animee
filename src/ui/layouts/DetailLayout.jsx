import { css } from "@emotion/css";
import { useTheme } from "@/context/themeContext";
import { Icon } from "@iconify/react";

const DetailLayout = ({ animeDetail }) => {
  const { currentTheme } = useTheme();

  return (
    <div
      className={css`
        margin: 36px 0px;
        display: flex;
        justify-content: center;
        align-items: start;
        gap: 24px;

        @media (max-width: 768px) {
          flex-direction: column;
          align-items: center;
        }
      `}
    >
      <div
        className={css`
          width: 225px;
          display: flex;
          padding: 12px;
          flex-direction: column;
          align-items: center;
          max-height: 285px;
          background: rgba(255, 255, 255, 0.19);
          border-radius: 16px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(2.9px);
          -webkit-backdrop-filter: blur(2.9px);

          @media (max-width: 768px) {
            width: 85vw;
          }
        `}
      >
        <div
          className={
            `image-container ` +
            css`
              background-image: url(${animeDetail?.data?.attributes?.posterImage
                ?.original || ""});
              background-size: cover;
              background-position: center;
              width: 100%;
              max-width: 225px;
              border-radius: 12px;
              min-height: 285px;
              position: relative;
              overflow: hidden;
              transition: transform 0.2s ease-in-out;

              @media (max-width: 768px) {
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
        ></div>
      </div>
      <div
        className={css`
          border-radius: 24px;
          width: 100%;
          min-height: 312px;
          padding: 0px 24px;
        `}
      >
        <div
          className={css`
            display: flex;
            gap: 12px;
            align-items: start;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            gap: 0px;
          `}
        >
          <h2
            className={css`
              font-size: 32px;
              font-weight: 500;
              margin-bottom: -12px;
            `}
          >
            {animeDetail?.data?.attributes?.titles?.en ||
              animeDetail?.data?.attributes?.titles?.en_jp ||
              animeDetail?.data?.attributes?.titles?.en_cn ||
              animeDetail?.data?.attributes?.titles?.zh_cn}
          </h2>
          <h2
            className={css`
              font-size: 18px;
              font-weight: 500;
              color: ${currentTheme.primary};
            `}
          >
            {animeDetail?.data?.attributes?.titles?.ja_jp}
          </h2>
        </div>
        <div
          className={css`
            display: flex;
            gap: 12px;
            align-items: center;
          `}
        >
          <Icon
            icon="material-symbols:stars-rounded"
            width="24"
            height="24"
            className={css`
              color: #ffd700;
            `}
          />
          <p
            className={css`
              font-size: 18px;
              font-weight: 500;
              color: ${currentTheme.text};
            `}
          >
            {animeDetail?.data?.attributes?.averageRating}
          </p>
          -
          <p
            className={css`
              font-size: 18px;
              font-weight: 500;
              color: ${currentTheme.text};
            `}
          >
            {animeDetail?.data?.attributes?.startDate}
          </p>
        </div>
        <p
          className={css`
            font-size: 14px;
            font-weight: 200;
            border-radius: 24px;
            color: ${currentTheme.text};
          `}
        >
          {animeDetail?.data?.attributes?.synopsis}
        </p>
      </div>
    </div>
  );
};

export default DetailLayout;
