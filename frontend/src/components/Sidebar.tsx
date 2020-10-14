import React from 'react'
import { FiArrowLeft } from 'react-icons/fi';
import mapMakerImg from '../img/mapmarker.svg';
import '../styles/components/sidebar.css'
import { useHistory } from 'react-router-dom';

export default function Sidebar(){
    const {goBack}=useHistory(); 
    return(
        <aside className="app-sidebar">
        <img src={mapMakerImg} alt="Happy" />

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>
    );
}