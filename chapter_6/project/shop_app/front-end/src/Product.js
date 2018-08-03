import React from 'react'

class Product extends React.Component {

    render(){
        return(
            <div>
                <h5> {this.props.name} </h5>
                <h6> {this.props.price} </h6>
                <img src={this.props.picture} alt="product" />
                <button 
                    className="pull-left btn btn-default"
                    onClick={() => {this.props.addToCart(this.props.product)}}
                    >Add to Cart
                </button>
            </div>
        )
    }
}

export default Product; 