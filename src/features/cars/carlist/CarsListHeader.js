import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowUpWideShort } from '@fortawesome/free-solid-svg-icons';
// import Categories from '../../categories/Categories';

const CarsListHeader = () => (
  <div className="carslist-header">
    <h2 className="h2 text-center mt-5 text-uppercase">
      <strong>Our Latest Cars</strong>
    </h2>
    <p className="fs-5 text-center text-muted mb-5">
      Please select a car from below to reserve
    </p>
    {/* <i
      className="brands-filter"
      onClick={() => { ShowCategories(true); }}
      aria-hidden="true"
    >
      <FontAwesomeIcon icon={faArrowUpWideShort} />
    </i>
    <Categories ShowCategories={ShowCategories} categoriesView={categoriesView} /> */}
  </div>
);

export default CarsListHeader;
