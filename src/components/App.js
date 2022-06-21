import '../styles/App.scss';
// import "../styles/Reset.scss";
import Counter from './Counter';

function App() {
  return (
    <div>
      <h1>Contador LoL</h1>
    
      <fieldset>
      <label for="character"></label>
      <input type="text" name="character" id="character" placeholder='lol' />
    </fieldset>
    
    <fieldset>
      <label for="character"></label>
      <select name="character" id="character">
        <option value="default">Default</option>
      </select>
    </fieldset>

    <Counter title="Partidas ganadas 😎" value={5}></Counter>
    <Counter title="Partidas perdidas 😓" value={2}></Counter>
    <Counter title="Partidas en las que lo paso bien 🤩" value={10}></Counter>
    </div>
  );
}

export default App;