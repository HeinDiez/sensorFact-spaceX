import React from 'react';
import * as MUI from '@mui/material';
import rocket from '../../assets/rocket.png';

export default function Header() {
    return (
        <>
            <div className="p-2" />
            <MUI.Container>
                <div className="bg-white-10 p-2 header-nav-wrapper header-nav-wrapper-xl rounded px-4 navbar-dark">
                    <div className="app-nav-logo">
                        <a href="/" title="SensorFort Assignment" className="app-nav-logo">
                            <div className="app-nav-logo--icon rounded-sm">
                                <img alt="Space X Exploration" src={rocket} />
                            </div>
                            <div className="app-nav-logo--text">
                                <span>SensorFort</span>
                                <b>Space X</b>
                            </div>
                        </a>
                    </div>
                    <div className="header-nav-menu d-none d-lg-block"></div>
                </div>
            </MUI.Container>
        </>
    );
}
