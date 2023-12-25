import React, { useState } from 'react';
import '../../../../styled/global.css';
import { cars } from '../../../../dummyData'; 
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Result = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleHeartClick = (item) => {
    setSelectedCar(item);
    console.log('Selected Car:', item);
  };

  const filteredCars = selectedCategory === 'ALL' 
    ? cars 
    : cars.filter(item => item.category === selectedCategory);

  return (
    <>
      <div className='cars'>
        <div className='cars-filter'>
          <ul>
            <li><Link to="#" onClick={() => handleCategoryClick('ALL')}> <img src='/images/bmw.png' alt='' /> ALL<span>({cars.length})</span></Link></li>
            <li><Link to="#" onClick={() => handleCategoryClick('m4')}> <img src='/images/bmw.png' alt='' /> M4 <span>({cars.filter(item => item.category === 'm4').length})</span></Link></li>
            <li><Link to="#" onClick={() => handleCategoryClick('f10')}> <img src='/images/bmw.png' alt='' /> F10 <span>({cars.filter(item => item.category === 'f10').length})</span></Link></li>
            <li><Link to="#" onClick={() => handleCategoryClick('f30')}> <img src='/images/bmw.png' alt='' /> F30 <span>({cars.filter(item => item.category === 'f30').length})</span></Link></li>
          </ul>
        </div>
        <div className='cars-cart'>
          {filteredCars.map((item, index) => (
            <div key={index} className='cart'>
              <div className='cart-image'>
                <img width={50} height={50} src={item.image} alt={item.title} />
              </div>
              <div className='cart-title'>
                <h2>{item.title}</h2>
                <Link> <img src='/images/bmw.png' alt='' /> Detail</Link>
              </div>
              <div className='basket-wishlist'>
              <Link to='/' onClick={() => handleHeartClick(item)}><i className="fa-solid fa-heart"></i></Link>
                <Link to=""><i className="fa-solid fa-cart-shopping"></i></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Result;
