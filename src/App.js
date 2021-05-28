import React, { useState } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
// import * as parkData from './data/skateboard-parks.json';
import Marker1 from './images/marker_1.png'; //아이콘 불러오기
import Marker2 from './images/marker_2.png';
import Marker3 from './images/marker_3.png';
import Marker4 from './images/marker_4.png';
import Marker5 from './images/marker_5.png';

import './App.css';

import LocationMarker from './LocationMarker'; //현재위치 찾아주는 기능

const icon1 = new Icon({
  iconUrl: Marker1,
  iconSize: [70, 70],
});

const icon2 = new Icon({
  iconUrl: Marker2,
  iconSize: [70, 70],
});
const icon3 = new Icon({
  iconUrl: Marker3,
  iconSize: [70, 70],
});
const icon4 = new Icon({
  iconUrl: Marker4,
  iconSize: [70, 70],
});
const icon5 = new Icon({
  iconUrl: Marker5,
  iconSize: [70, 70],
});

export default function App() {
  // const [activePark, setActivePark] = React.useState(null); //현재위치 찾아주는 기능
  let positions = [
    [35.5408455, 129.3242894, 23.69],
    [35.5411817, 129.3244302, 20.69],
    [35.5412533, 129.3236393, 20.69],
    [35.5412533, 129.3226393, 20.69],
    [35.5412533, 129.3216393, 20.69],
  ];
  // const markerIconNumber = positions.map(index)
  // const [str, setstr] = useState('');
  const makeMarker = positions.map((position, index) => (
    <Marker icon={icon1} position={position} />
  ));

  return (
    <MapContainer
      center={[35.5408455, 129.3242894, 19.69]}
      zoom={17}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* {positions.map((data) => {
        <Marker icon={icon1} position={[data[0], data[1], data[2]]}></Marker>;
      })} */}
      {/* <Marker icon={icon1} position={[35.5408455, 129.3242894, 19.69]}></Marker>
      <Marker icon={icon2} position={[35.5411817, 129.3244302, 20.69]}></Marker>
      <Marker icon={icon3} position={[35.5412533, 129.3236393, 20.69]}></Marker>
      <Marker icon={icon4} position={[35.5412533, 129.3226393, 20.69]}></Marker>
      <Marker icon={icon5} position={[35.5412533, 129.3216393, 20.69]}></Marker> */}

      {makeMarker}
      {/*현재위치를 찾아주는 기능*/}
      {/* <LocationMarker />  */}
    </MapContainer>
  );
}
