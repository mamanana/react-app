import React, { useEffect } from 'react';
import Map from './map';

const Carcassonne = (props) => {
    return (
        <div className="flex flex-row flex-wrap">
            <main role="main" className="w-full sm:w-2/3 md:w-3/4">
                <Map />
            </main>
            <aside className="w-full sm:w-1/3 md:w-1/4 px-2 py-4 bg-amber-300">
                <h1 className="text-center max-w-lg mx-auto">
                    <img className="h-auto mx-auto" src="/images/carcassonne/splash.png" />
                </h1>
                <div className="py-4">
                    <h3>Log</h3>
                    <div className="overflow-auto bg-white h-36"></div>
                </div>
            </aside>
        </div>
    );
};

export default Carcassonne;
