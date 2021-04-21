import React from 'react';
import ReactDOM from 'react-dom';

function Card(props){
  return (
  <>
      <div className="cards">
      <div className="card">
        <img src={props.imgsrc} alt="myPic" className="card__img" />
        <div className="card__info">
          <span className="card__category">{props.title}</span>
          <h3 className="card__title">{props.sname}</h3>
          <a href={props.link} target="_blank">
            <button> Watch Now </button>
          </a>
        </div>
      </div>
      </div>
    </>
  );
}

ReactDOM.render(
    <>
     <Card 
       imgsrc="https://images-na.ssl-images-amazon.com/images/I/61gi3wqRKFL.jpg"
       title=" A Netflix Original Series "
       sname=" Stranger Things "
       link="https://www.netflix.com/in/title/80057281"
     />
     <Card />
    </>,
  document.getElementById('root')
);

