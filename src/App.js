import './Kitty.css';
import Kitty from './components/Kitty';
import KittyForm from './components/KittyForm';
import { useState } from 'react';

function App() {
  const [kitties, setKitties] = useState([]);

  const addKitty = newKitty => {
    setKitties(currentKitties => [...currentKitties, newKitty]);
  };

  const deleteKitty = id => {
    setKitties(currentKitties => currentKitties.filter(kitty => kitty.id !== id));
  };

  return (
    <div className="App">
      <h1 className='Purrfect'>Purrfect Match</h1>
      <hr />
      <KittyForm addFunction={addKitty} />
      {kitties.map(kitty => (
        <div key={kitty.id}>
          <Kitty name={kitty.name} img={kitty.img} desc={kitty.desc} />
          <KittyForm removeFunction={() => deleteKitty(kitty.id)} />
        </div>
      ))}
    </div>
  );
}

export default App;
