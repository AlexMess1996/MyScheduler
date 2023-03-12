import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect:
     useEffect(()=>{
    //get some data
    axios.get('http://localhost:5100/api/activities')
    .then(response =>{
      setActivities(response.data); 
    })
  },[])  
  return (
    <div>
      <ul>
          {activities.map((activity: any) => (
            <li key={activity.id}>
              {activity.title}
            </li>
            
          ))}
        </ul>
    </div>
  );
}

export default App;
