import React, { Component } from 'react';
import Glide from '@glidejs/glide'


class Lookbook extends Component {

    componentDidMount() {
        //Initiate GlideJS
        new Glide('.glide').mount()
    }

    render() {
        return (
            <div>
                <div className="glide glide-lookbook">
                    <div data-glide-el="track" className="glide__track">
                        <ul className="glide__slides">
                        <li className="glide__slide">
                            <img className="product-image" src="/images/golf-attire-man.jpg" alt="fillMeIn"/>
                        </li>
                        <li className="glide__slide">
                            <img className="product-image" src="/images/outfit-iso.jpg" alt="fillMeIn"/>
                        </li>
                        <li className="glide__slide">
                            <img className="product-image" src="/images/skateboard-guy.jpg" alt="fillMeIn"/>
                        </li>
                        <li className="glide__slide">
                            <img className="product-image" src="/images/bags-iso.jpg" alt="fillMeIn"/>
                        </li>
                        <li className="glide__slide">
                            <img className="product-image" src="/images/jeans-girl.jpg" alt="fillMeIn"/>
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
                            <img className="mini-image-lg-gallery" src="/images/golf-attire-man.jpg" alt="fillMeIn"/>
                        </button>
                        <button className="glide-bullet" data-glide-dir="=1">
                            <img className="mini-image-lg-gallery" src="/images/outfit-iso.jpg" alt="fillMeIn"/>
                        </button>
                        <button className="glide-bullet" data-glide-dir="=2">
                            <img className="mini-image-lg-gallery" src="/images/skateboard-guy.jpg" alt="fillMeIn"/>
                        </button>
                        <button className="glide-bullet" data-glide-dir="=3">
                            <img className="mini-image-lg-gallery" src="/images/bags-iso.jpg" alt="fillMeIn"/>
                        </button>
                        <button className="glide-bullet" data-glide-dir="=4">
                            <img className="mini-image-lg-gallery" src="/images/jeans-girl.jpg" alt="fillMeIn"/>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Lookbook;