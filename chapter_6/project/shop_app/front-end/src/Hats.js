import React from 'react';
import Product from './Product';

class Hats extends React.Component {

    render(){ 
        let hatsJSX = this.props.hats.map((product, i) => {
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
                <h2>Hats</h2>
                <h3>Here are some hats for your head.</h3>
                <div>{hatsJSX}</div>    
            </div>
        )
    }
}

export default Hats; 