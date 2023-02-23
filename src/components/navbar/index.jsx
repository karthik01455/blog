import React from 'react'
import './navbar.css'
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  return (
   
    <div class='nav'>
    <ul>
          <li><a href='/home/blog'>Blog</a></li>
          <li><a href='/home/about'>About</a></li>
          <li><button onClick={()=>
          {
            navigate('/home/blog');
          }} data-testid='Contact'>Contact</button></li>
        </ul>
    </div>
  )
}
