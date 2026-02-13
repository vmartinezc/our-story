import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

function Map() {
  const position = [14.0607, -87.1825];

  return (
    <MapContainer 
      center={position} 
      zoom={13} 
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Your story begins here!
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
