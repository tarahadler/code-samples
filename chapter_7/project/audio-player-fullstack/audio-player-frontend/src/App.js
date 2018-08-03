//REQUIRES
import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import SongsList from './components/SongsList';
import SongDetails from './components/SongDetails';
import AudioPlayer from './components/AudioPlayer';
import axios from 'axios';

//STATE 
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //To keep track of current song:
      currentSong: 0,

       //To flag whether something is playing:
      playing: false, 
      //Since songs now is pulled from server, create an initial State for songs:
      songs: [{
        source: '', 
        title: '',
        description: '', 
        id: ''
      }]
    }
    //Binding goes here if necessary. 
  }


//METHODS   
  playAudio = (id) => {
    //Use document.getElementById to select audio tag in Audio component: 
    let audio = document.getElementById("audio");
   
    //If nothing is playing, call .play to play music and
    //then call .setState: 
    if(!this.state.playing) {
      audio.play()
      this.setState({
        playing: true,
        currentSong: id     
      }) 
    } 
    //If something is playing, call .pause to stop music and
    //then call .setState: 
    else {
      audio.pause()
      this.setState({
        playing: false
      })
    }
  }

  //Used the Carousel Code-Along as a basis for creating this fn:
  nextSong = () => {
    this.setState({
      currentSong: this.state.currentSong + 1
    })
  }

  //Used the Carousel Code-Along as a basis for creating this fn:
  prevSong = () => {
    this.setState({currentSong: this.state.currentSong - 1, 
  })
}

//Use of CDM method... :
componentDidMount() {
  axios.get('http://localhost:8080/songs') 
       .then(result => {
       this.setState({
         songs: result.data})  
       }) 
       .catch(error => {
         console.log(error);
       })
}

//Use CDU method... :
componentDidUpdate() {
  let audio = document.getElementById("audio");

  if(this.state.playing) {
    audio.play() 
  } 
  else {
    audio.pause()
  }
}

  render() {
    //Testing what was brought in with the starter code: 
    //console.log(this.props.songs)

    return (
      <div className="App" >
      {/* Bring in Audio Player here – should always be in view. */}
        <AudioPlayer 
          songs={this.state.songs}
          currentSong={this.state.currentSong}
          playing={this.state.playing}
          playAudio={this.playAudio}
          prevSong={this.prevSong}   
          nextSong={this.nextSong}   
          /> 

        <Switch>
        {/* Switch between SongList view and dynamic SongDetails views. */}
          <Route 
            exact path="/" 
            render={()=><SongsList 
              /* Props for SongList go here */
              songs={this.state.songs}
              playing={this.state.playing}
              playAudio={this.playAudio}
              />
            }
            />

          <Route 
            path='/:songId'
            render={(props)=> { return <SongDetails 
              /* Props for SongDetails go here */
              
              match={props.match}
              songs={this.state.songs}
              playing={this.state.playing}
              playAudio={this.playAudio}
              />
            }
            }
            />
        </Switch>
      </div>
    );
  }
}

export default App;
