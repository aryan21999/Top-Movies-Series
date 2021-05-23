import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";
import "./index.css";
import Sdata from './Sdata';

function ncard(val,index){
  
}

ReactDOM.render(
    <>
    <h1 className='heading_style'> List of top 5 Netflix Series in 2020 </h1>

    {Sdata.map((val, index) => {
      return (
    <Card 
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
  />
  );
    })}
     
    </>,
  document.getElementById('root')
);

