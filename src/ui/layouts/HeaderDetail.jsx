import Button from "@/ui/elements/Button";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const HeaderDetail = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div
      className={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 36px;

        @media (max-width: 768px) {
          flex-direction: column;
          align-items: center;
          align-items: start;
        }
      `}
    >
      <Button
        className={css`
          height: fit-content;
          display: flex;
          align-items: center;
        `}
        onClick={() => {
          navigate(`/`);
        }}
      >
        <Icon
          icon="ic:round-chevron-left"
          className={css`
            margin-left: -8px;
          `}
          width="24"
          height="24"
        />
        Back
      </Button>
      <h2>
        ./
        {title}
      </h2>
    </div>
  );
};

export default HeaderDetail;
