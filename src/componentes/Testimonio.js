import React from 'react';
import '../style/style.css'

function Testimonio(props){
  return (
    <div className='container'>
      <img 
      src={require(`../img/${props.img}`)} 
      className='Testimonio-img'
      alt='Rey de los piratas, Monkey D. Luffy'/>


      <div className='Testimonio-text'>
        <h2 className='Testimonio-text-name'>{props.name}</h2>
        <h2 className='Testimonio-text-AKA'>{props.aka}</h2>
        <p className='Testimonio-text-description'>{props.description}</p>
      </div>
    </div>
  );
}

export default Testimonio;