import React from 'react';
import { MapContainer } from 'react-leaflet';
import { TileLayer } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';

const defaultLatLng: LatLngTuple = [48.865572, 2.283523];
const zoom:number = 8;

const LeafletMap:React.FC = () => {
    return (
        <MapContainer id="mainMap"
                center={defaultLatLng}
                zoom={zoom}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
        </MapContainer>
        
    )
}

export default LeafletMap;