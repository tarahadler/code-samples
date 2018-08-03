import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class SongDetails extends Component {
    render() {

        //Using .find method to return a single song: 
        let songJSX = this.props.songs.find((song, i) => {

            //Note, I referred to "dog-routes-params-example" for this part. 
                //console.log(this.props.match.params.songId)
                //console.log(typeof this.props.match.params.songId)
                //Need to convert string to number (as below)
            return song.id === Number(this.props.match.params.songId)
        })

        return (
            <div className="Sub">
                <h3>Particular Song</h3>
                <h4>{songJSX.title}</h4>
                <p>{songJSX.description}</p>
                <button 
                    onClick={() => this.props.playAudio(songJSX.id)}>{this.props.playing === true ? "Pause" : "Play"}
                        <span className={this.props.playing === true ? "glyphicon glyphicon-pause" : "glyphicon glyphicon-play"}>
                        </span>
                 </button> 
                
                <button id="Home">
                <Link to="/"> Home </Link>
                </button>
            </div>
        )
    }
}


export default SongDetails;