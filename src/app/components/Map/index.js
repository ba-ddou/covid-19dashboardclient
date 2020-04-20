import React from 'react';
import "./styles.scss";
import {Map,Marker,Popup,TileLayer,ZoomControl} from "react-leaflet";


const MapComponent = () => {
    return (  
        <Map className="Map" center={[31.791702, -7.092620]} zoom={2.2} zoomControl={false}> 
        <TileLayer url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
             attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"/>
        <ZoomControl position="topright" />
     </Map>
    );
}
 
export default MapComponent;