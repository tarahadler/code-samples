import React, { Component } from 'react';
import { Grid, Row, Col, Modal } from 'react-bootstrap';
import { Switch, NavLink, Route } from 'react-router-dom';
import Glide from '@glidejs/glide'
import Map from './Map';
import Story from './Story';
import Scores from './Scores';


class ProductItem extends Component {
    constructor() {
        super();
        this.handleHide = this.handleHide.bind(this);

        //State is necessary here because the entire bc the entire Product State (in Shop) gets updated on each click on an InfoWindow on the Map
        this.state = {
            show: false,
            product: {
                id: 1,
                brand: "",
                name: "",
                price: "",
                markers: [
                    {
                        id: "",
                        position: {
                            lat: "",
                            lng: ""
                        },
                        notes: "", 
                        windowOpen: false
                    }, 
                    {
                        id: "",
                        position: {
                            lat: "",
                            lng: ""
                        },
                        notes: "", 
                        windowOpen: false
                    }, 
                    {
                        id: "",
                        position: {
                            lat: "",
                            lng: ""
                        },
                        notes: "", 
                        windowOpen: false
                    }, 
                    {
                        id: "",    
                        position: {
                            lat: "", 
                            lng: ""
                        },
                        notes: "", 
                        windowOpen: false
                    }
                ],
                story: "",
                scores: {
                    carbon: "",
                    water: "",
                    chemicals: "", 
                    policy: "", 
                    audit: "",
                    traceability: "",
                    bluesign: false, 
                    fairtrade: false
                }, 
                thumbnail: "",
                images: [],
                detailsFit: "",
                madeBy: ""
            }
        }
    }

    componentDidMount() {
        let product = this.props.product.find((product, i) => {
            return product.id === Number(this.props.match.params.productId)
        })
        if(product){
            this.setState({
                product: product
            })
        }
        //Initiate GlideJS
        new Glide('.glide').mount()
    }
    
    
    windowToggle = (idCheck) => {
        let markersArray = this.state.product.markers.map((marker, id) => {
            if (marker.id === idCheck) {
              return {
                ...marker,
                windowOpen: !marker.windowOpen
              };
            }
            return marker;
          })

          let updatedProduct = {
              ...this.state.product,
              markers: markersArray

          }

          this.setState({
              product: updatedProduct
          })
    };

    handleHide(e) {
        this.setState({ show: false });
    }
    

    render() {

        //console.log(this.state.product.images)

        // let imagesJSX = this.state.product.images.map((image, i) => {
        //     return  <li className="glide__slide">
        //     <img className="product-image" src={image} alt="tbd" />
        // </li>
        // })

        
        return (
            <div>
                <Grid className="mt-5 mb-5"> 
                    <Row>                                                
                        <Col sm={6} smPush={5}>
                            <h1 className="mt-0">{this.state.product.brand}</h1>
                            <h4>{this.state.product.name}</h4>
                            <h5>{this.state.product.price}</h5>
                            <nav className="product-nav"> 
                                <NavLink className="product-nav-link h5" to={`/shop/productlist/${this.state.product.id}/map`}>How it's Made</NavLink>
                                <NavLink className="product-nav-link h5" to={`/shop/productlist/${this.state.product.id}/story`}>Why to love it</NavLink>
                                <NavLink className="product-nav-link h5" to={`/shop/productlist/${this.state.product.id}/scores`}>Scores</NavLink>
                            </nav>

                        <Switch>
                        {/* Pass State & methods as props.  */}
                        <Route 
                            path='/shop/productlist/:productId/map' 
                            render={ (props) => 
                                {return <Map
                                    product={this.state.product}
                                    windowToggle={this.windowToggle}
                                />} } />

                        {/* Pass State & methods as props.  */}
                        <Route 
                            path='/shop/productlist/:productId/story' 
                            render={ (props) => 
                                {return <Story
                                    product={this.state.product}
                                />} } />
                        <Route 
                            path='/shop/productlist/:productId/scores' 
                            render={ (props) => 
                                {return <Scores
                                    product={this.state.product}
                                />} } />
                        </Switch>
                            <Row className="mt-2"> 
                                <Col sm={6}>
                                    <form>
                                        {/* In regular CSS, you can use "id" attribute in combination with "for" attribute to connect inputs with labels. 

                                        In React, mutable checked attributes (with change handlers) are written as "defaultChecked".

                                        In React, "for" attribute is written as "htmlFor". 
                                    
                                        */}

                                        {/* Size Selector Menu */}
                                        <div className="h6">Size</div>
                                        <div className="product-option-radio">                          
                                            <input id="size-xs" type="radio" name="size" defaultChecked /> 
                                            <label htmlFor="size-xs">XS</label>
                                        </div>
                                        
                                        <div className="product-option-radio">
                                            <input id="size-s" type="radio" name="size" />
                                            <label htmlFor="size-s">S</label>
                                        </div>

                                        <div className="product-option-radio">
                                            <input id="size-m" type="radio" name="size" />
                                            <label htmlFor="size-m">M</label>
                                        </div>

                                        <div className="product-option-radio">
                                            <input id="size-l" type="radio" name="size" />
                                            <label htmlFor="size-l">L</label>
                                        </div>

                                        <div className="product-option-radio">
                                            <input id="size-xl" type="radio" name="size" />
                                            <label htmlFor="size-xl">XL</label>
                                        </div>

                                        {/* Colour Selector Menu */}
                                        <div className="h6">Colour</div>
                                        <div className="product-option-radio">
                                            <input id="color-red" type="radio" name="color" />
                                            <label htmlFor="color-red" className="product-option-radio"> 
                                                <div className="color-swatch" style={{backgroundColor:'red'}}></div>
                                            </label>
                                        </div>
                                        <div className="product-option-radio">
                                            <input id="color-blue" type="radio" name="color" />
                                            <label htmlFor="color-blue" className="product-option-radio"> 
                                                <div className="color-swatch" style={{backgroundColor:'blue'}}></div>
                                            </label>
                                        </div>
                                        <div className="product-option-radio">
                                            <input id="color-black" type="radio" name="color" />
                                            <label htmlFor="color-black" className="product-option-radio"> 
                                                <div className="color-swatch" style={{backgroundColor:'black'}}></div>
                                            </label>
                                        </div>
                                        <div className="product-option-radio">
                                            <input id="color-orange" type="radio" name="color" defaultChecked/>
                                            <label htmlFor="color-orange" className="product-option-radio"> 
                                                <div className="color-swatch" style={{backgroundColor:'orange'}}></div>
                                            </label>
                                        </div>
                                        <div className="product-option-radio">
                                            <input id="color-purple" type="radio" name="color" />
                                            <label htmlFor="color-purple" className="product-option-radio"> 
                                                <div className="color-swatch" style={{backgroundColor:'purple'}}></div>
                                            </label>
                                        </div>
                                    </form>       
                                </Col>
                                <Col sm={6}>
                                    <button className="button button-block mb-1">
                                    Add to bag   <i className="fas fa-shopping-bag"></i> 
                                    </button>

                                    <button className="button button-block mb-1">
                                    Add to wishlist  <i className="fas fa-heart"></i>
                                        
                                    </button>
                                    <button 
                                        className="button button-block mb-1" 
                                        onClick={() => this.setState({ show: true })}>
                                    Try it on  <img id="measuring-tool-icon" src="/images/measuring-tool.png" alt="cart"/>
                                    </button>
                                    
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={4} smPull={6}>
                            <div className="glide">
                                <div data-glide-el="track" className="glide__track mb-2">
                                    <ul className="glide__slides mb-3">
                                    {/* {imagesJSX} */}
                                        <li className="glide__slide">
                                            <img className="product-image" src={this.state.product.images[0]} alt={this.state.product.name} />
                                        </li>
                                        <li className="glide__slide">
                                            <img className="product-image" src={this.state.product.images[1]} alt={this.state.product.name} />
                                        </li>
                                     
                                    </ul>
                                </div>

                                {/* <div data-glide-el="controls" className="glide-controls">
                                <button data-glide-dir="<" className="glide-arrow">
                                    <img  src="/images/back.svg" alt="back button" />
                                </button>
                                <button data-glide-dir=">" className="glide-arrow">
                                    <img  src="/images/forward.svg" alt="forward button" />
                                </button>
                            </div> */}

                                <div className="glide-bullets" data-glide-el="controls[nav]">
                                    <button className="glide-bullet" data-glide-dir="=0">
                                        <img className="mini-image" src={this.state.product.images[0]} alt={this.state.product.name} />
                                    </button>
                                    <button className="glide-bullet" data-glide-dir="=1">
                                        <img className="mini-image" src={this.state.product.images[1]} alt={this.state.product.name} />
                                    </button>
                                </div>
                            </div>

                            <h5 className="mt-3">Details  Fit</h5>
                            {this.state.product.detailsFit}
                            <h5>Made By</h5>
                            {this.state.product.madeBy}

                        </Col>
                    </Row>
                </Grid>
                <Modal
                    show={this.state.show}
                    onHide={this.handleHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                    >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                        Sign up for Atlas Apparel
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div className="mb-1">Good things are coming! If you're looking for the perfect fit when you order online? Sign up now to be the first to take part in our Smart Clothing Beta. We'll send you smart clothing to help take smarter measurements. </div>

                            <input placeholder="Email"className="form-control form-inline mr-3" type="email"/><button className="modal-btn" onClick={this.handleHide}>Sign me up</button>
                        
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default ProductItem;