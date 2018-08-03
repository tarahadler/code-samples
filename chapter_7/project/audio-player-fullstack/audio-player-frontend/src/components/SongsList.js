import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class SongsList extends Component {
    render() {

        //Using .map method to return a div element for each song: 
        let allSongsJSX = this.props.songs.map((song, i) => {
            //console.log(song.title)
            
            return <div>
                    {/* Use Link element to create a link to each song. */}
                        <Link className="hover" to={'/' + song.id}>
                            <h4>{song.title}</h4>
                        </Link>
                        <p>{song.description}</p>
                        <button 
                            onClick={() => this.props.playAudio(song.id)}>{this.props.playing === true ? "Pause" : "Play"}
                                <span className={this.props.playing === true ? "glyphicon glyphicon-pause" : "glyphicon glyphicon-play"}>
                                </span>
                        </button>
                        <br></br>
                        <br></br>
                    </div>
        })
 
        return (
            <div className="Sub">
                <h3>All Songs</h3>
                <div>{allSongsJSX}</div>
            </div>
        )
    }
}

export default SongsList;
