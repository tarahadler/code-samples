import React, { Component } from 'react';
import { Switch, Link, NavLink, Route } from 'react-router-dom'; 
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';
import Home from './components/Home';
import Learn from './components/Learn';
import Lookbook from './components/Lookbook';
import Shop from './components/Shop';
import Locate from './components/Locate';


class App extends Component {
  constructor() {
		super();
		this.state = {
			hidden: false,
      shown: true, 
  }
}
  
  toggle = () => {
		this.setState({
			hidden: !this.state.hidden,
		});
	}


  render() {
    let hidden = {
      display: this.state.hidden ? "block" : "none"
    };

    return (
        // Main Nav
        <div className="a-app-container">
          <nav className="a-navbar">
            <button className="menu-button" onClick={() => this.toggle(this)}>
              <img src={this.state.hidden === false ? "/images/outline_menu_black_18dp.png" : "/images/outline_close_black_18dp.png"}  alt="menu" />
            </button>

            <div className="a-brand">
              <Link to="/"><img className="logo" src="/images/atlas apparel logo.png" alt="home"/></Link> 
            </div>
            
          <div style={hidden} className="a-nav mr-2">
              <NavLink className="a-nav-link" to="/learn">Learn</NavLink>
              <NavLink className="a-nav-link" to="/lookbook">Lookbook</NavLink>
              <NavLink className="a-nav-link" to="/shop/productlist">Shop</NavLink>
              <NavLink className="a-nav-link" to="/locate">Locate</NavLink>
              <NavLink className="a-nav-link" to="#">
              <i className="fas fa-heart fa-lg"></i>
                <div className="a-nav-link-text">Wishlist</div>
              </NavLink>
              <NavLink className="a-nav-link" to="#">
              <i className="fas fa-shopping-bag fa-lg"></i>
              <div className="a-nav-link-text">Cart</div>
              </NavLink>
                
                {/* SVG Option */}
                {/* <svg className="nav-icons" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="24" height="24" style={{msTransform: 'rotate(360deg)'}} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M17 17.998a2 2 0 0 1 0 4 1.99 1.99 0 0 1-1.99-2c0-1.105.884-2 1.99-2zm-16-16h3.265l.947 2H20a1 1 0 0 1 .876 1.482L17.3 11.97a2 2 0 0 1-1.749 1.028H8.101l-.897 1.63-.032.12c0 .14.112.25.25.25H19v2H7a2 2 0 0 1-1.755-2.96l1.352-2.453L3 3.998H1v-2zm6 16a2 2 0 0 1 0 4 1.99 1.99 0 0 1-1.99-2c0-1.105.884-2 1.99-2zM16 11l2.778-5H6.138L8.5 11H16z" fill="#626262"/></svg>
                <div className="a-nav-link-text">Cart</div> */}

              
            </div>
          </nav>
          {/* Main Routes */}
        <main className="main-container">
          <Switch>
            <Route 
                exact path='/' 
                render={ (props) => 
                    {return <Home/>} } />

            <Route 
                path='/locate' 
                render={(props) => 
                    {return <Locate 
                        match={props.match}
                        product={this.state.product}/>}} />

            <Route 
                path='/shop' 
                render={ (props) => 
                    {return <Shop/>} } />
            
            <Route 
                path='/lookbook' 
                render={ (props) => 
                    {return <Lookbook/>} } />
            
            <Route 
                path='/learn' 
                render={ (props) => 
                    {return <Learn/>} } />
          </Switch> 
        </main>
        {/* Footer Nav */}
        <footer className="footer-styles">
          <Grid> 
              <Row> 
                <Col sm={5}>
                  <img className="footer-logo" src="/images/atlas-apparel-logo-full.png" alt="logo"/>
                </Col>
                <Col sm={7}>
                  <Row> 
                    <Col sm={3}>
                        <h6 className="footer-heading">About Us</h6>
                        <ul className="list-unstyled footer-nav">
                            <li><NavLink to="/learn">Indicators</NavLink></li>
                            <li><NavLink to="/learn">Affiliates</NavLink></li>
                            <li><NavLink to="/learn">Affiliates</NavLink></li>
                            <li><NavLink to="/learn">Careers</NavLink></li>
                            <li><NavLink to="/learn">Ambassadors</NavLink></li>
                        </ul>
                    </Col>
                    <Col sm={3}>
                        <h6 className="footer-heading">Service</h6>
                        <ul className="list-unstyled footer-nav">
                            <li><NavLink to="/learn">Closet Curator</NavLink></li>
                            <li><NavLink to="/learn">Store Locator</NavLink></li>
                            <li><NavLink to="/learn">Editorials</NavLink></li>
                            <li><NavLink to="/learn">My Account</NavLink></li>
                        </ul>
                    </Col>
                    <Col sm={2}>
                        <h6 className="footer-heading">Shop</h6>
                        <ul className="list-unstyled footer-nav">
                            <li><NavLink to="/learn">Men</NavLink></li>
                            <li><NavLink to="/learn">Women</NavLink></li>
                            <li><NavLink to="/learn">Children</NavLink></li>
                        </ul>
                    </Col>
                    <Col sm={3}>
                        <h6 className="footer-heading">Support</h6>
                        <ul className="list-unstyled footer-nav">
                            <li><NavLink to="/learn">Customer Care</NavLink></li>
                            <li><NavLink to="/learn">FAQ</NavLink></li>
                        </ul>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Grid>
        </footer>
      </div>

    );
  }
}

export default App;
