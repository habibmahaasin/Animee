import { css } from "@emotion/css";
import { useTheme } from "@/context/themeContext";

const Button = ({
  children,
  onClick,
  active,
  disabled,
  className = "",
  size = "medium",
}) => {
  const { currentTheme } = useTheme();
  const buttonTheme = currentTheme?.button;

  const dynamicStyles = css`
    background-color: ${disabled
      ? buttonTheme.background + "55"
      : active
      ? buttonTheme.active
      : buttonTheme.background};
    padding: ${size === "small"
      ? "6px 16px"
      : size === "large"
      ? "15px 30px"
      : "10px 28px"};
    cursor: ${disabled ? "not-allowed" : "pointer"};
    border-radius: ${size === "small" ? "12px" : "24px"};
    border: none;
    color: ${disabled
      ? buttonTheme.text + "55"
      : active
      ? buttonTheme.text
      : buttonTheme.text};
    font-size: ${size === "small"
      ? "12px"
      : size === "large"
      ? "16px"
      : "14px"};
    &:hover {
      background-color: ${disabled
        ? buttonTheme.background + "55"
        : active
        ? buttonTheme.active
        : buttonTheme.background + "cc"};
      color: ${disabled
        ? buttonTheme.text + "55"
        : active
        ? buttonTheme.text
        : buttonTheme.text};
      transition: all 0.1s;
    }
  `;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} ${dynamicStyles}`}
    >
      {children}
    </button>
  );
};

export default Button;
