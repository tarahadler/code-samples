import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import LazyHero from 'react-lazy-hero';
import PropTypes from 'prop-types';

 

class Home extends Component {
    constructor() {
        super();
        //For Modal
        this.handleHide = this.handleHide.bind(this);
		this.state = {
            show: false,        
        }
    }

    handleHide() {
        this.setState({ show: false });
    }

    render() {

        return (
            <main>
                <div className="relative mb-5">
                    {/* Hero Image */}
                    <LazyHero  
                        opacity={0}
                        minHeight={"100vh"}
                        parallaxOffset={100}
                        imageSrc={"/images/yellow-sweater-sideview.jpg"}
                        responsive
                        >
                    </LazyHero>
                    <div className="hero-container">
                        <h1 className="hero-heading">Atacama Sweater</h1>
                        <Link to="/shop/productlist/3/map" className="quick-btn">Shop better</Link>
                    </div>
                </div>

                {/* Feature Gallery */}
                <div className="mt-30 mb-30">
                    <h1 className="text-center">Luxury <i class="far fa-gem"></i> is in each detail.<br></br><br></br><br></br><br></br><br></br><br></br> So ...<br></br><br></br><br></br><br></br><br></br><br></br> Where does a detail’s journey begin <i class="far fa-map fa-lg"></i>  <i class="fas fa-question"></i></h1>
                </div>
               
                <Grid className="mt-3 mb-5">   
                    <Row>
                        <Col sm={2}></Col>
                        <Col sm={8}>
                            <Row>
                                <Col sm={4}>
                                    <Thumbnail href="/learn" alt="171x180" src="/images/sheep-closeup-th.jpg" responsive="true"/>  
                                    <Thumbnail href="/learn" alt="171x180" src="/images/linen-flax-th.jpg" responsive="true"/> 
                                    <Thumbnail href="/learn" alt="171x180" src="/images/dark-wool-th.jpg" responsive="true"/>  
                                </Col>
                                
                                <Col sm={4}>
                                    <Thumbnail href="/shop/productlist" alt="171x180" src="/images/alpacas-clear-sky-th.jpg" responsive="true"/>
                                    <Thumbnail href="/shop/productlist/1/map" alt="171x180" src="/images/puffy-jacket-th.jpg" responsive="true"/>  
                                    <Thumbnail href="/shop/productlist" alt="171x180" src="/images/sheep-th2.jpg" responsive="true"/>                              
                                </Col>
                                <Col sm={4}>
                                    <Thumbnail href="/lookbook" alt="171x180" src="/images/pirarucu-closeup-th.jpg" responsive="true"/>
                                    <Thumbnail href="/lookbook" alt="171x180" src="/images/cotton-th.jpg" responsive="true"/>
                                    <Thumbnail href="/lookbook" alt="171x180" src="/images/silkworm-yellow-th.jpg" responsive="true"/>
                                </Col>
                            </Row> 
                        </Col>   
                        <Col sm={2}></Col>
                    </Row>
                </Grid>
                
                {/* Call to Action Banner */}
                <section className="cta-1">
                <Grid>
                    <Row>
                        <Col sm={2}></Col>
                        <Col sm={8}>
                            <Row>
                                <Col sm={12}>
                                    <h2>Good is the new black.</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <h4>Put your best foot forward in Atlas Apparel.</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <button className="quick-btn" onClick={() => this.setState({ show: true })} >Find your perfect fit.</button>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={2}></Col>
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
                </section>
            </main>   

        );
    }
}

Home.propTypes = {
    opacity: PropTypes.number,
    minHeight: PropTypes.string,
    parallaxOffset: PropTypes.string,
    imageSrc: PropTypes.string,
}

export default Home;