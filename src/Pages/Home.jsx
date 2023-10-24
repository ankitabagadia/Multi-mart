import React, { useEffect } from 'react'
import Helmet from '../Components/Helmet/Helmet'
import "../Styles/Home.css"
import { Container,Row,Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'
import { Link } from 'react-router-dom'
// import {motion} from 'framer-motion'
import Services from '../Services/Services'
import ProductsList from '../Components/UI/ProductsList'
import Clock from '../Components/UI/Clock'
import products from '../assets/data/products'
import { useState } from 'react'
import counterImg from '../assets/images/counter-timer-img.png'

const Home = () => {

  const [trendingProducts,setTrendingProducts] = useState([])
  const [bestSalesProducts,setBestSalesProducts] = useState([])

  const [mobileProducts,setMobileProducts] = useState([])
  const [wirelessProducts,setWirelessProducts] = useState([])

  const [popularProducts,setPopularProducts] = useState([])
 
  const year = new Date().getFullYear();

  useEffect(()=>{
    const filteredTrendingProducts = products.filter(item=>item.category ==='chair');
    const filteredBestSalesProducts = products.filter(item=>item.category ==='sofa');

    const filteredMobileProducts = products.filter(item=>item.category ==='mobile');
    const filteredWirelessProducts = products.filter(item=>item.category ==='wireless');

    const filteredPopularProducts = products.filter(item=>item.category ==='watch');

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);

    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);

    setPopularProducts(filteredPopularProducts);

  },[]);

  return (
    <>
    <Helmet title={'Home'}>
      <section className='hero_section'>
    <Container>
      <Row>
        <Col lg='6' md='6'>
          <div className='hero_content'>
              <p className="hero_subtitle">Trending Product in</p>
              <h2>Make Your Interior More Minimalistics and Modern </h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.Cupiditate porro illo harum eum quisquam commodi beatae architecto sapiente reprehenderit perferendis!</p>
              <button whileTap={{scale:1.2}} className='buy_btn'>
                <Link to='/shop'>Shop Now</Link>
              </button>
          </div>
        </Col>
        <Col lg='6' md='6'>
          <div className="hero_img">
            <img src={heroImg} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
      </section>

      <Services/>

      <section className='trending_products'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section_title'>Trending Products</h2>
            </Col>
            <ProductsList data={trendingProducts}/>
          </Row>
        </Container>
      </section>

      <section className="best_sales">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section_title">Best Sales</h2>
            </Col>
            <ProductsList data={bestSalesProducts}/>
          </Row>
        </Container>
      </section>

      <section className='timer_count'>
        <Container>
          <Row>
            <Col lg='6' md='12' className='count_down-col'>
              <div className="clock_top-content">
                <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                <h3 className='text-white fs-5 mb-3'>Quality ArmChair</h3>
              </div>
              <Clock/>
              <button className="buy_btn store_btn">
                <Link to='/shop'>Visit Store</Link>
              </button>
              </Col>
            <Col lg='6' md='12' className='text-end counter_img'>
              <img src={counterImg}alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new_arrival">
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className="section_title">New Arrivals</h2>
            </Col>
            <ProductsList data={mobileProducts}/>
            <ProductsList data={wirelessProducts}/>
          </Row>
        </Container>
      </section>

      <section className="popular_category">
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className="section_title">Popular in Category</h2>
            </Col>
            <ProductsList data={popularProducts}/>
          </Row>
        </Container>
      </section>
    </Helmet>
    </>
  )
}

export default Home