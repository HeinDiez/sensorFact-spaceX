import React from 'react';

export default function Footer() {
    return (
        <React.Fragment>
            <div className={'app-footer text-black-50 app-footer--shadow app-footer--opacity-bg bg-royal'}>
                <div className="app-footer--second text-white">
                    ©{' '}
                    <a href="/" className="text-white" target="_blank" title="spacex" rel="noopener noreferrer">
                        Space X Program 2023
                    </a>
                </div>
            </div>
        </React.Fragment>
    );
}
