import React from 'react'
import '../Styles/Cart.css'
import Helmet from '../Components/Helmet/Helmet'
import CommonSection from '../Components/UI/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import tdImg from '../assets/images/arm-chair-01.jpg'
import { cartActions } from '../Redux/slice/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'


const Cart = () => {

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state)=> state.cart.totalAmount);

  return (
    <>
      <Helmet title='Cart'>
        <CommonSection title='Shopping Cart' />
        <section>
          <Container>
            <Row>
              <Col lg='9'>

                {
                  cartItems.length === 0 ? (<h2 className='fs-4 text-center'>No item added to the cart</h2>) :
                    (<table className="table bordered">
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Title</th>
                          <th>Price</th>
                          <th>Qty</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          cartItems.map((item, index) => (
                            <Tr item={item} key={index} />
                          ))
                        }
                      </tbody>
                    </table>
                    )}
                <Col lg='3'>
                  <div>
                    <h6 className='d-flex align-items-center justify-content-between'>SubTotal
                    <span className='fs-4 fw-bold'>${totalAmount}</span>
                    </h6>
                    
                  </div>
                  <p className='fs-6 mt-2'>taxes and shippind will calculate in checkout</p>
                  <div>
                    <button className='buy_btn w-100'>
                      <Link to='/shop'>Continue Shopping</Link>
                    </button>

                    <button className='buy_btn w-100 mt-3'>
                      <Link to='/checkout'>Checkout</Link>
                    </button>
                  </div>
                </Col>

              </Col>
              <Col lg='3'></Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  )
};

const Tr = ({ item }) => {
  const dispatch = useDispatch()
  const deleteProduct = () =>{
    dispatch(cartActions.deleteItem(item.id))
  }

  return(
  <tr>
    <td><img src={item.imgUrl} alt="" /></td>
    <td>{item.productName}</td>
    <td>{item.price}</td>
    <td>{item.Quantity}</td>
    <td><i onClick={deleteProduct} class="ri-delete-bin-line"></i></td>
  </tr>
  )
}
export default Cart