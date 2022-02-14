import React from "react";
import Loaders from '../../assets/loading.gif';
import './Loader.css'

function Loader() {
  return (
    
    <img src={Loaders} alt=""  className="spinner"/>
  );
}

export default Loader;
