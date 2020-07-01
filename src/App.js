import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigator from './components/Navbar/navigator.js';
import Loader from './components/Loader/loader.js';
import Footer from './components/Footer/footer.js';


function App() {
  return (
    <div className="App">
      <Navigator></Navigator>
      <Footer></Footer>
    </div>
  );
}

export default App;
