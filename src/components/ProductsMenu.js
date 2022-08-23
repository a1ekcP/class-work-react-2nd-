import ProductMenu from './ProductMenu';
import Form from 'react-bootstrap/Form';

function ProductsMenu({select, productsArr,}){
    
    return <Form.Select onChange={select} aria-label="Default select example" className='w-50 mx-auto'>
            <option>Open this select menu</option>
             {productsArr.map(elem => <ProductMenu key={elem.brand} elem={elem}/>)}
        </Form.Select>
}

export default ProductsMenu;