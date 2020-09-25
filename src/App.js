import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import BuyPage from './Components/BuyPage';
import Cart from './Components/Cart';

import {Container, Row, Col} from 'reactstrap';
import {ToastContainer, toast} from 'react-toastify';

function App() {

  const [cartItem, setCartItem] = useState([]);

  const addInCart = item => {
    const isAlreadyAdded = cartItem.findIndex(function(array){
      return array.id === item.id
    })

    if(isAlreadyAdded !== -1){
      toast("Already in Cart",{
        type:"error"
      });
      return;
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
    <Container fluid>
      <ToastContainer />
        <Row>
          <Col md="8">
            <BuyPage addInCart={addInCart} />
          </Col>
          <Col md="4">
            <Cart cartItem={cartItem} removeFromCart={removeFromCart} buyNow={buyNow} />
          </Col>
        </Row>
    </Container>
  );
}

export default App;
