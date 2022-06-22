import "../styles/App.scss";
import "../styles/Reset.scss";
import "../styles/Header.scss";

import Counter from "./Counter";


import { useState } from "react";

function App() {
  const [gamesWinned, setGamesWinned] = useState(0);
  const [gamesLost, setGamesLost] = useState(0);
  const [list, setList] = useState([]);
  const [newProfile, setNewProfile] = useState("");
  const [selectedProfile, setSelectedProfile] = useState("default");

  const optionsList = list.map((name) => <option value={name}>{name}</option>);

  /*const changeValue = (setFuntion) => (value) => {
    setFuntion(value)
  }*/

  const winRatio = () => {
    return ((gamesWinned / (gamesWinned + gamesLost)) * 100 || 0).toFixed(2);
  };

  const saveListData = () => {
    setList([...list, newProfile]);
    setNewProfile("");
    setSelectedProfile(newProfile);
  };

  return (
    <div>
      <header className="header">
        <h1 className="header__title">
          El cuentatrón 3000 <i>(nombre provisional)</i>
        </h1>
      </header>

      <fieldset>
        <label htmlFor="character"></label>
        <input
          type="text"
          name="character"
          id="character"
          placeholder="League of Legends"
          onChange={(e) => setNewProfile(e.target.value)}
          value={newProfile}
        />
      </fieldset>
      <button onClick={saveListData}>Guardar ficha</button>

      <fieldset>
        <label htmlFor="character"></label>
        <select
          name="character"
          id="character"
          value={selectedProfile}
          onChange={(e) => setSelectedProfile(e.target.value)}
        >
          <option value="default">Seleccionar juego</option>
          {optionsList}
        </select>
      </fieldset>

      <Counter
        title="Partidas ganadas 😎"
        value={gamesWinned}
        changeValue={setGamesWinned}
      ></Counter>
      <Counter
        title="Partidas perdidas 😭"
        value={gamesLost}
        changeValue={setGamesLost}
      ></Counter>
      <div>
        <div>Partidas en las que lo paso bien 🤩</div>
        <div>{gamesWinned + gamesLost}</div>
      </div>
      <div>
        <div>Win Rate:</div>
        <div>{winRatio()}</div>
      </div>

      <button>Reset</button>
    </div>
  );
}

export default App;
