import React from 'react';
import '../../App.css';
import './Home.css';
import ProuductsBannerSection from '../ProductsBannerSection.js';
import ProductsSection from '../ProductsSection';
import './Products.css';

function Products(){
    return(
        <div className="products-content">
            <ProuductsBannerSection /> 
            {/* <ProductsSection/> */}
        </div>
    );
}

export default Products;