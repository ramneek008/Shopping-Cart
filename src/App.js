import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { toast } from 'react-toastify';

function App() {

  const [cartItems, setCartItems] = useState([]);

  const addInCart = item => {
    const isAlreadyAdded = cartItems.findIndex(function(array){
      return array.id === item.id
    })

    if(isAlreadyAdded !== -1){
      toast("Already in Cart",{
        type:"error"
      })
    }

    setCartItems([...cartItems, item]);

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
