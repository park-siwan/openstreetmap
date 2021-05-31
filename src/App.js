import React, { useState } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import './App.css';
import LocationMarker from './LocationMarker'; //현위치 찾는 기능

export default function App() {
  // const [activePark, setActivePark] = React.useState(null); //현위치 찾는 기능

  // DB에 있는 좌표값을 이 배열로 가져오면 마커가 순서대로 표시된다.
  let markerPositions = [
    [35.5408455, 129.3242894, 23.69],
    [35.5411817, 129.3244302, 20.69],
    [35.5412533, 129.3236393, 20.69],
    [35.5412533, 129.3226393, 20.69],
    [35.5412533, 129.3216393, 20.69],
  ];
  const markerIconStorage = []; //마커가 저장되는 곳

  //마커 이미지를 순서에 맞게 생성해주는 함수
  let markerIconGenerator = () => {
    for (let i = 1; i <= markerPositions.length; i++) {
      console.log(i);
      let icon = new Icon({
        iconUrl: `./images/marker_${i}.png`,
        iconSize: [70, 70],
      });
      markerIconStorage.push(icon);
    }
  };
  markerIconGenerator();

  //위치(포지션)가 들어온 순서대로 순번이 매겨진 마커를 생성한다.
  const markerMake = markerPositions.map((position, index) => (
    <Marker
      icon={markerIconStorage[index]}
      position={position}
      key={position[2].toString + index} //렌더링 성능향상용 고유 Key값
    />
  ));

  return (
    <MapContainer
      center={[35.5408455, 129.3242894, 19.69]} //첫 화면 설정
      zoom={17}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markerMake}

      {/* <LocationMarker />  */}
      {/*LocationMarker : 현위치 찾는 기능*/}
    </MapContainer>
  );
}
