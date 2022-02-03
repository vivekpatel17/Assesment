import React from 'react';

import classes from './Header.module.css';

import VerifiedIcon from '@mui/icons-material/Verified';

function Header() {
  return (
    <div className={classes.header}>
        <h1>Live Spaces</h1>
        <div>
            <p><VerifiedIcon fontSize='medium'/></p>
            <p>All NFTs on Cyber either belong to or were minted by their space creator.</p>
        </div>
    </div>
  );
}

export default Header;
