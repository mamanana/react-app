import React, { useEffect } from 'react';
import Map from './map';

const Carcassonne = (props) => {
    return (
        <div className="pt-2 pb-2">
            <h1 className="text-center max-w-lg mx-auto">
                <img className="h-auto mx-auto" src="/images/carcassonne/splash.png" />
            </h1>
            <div class="flex flex-row flex-wrap py-4">
                <main role="main" class="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
                    <Map />
                </main>
                <aside class="w-full sm:w-1/3 md:w-1/4 px-2"></aside>
            </div>
        </div>
    );
};

export default Carcassonne;
