import React from 'react';
import '../App.css';
import { StoreLocatorClass, StoreLocatorFunction} from './StoreLocator'

function App() {
  return (
    <div className="App">
      <StoreLocatorFunction />
      <StoreLocatorClass />
    </div>
  );
}

export default App;
