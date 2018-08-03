import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class Scores extends Component {

    render() {

        // Carbon Icons
        let carbonJSX = [];
        for (let i = 0; i < this.props.product.scores.carbon; i++) {
            carbonJSX.push(<i className="fas fa-truck black"></i>)
        }

        for (let i = 0; i < (5 - this.props.product.scores.carbon); i++) {
            carbonJSX.push(<i className="fas fa-truck lightgrey"></i>)
        }

        // Water Icons
        let waterJSX = [];

            for (let i = 0; i < this.props.product.scores.water; i++) {
                waterJSX.push(<i className="fas fa-tint black"></i>)
            }

            for (let i = 0; i < (5 - this.props.product.scores.water); i++) {
                waterJSX.push(<i className="fas fa-tint lightgrey"></i>)
            }
        
        // Chemical Use Icons
        let chemicalsJSX = [];

        for (let i = 0; i < this.props.product.scores.chemicals; i++) {
            chemicalsJSX.push(<img className="nav-icons" src="/images/flask.png" alt="fillMeIn"/>)
        }

        for (let i = 0; i < (5 - this.props.product.scores.chemicals); i++) {
            chemicalsJSX.push((<img className="nav-icons" src="/images/flask-grey.png" alt="fillMeIn"/>))
        }

        return (
              
                    <Row> 
                        <Col md={4}>  
                            <div className="h6">Key Indicators</div>
            
                            {/* Carbon Score */}
                            <div className="mb-2">
                                <h6>Carbon: {this.props.product.scores.carbon} of 5</h6>{carbonJSX}
                            </div>

                            {/* Water Score */}
                            <div className="mb-2">
                                <h6>Water: {this.props.product.scores.water} of 5</h6>{waterJSX}
                            </div>
 

                            {/* Chemicals Score */}
                            <div className="mb-2">
                                <h6>Chemicals: {this.props.product.scores.chemicals} of 5</h6>{chemicalsJSX}
                            </div>
                        </Col>

                        <Col md={4}>    
                            {/* Process Scores */}
                            <div className="h6">Process Scores</div> 
                            
                            {/* Policy Score */}
                            <div className="mb-2">Policy <i className="fas fa-gavel black"></i><br></br>
                                 <div className="product-score-grade">{this.props.product.scores.policy}</div>
                            </div> 
                            
                            {/* Audit Score */}
                            <div className="mb-2">Auditing <i className="fas fa-clipboard-check black"></i><br></br>
                                <div className="product-score-grade">{this.props.product.scores.audit}</div>
                            </div> 
                        
                             {/* Traceability Score */}
                             <div className="mb-2">Traceability <i className="fas fa-crosshairs black"></i><br></br>
                                <div className="product-score-grade">{this.props.product.scores.traceability}</div>
                            </div>
                               
                            
                        </Col>
                        <Col md={4}> 
                            {/* Certifications */}
                            <div className="h6">Certifications</div>
                            <div className="mb-2">
                                <span>
                                    <img className="nav-icons" src="/images/bluesign-logo.png" alt="Bluesign logo"/>
                                </span>  
                                Bluesign: <i className={this.props.product.scores.bluesign === true ? "far fa-check-circle black" : "far fa-times-circle black"}> </i>
                            </div> 

                            <div className="mb-2">
                                <span>
                                    <img className="nav-icons" src="/images/fairtrade-logo.jpg" alt="Fairtrade logo"/>
                                </span>  
                                Fairtrade: <i className={this.props.product.scores.fairtrade === true ? "far fa-check-circle black" : "far fa-times-circle black"}> </i>
                            </div>                           
                        </Col>
                    </Row>
                
        );
    }
}

export default Scores;