import React, { useState } from 'react';
import heartBlack from '../assets/Icons/heart-black.svg';
import heartRed from '../assets/Icons/heart-red.svg';
import { UPDATE_BLOG_DATA } from '../../constants/apiEndPoints';
import makeRequests from '../../utils/makeRequests';

export default function Like({liked,id}) {
  const [like, setLike] = useState(liked);
  
  const handleLike = async() => {
    await makeRequests(UPDATE_BLOG_DATA(id),{
      data:{
        liked: !like  
      }    
    })
    console.log('like1',like)
    setLike(!like);
  };
  console.log('like2',like)
  return (
    <div className='like'>
      <img alt='like' className='icons like' onClick={handleLike} src={like ? heartRed : heartBlack} />
    </div>
  );
}