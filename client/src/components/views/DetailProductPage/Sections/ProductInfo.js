import React, { useEffect, useState } from 'react'
import { Descriptions } from 'antd';
import "../../stylesFixer.css"

function ProductInfo(props) {

    const [Product, setProduct] = useState({})

    useEffect(() => {

        setProduct(props.detail)

    }, [props.detail])

    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
    }


    return (
        <div>
            <Descriptions title="Product Info:">
                <Descriptions.Item label="Price"> {Product.price}</Descriptions.Item>
                <Descriptions.Item label="Sold">{Product.sold}</Descriptions.Item>
                <Descriptions.Item label="View"> {Product.views}</Descriptions.Item>
                <Descriptions.Item label="Description"> {Product.description}</Descriptions.Item>
            </Descriptions>

            <br />
            <div style={{display:'flex', justifyContent:'center'}}>
                <button className='productInfoBtn'
                    onClick={addToCarthandler}
                >
                    Add to Cart
                    </button>
            </div>
        </div>
    )
}

export default ProductInfo
