import React from 'react';
import {Link} from 'react-router-dom';

import { FiArrowRight } from 'react-icons/fi';

import '../styles/pages/landing.css'

import logoImg from '../img/logo.svg'

function Landing() {
    return (
        <div id="page-landing">
            <div className="content-arapper">
                <img src={logoImg} alt="" />
                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>
                <div className="location">
                    <strong>Jardim América</strong>
                    <span>Rio de Janeiro</span>
                </div>
                <Link to="app" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0,0,0,.8)" />
                </Link>
            </div>
        </div>
    );
}

export default Landing;