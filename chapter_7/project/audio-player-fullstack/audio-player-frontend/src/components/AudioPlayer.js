import React from 'react'; 

class AudioPlayer extends React.Component {
    render(){
   
        
        return(
            <div className="container-fluid">
                <h1>Audio Player</h1>
                {/*  Previous Button */}
                <h4>{this.props.songs[this.props.currentSong].title}</h4>
                <div> 
                {/* In src tag: 
                    1. First, I refer to original songs array passed in with: this.props.songs

                    2.  Then, I select the appropriate Song object in that array with []. What's in the [] must evaluate to a index number so I can actually grab the right Song object to play. Since I created a currentSong State that evaluates to/matches the index/id of a Song object AND passed currentSong to this component, [this.props.currentSong] evaluates to either [0], [1], [2]. 

                    3. Lastly, I point src to the audio file for that Song object using .source (created in Song constructor fn in index.js). 
                    */}
                    <audio 
                        id="audio" 
                        src={this.props.songs[this.props.currentSong].source}>
                    </audio>
                    
                   {/*  Previous Button */}
                    <button
                        disabled={this.props.currentSong === 0 ? true : false}
                        onClick={this.props.prevSong}>
                            <span className="glyphicon glyphicon-backward"></span>
                        Prev
                    </button> 
                    
                    {/*  Play/Pause Button */}
                    <button 
                        //Wrap onClick in () => in ordet to pass currentSong as param. 
                        onClick={() => this.props.playAudio (this.props.currentSong)}>{this.props.playing === true ? "Pause" : "Play"}
                            <span className={this.props.playing === true ? "glyphicon glyphicon-pause" : "glyphicon glyphicon-play"}>
                            </span>
                    </button> 
                    
                    {/*  Next Button */}
                    <button
                        disabled={this.props.currentSong === this.props.songs.length - 1 ? true : false}
                        onClick={this.props.nextSong}>
                        Next
                            <span className="glyphicon glyphicon-forward"></span>
                    </button>

                    
                </div>  
            </div>
        )
    }
}

export default AudioPlayer; 