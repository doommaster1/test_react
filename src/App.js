import "./App.css";
// import { useState } from "react";
import { useState } from "react";
import { Astras } from "./astras";
import boobs from "./images/boobs.jpg";
import { Queens } from "./queens";
import nackal from "./images/nackal.jpg";

const astrases = [
  { name: "Ajak", code: "The Prime", hierarchy: "Submission" },
  { name: "Ikarra", code: "The Prime", hierarchy: "Domination" },
  { name: "Sersi", code: "The Prime", hierarchy: "Submission" },
  { name: "Thena", code: "The Prime", hierarchy: "Domination" },
  { name: "Gilana", code: "The Prime", hierarchy: "Switch" },
  { name: "Makkari", code: "The Prime", hierarchy: "Switch" },
  { name: "Kinaya", code: "The Prime", hierarchy: "Domination" },
  { name: "Phaesta", code: "The Prime", hierarchy: "Switch" },
  { name: "Drusilla", code: "The Prime", hierarchy: "Domination" },
  { name: "Sprite", code: "The Prime", hierarchy: "Switch" },
];

const queens = [
  { name: "Amara al-Sahra", code: "The Sun Empress", kingdom: "Solara" },
  { name: "Isabela Maris", code: "The Ocean Heart", kingdom: "Coralys" },
  { name: "Vanessa Avalyn", code: "The White Swan", kingdom: "Valdris" },
  { name: "Yuna Mei", code: "The Jade Lotus", kingdom: "Emeria" },
];

function App() {
  const [dominated, setDominated] = useState(false);
  const [color, setColor] = useState(false);
  const [fucked, setFucked] = useState(1);

  const increaseFucked = () => {
    setFucked(fucked + 1);
  };

  const fisting = () => {
    setFucked(10 + 1);
  };
  const decreaseFucked = () => {
    fucked > 1 && setFucked(fucked - 1);
  };
  const cum = () => {
    setFucked(1);
  };
  // const [color, setColor] = useState("black");
  return (
    <div className="App">
      {fucked}
      <br />
      <button onClick={increaseFucked}>Fucked More</button>
      <button onClick={decreaseFucked}>Give her Rest</button>
      <button onClick={cum}>she is cum, go back to start</button>
      <button onClick={fisting}>Fisting</button>
      {fucked > 10 && (
        <div>
          <h1>she squirting</h1>
          <img
            src={nackal}
            alt="fucked"
            style={{ width: "50%", height: "auto" }}
          ></img>
          <br />
          <br />
          <br />
        </div>
      )}
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          setDominated(!dominated);
        }}
      >
        show boobs
      </button>
      <button onClick={() => setColor(!color)}>Make them cum</button>
      {dominated && (
        <div>
          <br />
          <img src={boobs} alt="boobs" style={{ width: "50%", height: "Auto" }} />
          <br />
          <br />
        </div>
      )}
      <br />
      <br />
      <br />
      {/* <button onClick={() => setColor("red")}>Make them cum</button> */}
      {astrases.map((astras) => {
        return (
          <Astras
            name={astras.name}
            code={astras.code}
            hierarchy={astras.hierarchy}
            color={color}
          />
        );
      })}
      <h1 style={{ color: "red" }}>Their Children</h1>
      {queens.map((queen) => {
        return (
          <Queens name={queen.name} code={queen.code} kingdom={queen.kingdom} />
        );
      })}
    </div>
  );
}

export default App;
