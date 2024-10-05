import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Maseru" />
        <footer>
          <a
            href="https://github.com/thandierab/react-weather-forecast"
            target="blank"
            title="Github"
          >
            Coded
          </a>{" "}
          by Thandie R-mane and hosted on{" "}
          <a
            href="https://thandierab-reactforecast.netlify.app/"
            target="blank"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
