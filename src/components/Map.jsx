import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

function Map() {
  const places = [[14.0607, -87.1825], [42.3222599, -83.1763145]];

  // Past MVP: Add this to JSON file, then import it and use it here
  const family_data = {
    person_a: {
      name: "Valeria",
      location: places[0],
      grandparents: {
        maternal: {
          granpa: "Pedro Castro Fiallos", 
          grandma: "Juana Ramona Amador"
        },
        paternal: {
          granpa: "Víctor Martínez Silva", 
          grandma: "Mayra Soledad Cáceres Rivera"
        }
      },
      parents: {
        mother: "Rosa Amalia Castro Amador",
        father: "Victor Martínez Cáceres"
      },
      siblings: ["Víctor Ariel Martínez Castro", "Víctor Alejandro Martínez Castro"],
      nephews: []
    },
    person_b: {
      name: "Toño",
      location: places[1],
      grandparents: {
        maternal: {
          granpa: "Ronald James", 
          grandma: "Patricia James"
        },
        paternal: {
          granpa: "Joseph Yoskovich", 
          grandma: "Loretta Yoskovich"
        }
      },
      parents: {
        mother: "Edward Joseph Yoskovich",
        father: "Kimberly Ann Yoskovich"
      },
      siblings: ["Jessica Maw", "Jai Maw"],
      nephews: ["Laila Maw", "Quinn Maw", "Lucy Maw", "Pippa Maw"]
    }
  }

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
      <Marker position={places[0]}>
        <Popup>
          {family_data.person_a.name}'s story starts here!
        </Popup>
      </Marker>
      <Marker position={places[1]}>
        <Popup>
          {family_data.person_b.name}'s story starts here!
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
