import React from 'react';
import { PageHOC } from '../components';

const  CreateBattle = () => {
  return (
    <div>
      <h1 className="text-white text-xl">Hello From CreateBattle </h1>
    </div>
  )
};

export default PageHOC(
  CreateBattle,
  <>Create <br/> a new Battle </>,

  <> Create your won Battle and wait for other players to join you  the ultimiate  </>
);