import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
// import * as parkData from './data/skateboard-parks.json';
import './App.css';
import LocationMarker from './LocationMarker';

export const icon = new Icon({
  iconUrl: '/skateboarding.svg',
  iconSize: [25, 25],
});

export default function App() {
  // const [activePark, setActivePark] = React.useState(null);

  return (
    <MapContainer
      center={[35.5313429, 129.3057098, 17.86]}
      zoom={20}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[35.5313429, 129.3057098, 17.86]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      {/*현재위치를 찾아주는 기능*/}
      {/* <LocationMarker />  */}
    </MapContainer>
  );
}
