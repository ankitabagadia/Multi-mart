import React, { useState } from 'react'
import Helmet from '../Components/Helmet/Helmet'
import { Container,Row,Col,Form,FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'

const Signup = () => {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [file,setFile] = useState(null)

  return (
    <>
    <Helmet title='Signup'>
     <section>
      <Container>
        <Row>
          <Col lg='6' className='m-auto text-center'>
            <h3 className='fw-bold mb-4'>Signup</h3>
            <Form className='login_form'>
            <FormGroup className='form_group'>
                <input type="text" placeholder='Enter Your Name'
                value={name} onChange={e=>setName(e.target.value)}/>
              </FormGroup>
              <FormGroup className='form_group'>
                <input type="email" placeholder='Enter Your Email'
                value={email} onChange={e=>setEmail(e.target.value)}/>
              </FormGroup>
              <FormGroup className='form_group'>
                <input type="password" placeholder='Enter Your Password'
                value={password} onChange={e=>setPassword(e.target.value)}/>
              </FormGroup>
              <FormGroup className='form_group'>
                <input type="file" placeholder='Enter Your Password'
                value={password} onChange={e=>setFile(e.target.files[0])}/>
              </FormGroup>
              <button type='submit' className="buy_btn login_btn">Register</button>
              <p>Already have an account? <Link to='/login'>Login</Link> </p>
            </Form>
          </Col>
        </Row>
      </Container>
     </section>
    </Helmet>
    </>
  )
}

export default Signup