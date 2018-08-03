import React, { Component } from 'react';

class Story extends Component {
    render() {
        return (
            <div>
                <p>{this.props.product.story}</p>
            </div>
        );
    }
}

export default Story;