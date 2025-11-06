import { useState } from 'react';
import './App.css';
import Main from './components/Main/Main';
import Projects from './components/pages/Projects/Projects.jsx';
import About from './components/Main/About/About.jsx';
import ArrowIcon from './images/Icons/Arrow.jsx';

function App() {
  const [showComponent, setShowComponent] = useState(null);
  const [notifications, setNotifications] = useState([]);


  const copyText = async (text) =>{
    try {
        await navigator.clipboard.writeText(text);
    } catch (err) {
        console.error("Failed to copy: ", err)
    }
  } 

  const showNotification = (msg) =>{
    setNotifications(prev=>[...prev, msg]);

    setTimeout(()=>{
      setNotifications(prev=>[...prev.filter(i=>i!==msg)])
    }, 2000)
  }


  return (
    <div className={`App ${showComponent ? 'showComponent' : ''}`}>
      <div id='notifications'>
        {notifications?.length > 0 ? notifications?.map((notification, index)=><p key={'Notification-'+index} onClick={()=>setNotifications(prev=>[...prev.filter(i=>i!==notification)])} className="notification">{notification}</p>) : null}
      </div>
      <Main setShowComponent={setShowComponent} showComponent={showComponent} showNotification={showNotification} copyText={copyText}/>
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
