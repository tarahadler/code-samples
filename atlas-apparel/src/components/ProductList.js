import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'; 
import { Grid, Row, Col } from 'react-bootstrap';

class ProductList extends Component {
    render() {

        //Using .map method to return a div element for each song: 
        let allProductsJSX = this.props.product.map((product, i) => {
            //Tests: 
            //console.log(product.name)
            //console.log(product.id)


            //To get rid of the Warning (requires key message), insert key as so below. 
            return <div key={product.id}>
                <Col sm={4}>
                {/* Use Link element to create a link to each product. */}
                    <Link className="product-list-item" to={'/shop/productlist/' + product.id + "/map"}>
                        <img className="product-list-item-image" src={product.thumbnail} alt="product" />
                    </Link>
                </Col>
        
                </div>
        })

        return (
            <div>
                <Grid className="mt-5">   
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={1}>
                            <h3 className="mt-0">Woman</h3>
                            <h3>Man</h3>
                            <ul className="list-unstyled product-list-nav">
                                <li><NavLink to="/shop/productlist">New In</NavLink></li>
                                <li>Basics</li>
                                <li>Jackets</li>
                                <li>Blazers</li>
                                <li>Suits</li>
                                <li>Trousers</li>
                                <li>Shorts</li>
                                <li>Shirts</li>
                                <li>Sweaters</li>
                                <li>Shoes</li>
                                <li>Accessories</li>
                            </ul>
                        </Col>
                        <Col sm={1}></Col>
                        <Col sm={8}> {allProductsJSX} </Col>
                        <Col sm={1}></Col>
                    </Row>
                </Grid>
        
             
              
                
            </div>
        );
    }
}

export default ProductList;