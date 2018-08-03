import React, { Component } from 'react';
import { compose } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, InfoWindow, Marker } from 'react-google-maps';


const googleMapsKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

let pin = "/images/gold-pin.png";

const mapOptions = [
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#0a0a0a"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#0d0d0d"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": "21"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#353535"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#3b3b3b"
            }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#0d0d0d"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f9f9f9"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 17
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fffcfc"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 17
            }
        ]
    }
] 

//Dumb component(s)
const MyMapComponent = compose(
            withScriptjs,
            withGoogleMap
        ) (props =>
            <GoogleMap
                defaultZoom={2}
                defaultCenter={{ lat: 35.746512, lng: -39.462891}}
                defaultOptions={{styles: mapOptions,
                                streetViewControl: false,
                                scaleControl: false,
                                mapTypeControl: false,
                                panControl: false,
                                zoomControl: true,
                                rotateControl: false,
                                fullscreenControl: false
                                }}
            >
            {/* {console.log('product', this.props.product)} */}
                {props.product.markers.map((marker, id) => {
                    return <Marker
                        position={{ 
                            lat: marker.position.lat, 
                            lng: marker.position.lng 
                        }}
                        key={id}
                        notes={marker.notes}
                        id={marker.id}
                        windowOpen={marker.windowOpen}
                        onClick={() => {props.windowToggle(marker.id)}}
                        icon={{
                            url: pin
                        }}
                        
                        >
                        {
                            marker.windowOpen && <InfoWindow onCloseClick={() => props.windowToggle(marker.id)}> 
                                <NotesComponent 
                                    notes={marker.notes}
                                 /> 
                            </InfoWindow>
                        }
                        </Marker>
                    })}
                </GoogleMap>
    );

//Below is a smart component that doesn't have State or Methods, it simply returns HTML (therefore isn't really smart). Since it's giving the dumb MyMapComponent all the props necessary, the map just works (instead of looking like it's refreshing as it was with ) 
class Map extends Component {

    
    
    render() {

        return (
            <div>
                <MyMapComponent 
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleMapsKey}&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `300px` }}/>}
                    mapElement={<div style={{ height: `100%` }} />}
                    product={this.props.product}
                    windowToggle={this.props.windowToggle}
                />
            </div>
        );
    }
}

export const NotesComponent = (props) => {
    return(
    <div>
        <p>{props.notes}</p>
    </div>
    )
}

export default Map;

