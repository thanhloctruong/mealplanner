import React from 'react';

function Magazine(props) {

    return (
        <div className="col-1 ">
            
            <img
              src={props.src}
              alt=""
              className="right__content--img"
            />
            <h2>{props.title}</h2>
            <p>
              {props.text}
            </p>
            
          </div>
    );
}

export default Magazine;