import './assets/css/App.css'
import Navbar from './components/Navbar';
import Locations from './components/Locations';
import { useState } from 'react';


function App() {

  const [location, setLocation] =
    useState({})

  return (
    <div className="App">
      <Navbar title="Rick and Morty Wiki" setLocation={setLocation} />
      <Locations location={location} setLocation={setLocation} />
    </div>
  )
}

export default App
