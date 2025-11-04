import { useState } from 'react';
import './App.css';
import Main from './components/Main/Main';
import Projects from './components/pages/Projects/Projects.jsx';
import About from './components/Main/About/About.jsx';
import ArrowIcon from './images/Icons/Arrow.jsx';

function App() {
  const [showComponent, setShowComponent] = useState(null); // Component name goes here
  return (
    <div className={`App ${showComponent ? 'showComponent' : ''}`}>
      <Main setShowComponent={setShowComponent} showComponent={showComponent}/>
      <div className={`component-container ${showComponent ? 'show-component' : ''}`}>
        <div className="app-header">
          <button onClick={()=>setShowComponent(null)}><ArrowIcon /></button>
          <h2>{showComponent === "projects" ? "My Projects" : showComponent === 'about' ? "About Me" : ''}</h2>
        </div>
        <div className='content'>
          {
            showComponent === 'projects' ? <Projects close={()=>setShowComponent(null)} /> : 
            showComponent === 'about' ? <About close={()=>setShowComponent(null)}/> : 
            null
          }
        </div>
      </div>
    </div>
  );
}

export default App;
