import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Wish = ({ selectedCar }) => {
  return (
    <div className='wish'>
      {selectedCar && (
        <div className='selected-car'>
          <div className='cart-image'>
            <img width={50} height={50} src={selectedCar.image} alt={selectedCar.title} />
          </div>
          <div className='cart-title'>
            <h2>{selectedCar.title}</h2>
            <Link to='#'>Detay</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Wish;
