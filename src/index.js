import React from 'react';
import ReactDOM from 'react-dom';

function Card(props){
  <>
      <div className="cards">
      <div className="card">
        <img src="" alt="myPic" className="card__img" />
        <div className="card__info">
          <span className="card__category">  </span>
          <h3 className="card__title"> Stranger Things </h3>
          <a href="" target="_blank">
            <button> Watch Now </button>
          </a>
        </div>
      </div>
      </div>
    </>
    
}

ReactDOM.render(
    <>
     <Card 
       imgsrc=""
       title=" A Netflix Original Series "
       sname=" Stranger Things "
       link="https://www.netflix.com/in/title/80057281"
     />
     <Card />
    </>,
  document.getElementById('root')
);

