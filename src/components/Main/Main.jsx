import React from 'react';
import Cardlist from '../Cardlist/Cardlist';
import Data from '../DataForCardlist/Data';

function Main(props, list) {
    return (
        <div>
        <Cardlist posts={list}/>
        </div>
    );
}

export default Main;