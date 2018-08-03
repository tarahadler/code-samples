import React, { Component } from 'react';
import { compose, withStateHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, InfoWindow, Marker } from 'react-google-maps';


const googleMapsKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

let pin = "/images/gold-pin.png";

const mapOptions = [
    {
        "featureType": "all",
        "elementType": "labels",
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
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#944242"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "saturation": "-1"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "lightness": "-100"
            },
            {
                "gamma": "0.00"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "weight": "9.58"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#292929"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#494949"
            },
            {
                "saturation": "-85"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#888888"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#7f7f7f"
            },
            {
                "visibility": "off"
            },
            {
                "weight": "0.47"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station.bus",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "geometry",
        "stylers": [
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
                "color": "#dddddd"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]

const MapWithAMakredInfoWindow = compose(
    withStateHandlers(() => ({
        isOpen: false,
    }), {
    onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen,
        })
    }),
    withScriptjs,
    withGoogleMap
    )(props =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 43.6532, lng: -79.3832 }} 
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
        <Marker
            position={{ lat:  43.6532, lng: -79.3832}}
            onClick={props.onToggleOpen}
            icon={{
                url: pin
            }}
        >
            {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
            <AnotherNotesComponent 
                notes={<img className="nav-icons" src="/images/alpacas.jpg" alt="fillMeIn"/>}
            />
            </InfoWindow>}
        </Marker>
        <Marker
            position={{ lat: 44.397, lng: -80.644 }}
            onClick={props.onToggleOpen}
            icon={{
                url: pin
            }}
        >
            {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
            <AnotherNotesComponent 
                notes={<img className="nav-icons" src="/images/alpacas.jpg" alt="fillMeIn"/>}
            /> 
            </InfoWindow>}
        </Marker>
        <Marker
            position={{ lat:  43.6532, lng: -79.3832}}
            onClick={props.onToggleOpen}
            icon={{
                url: pin
            }}
        >
            {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
            <AnotherNotesComponent 
                notes={<img className="nav-icons" src="/images/green-skirt-1.jpg" alt="fillMeIn"/>} Mint Skirt
            />
            </InfoWindow>}
        </Marker>
        <Marker
            position={{ lat:  43.0532, lng: -79.2832}}
            onClick={props.onToggleOpen}
            icon={{
                url: pin
            }}
        >
            {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
            <AnotherNotesComponent 
            notes={<img className="nav-icons" src="/images/jeans-girl.jpg" alt="fillMeIn"/>} Jeans
            />
            </InfoWindow>}
        </Marker>
        <Marker
            position={{ lat:  43.7532, lng: -79.5832}}
            onClick={props.onToggleOpen}
            icon={{
                url: pin
            }}
        >
            {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
            <AnotherNotesComponent 
                notes={<img className="nav-icons" src="/images/bags-iso.jpg" alt="fillMeIn"/>}
            />
            </InfoWindow>}
        </Marker>
        
    </GoogleMap>
);




class Locate extends Component {

    render() {
        return (
            <div>
                <MapWithAMakredInfoWindow
                    googleMapURL= {`https://maps.googleapis.com/maps/api/js?key=${googleMapsKey}&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100vh` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    />
            </div>
        );
    }
}

export const AnotherNotesComponent = (props) => {
    return(
    <div>
        <p>{props.notes}</p>
    </div>
    )
}

export default Locate;