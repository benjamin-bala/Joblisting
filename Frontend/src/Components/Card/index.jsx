import React from 'react';
import './index.css';

export default function Card({ job }) {
  console.log(job);

  return (
    <div className='card'>
      <div className='card__image'></div>
      <div className='card__content'>
        <p>5h ago | {job.category}</p>
        <h2>{job.title}</h2>
        <p>Scoot</p>
      </div>
      <div className='card__footer'>
        <p>{job.location}</p>
      </div>
    </div>
  );
}
