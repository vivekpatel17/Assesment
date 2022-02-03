import React from 'react';

import Card from './Card';

import classes from './Display.module.css';

import legbar from './images/legbar.jpg';
import traphouse from './images/traphouse.jpg';
import girlwild from './images/girlwild.jpg';

function Display() {
    const data = [
        {
            imgURL: legbar,
            title: 'leg bar',
            button: {
                title: '@0x2bc8c',
                text: '0x2bc08c...'
            }
        },
        {
            imgURL: traphouse,
            title: 'Meta Trap house',
            button: {
                title: '@freezecorle...',
                text: '0x890aac...'
            }
        },
        {
            imgURL: girlwild,
            title: 'Girl Gone Wild',
            button: {
                title: '@0xbefad52...',
                text: '0xbe0fad...'
            }
        },
    ]

    return (
        <div className={classes.display}>
            {data.map((data) => <Card 
                data = {data}
            />
            )}
        </div>
    );
}

export default Display;
