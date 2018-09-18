//https://img.ibs.it/images/9781492026921_0_240_0_0.jpg

import React from 'react';

const LilItem = props => {
    let desc = props.description;
    return (
        <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img  src={props.src}/>
              <span style={{color: 'black'}} className="card-title">{props.title}</span>
            </div>
            <div className="card-content">
              <p>{desc}...</p>
            </div>
            <div className="card-action">
              <a href="#">Подробне...</a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default LilItem;