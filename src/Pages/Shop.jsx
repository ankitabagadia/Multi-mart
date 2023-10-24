import React from 'react'
import CommonSection from '../Components/UI/CommonSection';
import Helmet from '../Components/Helmet/Helmet';
import { Container,Row,Col } from 'reactstrap';
import '../Styles/Shop.css';
import products from '../assets/data/products'
import { useState } from 'react';
import ProductsList from '../Components/UI/ProductsList'

const Shop = () => {

  const [products,setProducts] = useState(products)
  const handleFilter = e => {
    const filterValue = e.target.value
    if(filterValue === 'sofa'){
      const filteredProducts = products.filter(item=> item.category === 'sofa')

      setProducts(filteredProducts);
    }

    if(filterValue === 'mobile'){
      const filteredProducts = products.filter(item=> item.category === 'mobile')

      setProducts(filteredProducts);
    }

    if(filterValue === 'chair'){
      const filteredProducts = products.filter(item=> item.category === 'chair')

      setProducts(filteredProducts);
    }

    if(filterValue === 'watch'){
      const filteredProducts = products.filter(item=> item.category === 'watch')

      setProducts(filteredProducts);
    }

    if(filterValue === 'wireless'){
      const filteredProducts = products.filter(item=> item.category === 'wireless')

      setProducts(filteredProducts);
    }
  }

  const handleSearch = e =>{
    const searchTerm = e.target.value
    const searchProducts = products.filter(item=> item.productName.
      toLowerCase().includes(searchTerm.toLowerCase()))

      setProducts(searchTerm)
  }

  return (
    <>
    <Helmet title='Shop'>
      <CommonSection title='Products'/>
      <section>
        <Container>
          <Row>
            <Col lg='3' md='3'>
              <div className="filter_widget">
                <select onChange={handleFilter}>
                <option>Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='6' className='text-end'>
            <div className="filter_widget">
                <select>
                <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg='6' md='12'>
              <div className="search_box">
                <input type="text" placeholder='Search....' onChange={handleSearch}/>
                <span><i class="ri-search-line"></i></span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className='pt-0'>
          <Row>
            {
              products.length === 0? (<h1 className='text-center fs-4'>No Products are Found</h1>) :
              (<ProductsList data={products}/>)
            }
          </Row>
        </Container>
      </section>
    </Helmet>
    </>
  )
}

export default Shop