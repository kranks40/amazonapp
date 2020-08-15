import React from 'react';
import './Home.css'
import Product from './Product';

function Home() {
    return (
        <div className='home'>
           <img className='home__image' 
           src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_FT_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB408004054_.jpg' 
           alt=''></img>

          <div className='home__row'>
          <Product id='1234'
           title='Dji Dornes'
           price={344.95}
           rating={5}
           image='https://images-na.ssl-images-amazon.com/images/I/61j4acmknmL._AC_SL1500_.jpg'/>

          <Product id='1234'
           title='Dji Dornes'
           price={344.95}
           rating={5}
           image='https://images-na.ssl-images-amazon.com/images/I/61j4acmknmL._AC_SL1500_.jpg'/>
          </div>  
          <div className='home__row'>
          <Product id='1234'
           title='Dji Dornes'
           price={344.95}
           rating={5}
           image='https://images-na.ssl-images-amazon.com/images/I/61j4acmknmL._AC_SL1500_.jpg'/>

          <Product id='1234'
           title='Dji Dornes'
           price={344.95}
           rating={5}
           image='https://images-na.ssl-images-amazon.com/images/I/61j4acmknmL._AC_SL1500_.jpg'/>

          <Product id='1234'
           title='Dji Dornes'
           price={344.95}
           rating={5}
           image='https://images-na.ssl-images-amazon.com/images/I/61j4acmknmL._AC_SL1500_.jpg'/>

<Product id='1234'
           title='Dji Dornes'
           price={344.95}
           rating={5}
           image='https://images-na.ssl-images-amazon.com/images/I/61j4acmknmL._AC_SL1500_.jpg'/>

          <Product id='1234'
           title='Dji Dornes'
           price={344.95}
           rating={5}
           image='https://images-na.ssl-images-amazon.com/images/I/61j4acmknmL._AC_SL1500_.jpg'/>
          </div>

        </div>
    );
}

export default Home
