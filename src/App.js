import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { toast } from 'react-toastify';
import BuyPage from './Components/BuyPage';

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
  };

  const buyNow = () => {
    setCartItems([]);

    toast("Purchase complete", {
      type: "success"
    });
  };

  const removeFromCart = item => {
    setCartItems(cartItems.filter(singleItem => singleItem.id !== item.id))
  };

  return (
    <div className="App">
      <BuyPage addInCart={addInCart} />
    </div>
  );
}

export default App;
