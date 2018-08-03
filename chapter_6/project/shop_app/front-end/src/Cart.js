import React, { Component } from 'react';

class Cart extends Component {

    render() {
        let cartJSX;

        if (this.props.cart !== undefined){
            cartJSX = this.props.cart.map((product, i) => {
                return <div>
                    <li> {product.name}  </li>
                </div>  
                   
            });
        }
        
        return (
            <div>
                <h3>My Cart </h3>
                <ul>
                    {cartJSX}
                </ul>  
                
            </div>
        )
    }

};


export default Cart;