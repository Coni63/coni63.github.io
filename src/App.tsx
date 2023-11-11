import React from 'react';

import './App.css';
import AboutMe from './components/about_me/AboutMe';

function App() {
  return (
    <div id="App">
      <div className="Section">
        <AboutMe/>
      </div>
      <div className="Section">
        <AboutMe/>
      </div>
      <div className="Section">
        <AboutMe/>
      </div>
      <div className="Section">
        <AboutMe/>
      </div>
    </div>
  );
}

export default App;
