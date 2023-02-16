import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Row, Col } from 'antd';
import ProductImage from './Sections/ProductImage';
import ProductInfo from './Sections/ProductInfo';
import { addToCart } from '../../../_actions/user_actions';
import { useDispatch } from 'react-redux';
import "../stylesFixer.css"

function DetailProductPage(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.productId
    const [Product, setProduct] = useState([])

    useEffect(() => {
        Axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
            .then(response => {
                setProduct(response.data[0])
            })

    }, [])

    const addToCartHandler = (productId) => {
        dispatch(addToCart(productId))
    }

    return (
        <div >
        
        <div className="postPage" style={{ width: '100%',minHeight:"90vh", padding: '5rem 11rem 0 11rem'}}>

            {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>{Product.title}</h1>
            </div> */}

            <br />

            <Row gutter={[16, 16]} >
                <Col lg={12} xs={24}
                >
                    <ProductImage detail={Product} />
                </Col>
                <Col lg={12} xs={24}>

                <div style={{ display: 'flex', justifyContent: 'flex-start', fontSize:'1.2rem' ,marginBottom:'0', fontFamily:'cursive' }}>
                <h1 style={{ marginBottom:'1rem'}}
                >{Product.title} ✈️ </h1>
            </div>

                    <ProductInfo
                        addToCart={addToCartHandler}
                        detail={Product} />
                </Col>
            </Row>
        </div>

       
        </div>
    )
}

export default DetailProductPage

// import React, { useEffect, useState } from 'react'
// import Axios from 'axios'
// import { Container } from 'react-bootstrap';

// import { Row, Col } from 'antd';
// import ProductImage from './Sections/ProductImage';
// import ProductInfo from './Sections/ProductInfo';
// import { addToCart } from '../../../_actions/user_actions';
// import { useDispatch } from 'react-redux';
// function DetailProductPage(props) {
//     const dispatch = useDispatch();
//     const productId = props.match.params.productId
//     const [Product, setProduct] = useState([])

//     useEffect(() => {
//         Axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
//             .then(response => {
//                 setProduct(response.data[0])
//             })

//     }, [])

//     const addToCartHandler = (productId) => {
//         dispatch(addToCart(productId))
//     }

//     return (
//         <div style={{display:'flex', flexDirection:'column', gap:"20px" }}>
        
//         <div className="postPage" style={{ width: '100%', padding: '3rem 4rem'}}>

//             <div style={{ display: 'flex', justifyContent: 'center' }}>
//                 <h1>{Product.title}</h1>
//             </div>

//             <br />

//             <Row gutter={[16, 16]} >
//                 <Col lg={12} xs={24}
//                 >
//                     <ProductImage detail={Product} />
//                 </Col>
//                 <Col lg={12} xs={24}>
//                     <ProductInfo
//                         addToCart={addToCartHandler}
//                         detail={Product} />
//                 </Col>
//             </Row>
//         </div>

//         {/* ------------------------- */}



//         <Container className="my-5">
//             <div className="row row-cols-1 row-cols-md-2">
//                 <div className="rounded h-100">
//                     <div className="service-img-box">
//                         <img src='/b1.jpg' alt="" className="img-fluid" />
//                         <p className="service-price text-white fw-bold py-1 px-2">service.price</p>
//                         <p className="service-duration text-white fw-bold py-1 px-2">service.duration Days</p>
//                     </div>
//                     <div className="p-4 pt-0">
//                         <h5 className="fw-bold my-2">service.name</h5>
//                         <p className="text-secondary text-start">service.info</p>
//                     </div>
//                 </div>
//                 <div className="col">
//                     <h5 className="text-center text-success border-bottom pb-2 mb-3">Order Details</h5>
//                     <form action="" >
//                         <div className="mb-4">
//                             <input type="text" className="form-control w-100 border-bottom" placeholder="Full Name"  />
//                         </div>
//                         <div className="mb-4">
//                             <input required type="email" className="form-control w-100 border-bottom" placeholder="Email" />
//                         </div>
                      
//                         <div className="mb-4">
//                             <input required type="text" className="form-control w-100 border-bottom" placeholder="Total Members"  />
//                         </div>
//                         <div className="mb-4">
//                             <input type="text" className="form-control w-100 border-bottom" placeholder="Event Name"  />
//                         </div>
//                         <button className="btn btn-primary w-100 text-white" type='submit'>Confirm Order</button>
//                     </form>

//                 </div>
//             </div>
//         </Container>



//         {/* --------------------------- */}
//         </div>
//     )
// }

// export default DetailProductPage
