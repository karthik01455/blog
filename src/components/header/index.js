import React from 'react'
import './header.css'
import '../padding.css'
import Navbar from '../navbar'
export default function header() {
  return (
    <div className="body padding">
      <h1 >The Artifact</h1>
      <h2><i>Culture & Art blog</i></h2>
      <Navbar/>

    </div>
  )
}
