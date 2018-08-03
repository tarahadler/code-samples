import React, { Component } from 'react';
import './App.css'

/* List of image urls ------------------------------
'http://imgur.com/9itd49u.png'
'http://imgur.com/n19BXfZ.png'
'http://imgur.com/VBwQmzA.png'
'http://imgur.com/nawDxVv.png'
-------------------------------------------------- */

class App extends React.Component {
  constructor(){
    super();
    this.state={
      index: 0
    }
    this.nextSlide=this.nextSlide.bind(this);
    this.previousSlide=this.previousSlide.bind(this);
  }

  nextSlide(){
    this.setState({index: this.state.index + 1})
  }

  previousSlide(){
    this.setState({index: this.state.index - 1})
  }

  render() {
    //2nd parameter is there to keep track of image array's index number. 
    //Ternary: Like an if statement in 1 line. 
    //condition ? resultTrue : resultFalse
    const myImages = this.props.imageUrls.map((image, index) => {
      return <img src={image} className={index===this.state.index ? '' : 'hidden'}/>
    })

		return (
			<div className="App">
				<h1>Calvin Carousel</h1>
			    <div>
            <button disabled={this.state.index === 0 ? true : false} onClick={this.previousSlide}>Previous</button>
			      	<span>{this.state.index + 1} of 4</span>
              <button disabled={this.state.index === this.props.imageUrls.length - 1 ? true : false} onClick={this.nextSlide}>Next</button>
			    </div>

          <div>
            {myImages}
          
          </div>
				
			</div>			
		)
	}
}

export default App;




//1. bring in image prop and make sure it works
//2. map the image array
//3. set up your state
//4. build your nextSlide & previousSlide methods
//5. bind those methods
//6. 

