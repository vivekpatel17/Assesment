import React from 'react';

import classes from './Card.module.css';

function Card(props) {
  return (
      <div className={classes.card}>
            <div className={classes.img}>
                <img src={props.data.imgURL} alt=""/>
            </div>
            <div className={classes.data}>
                <div>
                    <h1>{props.data.title}</h1>
                    <button className={classes.btntext}>
                        <p>{props.data.button.title}</p>
                        <p>{props.data.button.text}</p>
                    </button>
                </div>
            </div>
      </div>
  );
}

export default Card;
