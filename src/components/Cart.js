import './style.css';
import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge';

function Cart({products, removeFromCart}){
  const [all, setAll] = useState(0);

  useEffect(()=>{
    setAll(products.reduce((acc, el)=>{
      return acc + el.price;
    }, 0))
  }, [products])

    return <div className={'cart'}>
      <ListGroup>
        {products.map(el => <ListGroup.Item className={'text-start'} key={el.id}>{el.brand} {el.model} ({el.price} UAH)         
            <Badge className={'badge mx-3'} onClick={()=>removeFromCart(el.id)} bg="danger">Cancel</Badge>{' '}
        </ListGroup.Item>)}
      </ListGroup>
      <p className={'text-start mx-4 text-info'}>All: {all} UAH</p> 
    </div>
}

export default Cart; 