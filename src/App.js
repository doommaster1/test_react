import "./App.css";
// import { useState } from "react";
import { Queens } from "./queens";
import { Astras } from "./astras";

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
  return (
    <div className="App">
      {astrases.map((astras) => {
        return (
          <Astras
            name={astras.name}
            code={astras.code}
            hierarchy={astras.hierarchy}
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
