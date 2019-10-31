import React from 'react';
import './styling/App.css';
import Navbar from './components/navbar'
import Main from './routes/main'
function App() {
  return (
    <div>
  <Navbar>
    </ Navbar>
    <div style={{height: '60px', position: 'relative'}}></div>
    <Main></Main>
    </div>
  );
}

export default App;
