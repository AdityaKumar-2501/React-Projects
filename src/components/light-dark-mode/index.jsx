import useLocalStorage from "./useLocalStorage";
import "./styles.css";

export default function LightDarkMode() {
    const [theme, setTheme] = useLocalStorage("theme", "dark");

    function handleClick() {
        theme === "dark" ? setTheme("light") : setTheme("dark");
    }

    return (
        <div className="light-dark-mode" current-theme={theme}>
            <div className="container">
                <p>Hello World !</p>
                <button onClick={handleClick} className="btn">Change Theme</button>
            </div>
        </div>
    );
}
