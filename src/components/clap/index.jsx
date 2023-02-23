import React, { useState } from 'react';
import clapping from '../assets/Icons/clapping.svg';
import { UPDATE_BLOG_DATA } from '../../constants/apiEndPoints';
import makeRequests from '../../utils/makeRequests';
import './Clap.css';

export default  function  Clap({id,claps}) {
console.log('claps'+claps);
  const [clap, setClap] = useState(claps);
  const handleClap = async () => {
    try{
   
    await makeRequests(UPDATE_BLOG_DATA(id),{
      data:{
        claps: 1 + clap   
      }   
    })
    setClap(clap+1);
  }catch(e){
    console.log(e);
  };
}
  return (
    <div className='clap'>
      <img alt ='clap' className="icons" onClick={handleClap} style={{ ...(clap === 0 && { opacity: 0.25 }) }} src={clapping} />
      <h4> {clap} </h4>
    </div>
  );
}