import React from 'react';
import Shoes from './Shoes';
import Hats from './Hats';
import Cart from './Cart';
import { Switch, Link, Route } from 'react-router-dom'; 
import axios from 'axios';

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hats: [
                {
                    name: "Classic Blackout Snapback", 
                    price: "38.00", 
                    picture: "/images/classic-black.jpg",
                    type: "hat"
                }, 
                {
                    name: "Classic Navy Anchor Snapback", 
                    price: "38.00", 
                    picture: "/images/classic-blue.jpg", 
                    type: "hat"
                }, 
                {
                    name: "Team Goose, Grey (Dad Fit)", 
                    price: "42.00", 
                    picture: "/images/goose-grey.jpg", 
                    type: "hat"
                },
                {
                    name: "Team Goose, Midnight Blue, (Horizon Fit)", 
                    price: "42.00", 
                    picture: "/images/goose-blue.jpg",
                    type: "hat"
                }
            ],

            shoes: [
                {
                    name: "NikeAir Presto Mid Utility - Black", 
                    price: "200.00", 
                    picture: "/images/nike-air-presto-mid-utility-black.png",
                    type: "shoe"
                }, 
                {
                    name: "NikeAir Presto Mid Utility - Sunset", 
                    price: "190.00", 
                    picture: "/images/nike-air-presto-mid-utility-sunset.png", 
                    type: "shoe"
                }, 
                {
                    name: "Nike Presto Ply SE", 
                    price: "145.00", 
                    picture: "/images/nike-presto-ply-se.png", 
                    type: "shoe"
                },
                {
                    name: "NikeCourt Air Vapour Advantage Clay (Men's Tennis)", 
                    price: "120.00", 
                    picture: "/images/nike-court-air-clay-tennis.png",
                    type: "shoe"
                }
            ], 

            cart: []
        };
        //Binding goes here if necessary...
    }

    addToCart = item => {
        console.log(item);
        axios.post('http://localhost:8080/cart', item)
        .then(res => {
            console.log(res.data.cartItems)
            this.setState({
                cart: res.data.cartItems
            })
        })
        .catch(error => {
            console.log(error)
        })    
    }

 componentDidMount(){
        //Send GET request to get cart on page initialization. 
        axios.get('http://localhost:8080/cart')
             .then(result => {
                // console.log("ComponentDidMountResponse:",result);
                // Once available, set it in state:
                 this.setState({
                     cart: result.data
                 })
             })
             .catch(error => {
                 console.log(error)
            })    
        
    } 
 
    render(){
        return(
            <div className="container-fluid">
                <h5> <i>Sup, {localStorage.name}? Take a look around :) </i></h5>
                <div className="row">
                    <div className="col-sm-8 col-md-8">
                        <h1> Shop </h1>
                        <nav>
                            <Link to="/shop/hats"> Hats </Link>
                            <Link to="/shop/shoes"> Shoes </Link>
                        </nav>
                        <Switch>
                            {/* Pass State & methods as props.  */}
                            <Route 
                                path='/shop/hats' 
                                render={ (props) => 
                                    {return <Hats 
                                        hats={this.state.hats} 
                                        addToCart={this.addToCart} 
                                        match={props.match} />} } />

                            {/* Pass State & methods as props.  */}
                            <Route 
                                path='/shop/shoes' 
                                render={ (props) => 
                                    {return <Shoes 
                                    shoes={this.state.shoes} 
                                    addToCart={this.addToCart} 
                                    match={props.match}/>} } />
                        </Switch> 
                    </div>
                    <div className="col-sm-4 col-md-4" >
                        {/* Pass State & any methods as props.  */}
                       <Cart cart={this.state.cart} />
                    </div>
                </div>  
            </div>

        )
    }
}

export default Shop; 