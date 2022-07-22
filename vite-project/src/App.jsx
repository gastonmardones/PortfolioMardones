import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/itemlistcontainer/ItemListContainer'


function App() {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Prueba de prop greeting"/>
      <ItemListContainer greeting="Prueba de prop greeting 2"/>
    </div>
  )
}

export default App
