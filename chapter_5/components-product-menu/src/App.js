import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//whenever we're importing our own files, put './' and then the relative path. This tells import that we are talking about one of our own files, not an official node module. 
import Product from './Product'; 

let products = [
  {
    name: "socks",
    price: 2.99,
    description: "they keep your feet warm"
  },
  {
    name: "gum",
    price: 0.99,
    description: "they keep your mouth fresh"
  },  
  {
    name: "vitamix",
    price: 299,
    description: "they keep your food lit"
  },  
  {
    name: "hair gel",
    price: 2.99,
    description: "they keep your hairs gelled"
  },  
  {
    name: "headphones",
    price: 299,
    description: "they keep your ears bumpin"
  },  
];

class App extends Component {
  render() {
    //takes the array of product objects, and create any array of product components
    let productsJSX = [];
    for (let i = 0; i < products.length; i++) {
      //inside this loop we are going to create a <Product /> for each product object, and push it into the productsJSK array
      //here, we want to create a product that displays the data in products[i] 
      productsJSX.push(<Product name={products[i].name} 
              price={products[i].price}
              description={products[i].description} /> ); 

    }

    //so by the time we get here, we have an array 'productsJSX' that holds a bunch of <product> components

    return (
      <div className="App">
      {/*
      Below, we used the product class defn to create a new Product instance ..we passed in three props to the particular instance
      - passed a prop called "name" whose value is "socks"
      - passed a prop called "price" whose value is "2.99"
      - passed a prop called "description" whose value is "they keey feet warm"
      */}

      {/* in the line below, we are takign the array storied in the variable JSX, and dis
      */}
      { productsJSX }
      <Product name="socks" price={2.99} description="They keep feet warm."/>
      <Product name="shoes" price={129.99} description="They get you moving."/>
      </div>
    );
  }
}

export default App;
