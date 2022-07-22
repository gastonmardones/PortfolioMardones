import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

function ItemListContainer(props) {
    return (
        <>
        <ListGroup>
            <ListGroup.Item>{props.greeting}</ListGroup.Item>
        </ListGroup>
        </>
    )
}

export default ItemListContainer
