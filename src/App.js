import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <footer>
        This project was created by Mariana during SheCodes course and is
        <a
          href="https://github.com/MarianaVer/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-sourced
        </a>
      </footer>
    </div>
  );
}
