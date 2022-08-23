import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function Product({product, addToCart, removeFromCart}){
    return <Col>
        <Card text='dark'>
            <Card.Img height={500} variant="top" src={product.imgSrc}/>
            <Card.Body>
              <Card.Title>{product.brand} {product.model}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <strong className="text-muted">{product.price} UAH</strong>
            </Card.Body>
            <Card.Footer>
                {!product.addToCart ? <Button variant="primary" onClick={()=> addToCart(product.id)}>Buy it now</Button> : <Button variant="warning" onClick={()=> removeFromCart(product.id)}>Cancel</Button>}
            </Card.Footer>
        </Card>
    </Col>
}

export default Product;