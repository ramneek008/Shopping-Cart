import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { toast } from 'react-toastify';
import BuyPage from './Components/BuyPage';
import Cart from './Components/Cart';

function App() {

  const [cartItem, setCartItem] = useState([]);

  const addInCart = item => {
    const isAlreadyAdded = cartItem.findIndex(function(array){
      return array.id === item.id
    })

    if(isAlreadyAdded !== -1){
      toast("Already in Cart",{
        type:"error"
      })
    }

    setCartItem([...cartItem, item]);
  };

  const buyNow = () => {
    setCartItem([]);

    toast("Purchase complete", {
      type: "success"
    });
  };

  const removeFromCart = item => {
    setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id))
  };

  return (
    <div className="App">
      <BuyPage addInCart={addInCart} />
      <Cart cartItem={cartItem} removeFromCart={removeFromCart} buyNow={buyNow} />
    </div>
  );
}

export default App;
