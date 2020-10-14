import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { FiArrowRight, FiPlus } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import mapMakerImg from '../img/mapmarker.svg'

import '../styles/pages/orphanageMap.css';
import mapIcon from '../utils/mapIcon';
import api from '../services/api';

interface Orphanage{
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  useEffect(() => {
    api.get('orphanages').then(res => {
      setOrphanages(res.data);
    })
  }, []);
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMakerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Jardim América </strong>
          <span>Rio de Janeiro</span>
        </footer>
      </aside>
      <Map
        center={[-22.810765, -43.3198072]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        {orphanages.map(orphanage => {
          return (
            <Marker
              key={orphanage.id}
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
            >
              <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                {orphanage.name}
              <Link to={`/orphanage/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#fff" />
                </Link>
              </Popup>
            </Marker>)
        })}

      </Map>
      <Link to="/orphanages/create" className="createOphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}
export default OrphanagesMap;