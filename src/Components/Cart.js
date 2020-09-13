import React from 'react';
import {Container, Col, Row, ListGroup, ListGroupItem, Card, CardBody, CardHeader, CardFooter, Button} from 'reactstrap';

const Cart = ({cartItem, removeFromCart, buyNow}) => {

    let amount = 0;
    cartItem.forEach(item => {
        amount = parseFloat(amount) + parseFloat(item.productPrice)
    });

    return(
        <Container fluid>
            <h1 className="text-success">Your Cart</h1>
            <ListGroup>
                {cartItem.map(item => (
                    <ListGroupItem key={item.id}>
                        <Row>
                            <Col>
                            <img height={80} src={item.tinyImage} />
                            </Col>
                            <Col className="text-center">
                                <p className="text-primary">{item.productName}</p>
                                <span>Price: Rs.{item.productPrice}</span>
                                <Button className="text-success" onClick={() => removeFromCart(item)}>Remove</Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                ))}
            </ListGroup>
        </Container>
    )
}

export default Cart;