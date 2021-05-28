import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
// import * as parkData from './data/skateboard-parks.json';
import PngIcon from './images/leaf-green.png';
import './App.css';

import LocationMarker from './LocationMarker'; //현재위치 찾아주는 기능

export const icon = new Icon({
  iconUrl: PngIcon,
  iconSize: [38, 95],
});

export default function App() {
  // const [activePark, setActivePark] = React.useState(null);

  return (
    <MapContainer
      center={[35.5408455, 129.3242894, 19.69]}
      zoom={20}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={icon} position={[35.5408455, 129.3242894, 19.69]}>
        <Popup>1번</Popup>
      </Marker>
      <Marker icon={icon} position={[35.5411817, 129.3244302, 20.69]}>
        <Popup>2번</Popup>
      </Marker>
      <Marker icon={icon} position={[35.5412533, 129.3236393, 20.69]}>
        <Popup>3번</Popup>
      </Marker>
      {/*현재위치를 찾아주는 기능*/}
      {/* <LocationMarker />  */}
    </MapContainer>
  );
}
