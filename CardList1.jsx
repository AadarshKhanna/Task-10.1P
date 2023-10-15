import React from 'react';
import Card from './Card';
import './Card.css';
import staffList from './staffList.js';
import { Button } from 'semantic-ui-react'

function cardComponent(staff) {
  return (
    <Card
      key={staff.key}
      avatar={staff.avatar}
      name={staff.name}
      position={staff.position}
      rating={staff.rating}
      author={staff.author}
    />
  );
}

function CardList1() {
  return (
    <div className='center'>
        <br></br>
      <Button>See All Articles</Button>
      <br></br>
      <br></br>
      <h1 className='center'>Featured Tutorials</h1>
      <div className='row center'>
        {staffList.slice(0, 3).map(cardComponent)}
      </div>
      <br></br>
      <br></br>
      <Button>See All Tutorials</Button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default CardList1;
