import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import TravelProducts from '../TravelProducts/TravelProducts';
import Branch from './Branch/Branch';

const Home = () => {
    return (
        <div>

<Banner></Banner>

<Branch></Branch>
   <Services></Services>   

   <TravelProducts></TravelProducts>
   <Contact></Contact>
   <Footer></Footer>
        </div>
    );
};

export default Home;