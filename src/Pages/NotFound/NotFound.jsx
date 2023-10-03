import React from 'react';
import Style from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={Style.container}>
            {/* Dit zal verschijnen er een blogpost wordt opvraagt die niet bestaat */}
            <h1 className={Style.title}>404 not found</h1>
            <p className={Style.text}>Blogpost niet gevonden</p>
        </div>
    );
};

export default NotFound;
