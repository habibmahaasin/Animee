import { css } from "@emotion/css";
import { useTheme } from "@/context/themeContext";
import Button from "./Button";

const ThemeToggle = () => {
  const { theme, toggleTheme, currentTheme } = useTheme();
  return (
    <div
      className={css`
        display: flex;
        justify-content: end;
        align-items: center;
      `}
    >
      <p
        className={css`
          font-weight: semibold;
          font-size: 12px;
          color: ${currentTheme?.text};
        `}
      >
        {" "}
        Theme :
      </p>
      <Button
        className={css`
          margin: 16px;
        `}
        size="small"
        onClick={toggleTheme}
      >
        {theme}
      </Button>
    </div>
  );
};

export default ThemeToggle;
