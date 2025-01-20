import { useEffect } from "react";
import { css } from "@emotion/css";

const Loader = ({ isVisible }) => {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={css`
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9;
        background: rgba(0, 0, 0, 0.9) 0%;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <div className="pulse"></div>
    </div>
  );
};

export default Loader;
