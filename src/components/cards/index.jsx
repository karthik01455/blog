import { React, useState, useEffect } from 'react';
import Clap from '../clap';
import Like from '../like';
import { useNavigate } from "react-router-dom";
import '../padding.css';
import './card.css';
import { GET_BLOG_DATA } from '../../constants/apiEndPoints';
import makeRequests from '../../utils/makeRequests';
import { BrowserRouter } from 'react-router-dom';
import { Router} from 'react-router-dom';
export default function Card() {
  const navigate = useNavigate();
  const [cardData, setCardData] = useState([]);
  const [error, setError] = useState();
 
  useEffect(() => {
    makeRequests(GET_BLOG_DATA,{}, navigate).then((res) => {
      console.log('res', res);
      setCardData(res);
    }).catch((e) => {
      console.log('&&&&&&&&&')
      setError(e);
  }, [])
  });
  if (error) {
    console.log('error', error);
    return (
      <div className="blogDataError">
       <p> {JSON.stringify(error)}</p>
      </div>
    );
  }
  const card = cardData.map((card, index) => {
    return (
      <div key={index} data-testid="card">
    <div  className='card-layout' >
      <img src={card.image} alt={card.image} />
      <div className='container'>
        <div className='date-time'>
          <h4> {card.date} </h4>
          <h4> {card.readingTime} </h4>
        </div>
        <div className='content-head'>
          <h4> {card.title} </h4>
        </div>
        <div className='content-body'>
          <h4> {card.description} </h4>
        </div>
      </div>
      </div>
      <div>
        <hr />
        <div className='card-footer'>
          <Clap claps={card.claps} id={card.id} />
          <Like liked={card.liked} id={card.id} />
        </div>
      </div>
      </div>
    );
  });
  return (
    <div className='padding' data-testid="cardBody">
      <div className='card'>
        {card}
      </div>
    </div>
  );
}