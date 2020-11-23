import React from 'react';
import { MapContainer } from 'react-leaflet';
import { TileLayer } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';

const position: LatLngTuple = [48.865572, 2.283523];
const zoom:number = 8;

const LeafletMap:React.FC = () => {
    return (
        <MapContainer id="mainMap"
                center={position}
                zoom={zoom}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
        
    )
}

export default LeafletMap;