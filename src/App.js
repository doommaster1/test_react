import "./App.css";
// import { useState } from "react";
import { useState } from "react";
import { Astras } from "./astras";
import foto from "./images/foto.jpg";
import { Queens } from "./queens";

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
  // const [color, setColor] = useState("black");
  return (
    <div className="App">
      <button
        onClick={() => {
          setDominated(!dominated);
        }}
      >
        show boobs
      </button>
      <button onClick={() => setColor(!color)}>Make them cum</button>
      {dominated && <img src={foto} alt="foto" />}
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
      <h1>Their Children</h1>
      {queens.map((queen) => {
        return (
          <Queens
            name={queen.name}
            code={queen.code}
            hierarchy={queen.kingdom}
          />
        );
      })}
    </div>
  );
}

export default App;
