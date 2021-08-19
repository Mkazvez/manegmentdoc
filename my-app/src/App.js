//import logo from './Components/c1.png';
import './App.css';
//import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import React, { useEffect} from 'react';

function App() {
  useEffect(() => {
    document.title = "Ковид-19 статистика";
  }, []);
  return (
    <>
      {/* <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/20.2.5/css/dx.common.css" />
      <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/20.2.5/css/dx.light.css" />

      <script src="https://unpkg.com/core-js@2.4.1/client/shim.min.js"></script>
      <script src="https://unpkg.com/systemjs@0.21.3/dist/system.js"></script>*/}
      <div> 
        <Header/>
      </div>
    </>
  );
}

export default App;
