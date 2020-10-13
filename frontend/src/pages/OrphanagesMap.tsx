import React from 'react';
import {Link} from 'react-router-dom'
import {FiPlus} from 'react-icons/fi'
import {Map, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import mapMakerImg from '../img/mapmarker.svg'

import '../styles/pages/orphanageMap.css';

function OrphanagesMap(){
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMakerImg} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Jardim América </strong>
                    <span>Rio de Janeiro</span>
                </footer>
            </aside>
            <Map
                center={[-22.810765,-43.3198072]}
                zoom={15}
                style={{width:'100%', height:'100%'}}
            >
                <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
            </Map>
            <Link to="" className="createOphanage">
                <FiPlus size={32} color="#fff"/>
            </Link>
        </div>
        );
}
export default OrphanagesMap;