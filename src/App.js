import React from 'react'
import requests from './Db'
import View from './View'
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className='App'>
      <title>clne</title>
      <Nav/>
      <Banner/>
     
      {/* <Home></Home> */}
      <View isLargeRow title ="Neflix Originals" fetchurl={requests.netflix_originals}/>
      <View  title = "Trending" fetchurl={requests.trending}/>
      <View title = "Top Rated " fetchurl={requests.fetchToprated}/>
      <View  title = "Action " fetchurl={requests.action}/>
      <View title = "Animation" fetchurl={requests.animation}/> 
      <View  title = "Horror" fetchurl={requests.horror}/>
      <View  title = "Crime" fetchurl={requests.crime}/>
      
       

    </div>
  )
}

export default App