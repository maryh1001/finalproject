import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../index.css";

export default function SwitchButton() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const onClick = () => {
    if (darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  };

  return (
    <button className={`btn ${darkMode ? "btn-dark" : "btn-light"}`} onClick={onClick}>
      {darkMode ? "80's Theme" : "Too Much Color? Click Me!"}
    </button>
  );
}