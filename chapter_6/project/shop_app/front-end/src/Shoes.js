import React from 'react';
import Product from './Product';

class Shoes extends React.Component {

    render(){
        let shoesJSX = this.props.shoes.map((product, i) => {
            return <Product 
                key={i}
                name={product.name} 
                price={product.price} 
                picture={product.picture}
                type={product.type} 
                addToCart={this.props.addToCart}
                product={product}
                />
        })

        return(
            <div>
                <h2>Shoes</h2>
                <h3>Here are some shoes for your feeties.</h3>
                <div>{shoesJSX}</div> 
            </div>
        )
    }
}

export default Shoes; 