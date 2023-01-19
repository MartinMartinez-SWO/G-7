import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import './App.css'
import Table from './Table'
import Buttons from './Buttons'
import axios from 'axios';

function App() {

  // const [users, setUsers]  = useState([])

  useEffect( () => {
    axios.get('http://localhost:5066/list')
     .then( res => 
      console.log(res.data)
     )
     .catch(error => console.log(error))

  }, [])

  return (
    <div>
        <Table />
        <Buttons/>
    </div>
  )
}

export default App
