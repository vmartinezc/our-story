import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import useMapData from '../hooks/useMapData';
import useTimeLineEvents from '../hooks/useTimeLineEvents';

function Map() {
  const { places } = useMapData();
  const { sortedEvents, sliderValue, selectedYearCoordinates } = useTimeLineEvents();
  const year = sortedEvents[sliderValue]?.year;
  
  return (
    <MapContainer
      center={places[0]}
      zoom={2} 
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
      />
      {selectedYearCoordinates.length > 0 && selectedYearCoordinates.map(ev => (
        <Marker key={ev.id} position={ev.coordinates}>
          {ev.title && (
            <Popup>
              <strong>{ev.title}</strong>
              <div>{ev.description}</div>
            </Popup>
          )}
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
