import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ItemCount(props) {
    const [count, setCount] = useState(0);
    const [cartCount, setCartCount] = useState(10);

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="{this.card_img}.jpg" />
                <Card.Body>
                    <Card.Title>{props.card_title}</Card.Title>
                    <Card.Text>
                        {props.card_text}
                    </Card.Text>
                    <div className="d-grid gap-1" id="add-delete-cart">
                        <div>
                            <Button id="sub-button" variant="dark" onClick={()=> setCount(count-1)}>-</Button>
                            <Button variant="light">{count}</Button>
                            <Button id="add-button" variant="dark" onClick={()=> setCount(count+1)}>+</Button>
                        </div>
                    </div>
                    <div className="d-grid gap-1">
                        <Button variant="light" onClick={()=> setCartCount(cartCount - count)}>Agregar al carrito</Button>
                        <p>{cartCount}</p>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}
