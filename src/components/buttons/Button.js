import React from 'react';

import classes from './Button.module.css';

function Button() {

    return (
        <div className={classes.btn}>
            <button><p>&#128293; 24h Trending</p></button>
            <button><p>Latest shows</p></button>
            <button><p>Most popular</p></button>
            <button><p>&#128142; In Genesis</p></button>
            <button><p>&#128725; In Temple</p></button>
            <button><p>&#127786; In Void</p></button>
            <button><p>&#129421; #BAYC</p></button>
        </div>
    );
}

export default Button;