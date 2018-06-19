import React from 'react';


const Images = props =>{
    return(
      <div className="images-container">
        <img src={props.url} alt="" />
      </div>
    );
  }
  export default Images;
