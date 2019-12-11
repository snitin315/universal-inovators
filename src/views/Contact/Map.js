import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export function MapContainer(){
    return (
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }

 
export default GoogleApiWrapper({
  apiKey: (AIzaSyAakmckdoSw41U9HtKorOg-WYdrmazA9Yo)
})(MapContainer)