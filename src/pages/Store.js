import {Row, Col} from 'react-bootstrap';
import { dataProducts } from '../products';
import ProductCard from '../components/ProductCard';

function Store (){

    return (
        <>
            <Row xs={2} md={2} className='g-2'>
                {dataProducts.map(
                    (product, idx) => (
                        <Col className='col-sm' align='center' key={idx}>
                            <ProductCard product={product}></ProductCard>
                        </Col>
                    )
                )}

            </Row>
            <br></br>
        
        </>
    )
}

export default Store;