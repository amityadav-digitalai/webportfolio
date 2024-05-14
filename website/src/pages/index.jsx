import React from 'react';
import {ProductHomePage} from '../components/ProductPage';
import {HomePageData} from '../../lib/teamforge-data';
const ReleasePage = () => {
  return <ProductHomePage HomePageData={HomePageData} />;
};

export default ReleasePage;
