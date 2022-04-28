import React, { useEffect } from 'react'
import Announcement from '../components/Announcement';
import Header from '../components/Header';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Component1 from '../components/StringsComponent';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

function Home() {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <div>
      <Announcement />
      <Header />
      <Slider />
      <Categories />
      <Component1 />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home