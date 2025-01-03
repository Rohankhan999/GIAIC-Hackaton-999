import React from 'react';
import Features from './components/features';
import Latestproduct from './components/Lastestproduct';
import TopBar from './components/Topbar';
import Services from './components/services';
import HeroSection from './components/hero';
import Header from './components/Header';
import Trendingproduct from './components/TrendingProduct';
import Trending from './components/Trending';
import Discountitem from './components/Discountitems';
// import Category from './components/shoplist';
import Blog from './components/Blog';
import Footer from './components/footer';
import ShopList from './components/shoplist';



function page() {
  return (
    <div>
  
  <TopBar/>
     <Header/> 
     <HeroSection/>
     <Features/>
     <Latestproduct/>
     <Services/>
     <Trendingproduct/>
     <Trending/>
     <Discountitem/>
     {/* <ShopList/> */}
     <Blog/>
     <Footer/>
    </div>
  )
}

export default page