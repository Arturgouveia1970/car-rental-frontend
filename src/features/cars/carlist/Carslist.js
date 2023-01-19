import React, { useState } from 'react';
// import './Carlist.css';
// import { useNavigate } from 'react-router-dom';
// import CarCard from '../../common/carcard/CarCard';
import Sidebar from '../../common/sidebar/Sidebar';
import CarsListHeader from './CarsListHeader';

const Cars = () => {
  // const navigate = useNavigate();
  // const HandleDetails = () => navigate('/cardetails');
  const [cars] = useState(
    [
      {
        id: 1,
        model: 'Lamborghini',
        year: 2019,
        price: 2750.00,
        image: 'https://wallup.net/wp-content/uploads/2019/09/848518-2010-lamborghini-sesto-elemento-concept-supercar-748x561.jpg',
      },
      {
        id: 2,
        model: 'Mercedes',
        year: 2020,
        price: 1750.00,
        image: 'https://carsguide-res.cloudinary.com/image/upload/f_auto%2Cfl_lossy%2Cq_auto%2Ct_default/v1/editorial/2017-Vision-Mercedes-Benz-Maybach-Concept-Pebble-Beach-Blue-Cabriolet-1200x800p-1.jpg',
      },
      {
        id: 3,
        model: 'Ferrari',
        year: 2021,
        price: 2150.00,
        image: 'https://cdn.carshowroom.com.au/media/21504120/news-ferrari-2022-gallery-01-0918.jpg',
      },
      {
        id: 4,
        model: 'McLaren',
        year: 2015,
        price: 2850.00,
        image: 'https://www.hdcarwallpapers.com/walls/2015_mclaren_650s_coupe_3-wide.jpg',
      },
      {
        id: 5,
        model: 'Nissan GT-R',
        year: 2016,
        price: 1600.00,
        image: 'https://www.gannett-cdn.com/-mm-/ade337e50c415e3e12cea926f24d60083ea40a92/c=284-400-2759-1798/local/-/media/USATODAY/test/2013/11/19/1384911451000-gt-r5.jpg?width=2475&height=1398&fit=crop&format=pjpg&auto=webp',
      },
      {
        id: 6,
        model: 'Ford GT',
        year: 1966,
        price: 1200.00,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Nxrx266lwb12Snk19ZTazAHaEK%26pid%3DApi&f=1&ipt=9eb90592a525f00f96d10ab9ec0ed0c76c7d111abcedf5a0e31ce604254742ab&ipo=images',
      },
      {
        id: 7,
        model: 'Porche 911',
        year: 2014,
        price: 2200.00,
        image: 'https://www.pixelstalk.net/wp-content/uploads/2016/09/HD-Porsche-911-Wallpaper.jpeg',
      },
    ],
  );

  const carStyle = {
    color: 'red',
    marginLeft: '600px',
    padding: '5px',
    fontSize: '18px',
    fontWheight: 'bolder',
    border: '1px solid',
    width: '120px',
  };

  return (
    <div className="carslist-cont">
      <Sidebar />
      <div className="carslist-wrapper">
        <CarsListHeader />
        <div className="car-cards-list">
          <ul>
            {cars.map((car) => (
              <>
                <li key={car.id}>
                  <img src={car.image} alt={car.model} style={{ width: '100%' }} />
                  <div
                    className="car-info"
                    style={
                      carStyle
                    }
                  >
                    <p>{car.model}</p>
                    <p>{car.year}</p>
                    <p>
                      $
                      {' '}
                      {car.price}
                      {' '}
                      per day
                    </p>
                  </div>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cars;
