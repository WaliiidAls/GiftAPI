import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import config from "./config";

async function App() {
  await axios
    .post(
      "http://192.168.1.123:4030/card/632ef36c27690e4d48cd16c3/redeem",
      {
        headers: {
          _id: "632edb56d8c3d0ba519db678",
        },
      },
      config
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
