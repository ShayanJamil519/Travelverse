import React, { useState } from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import FileUpload from '../../utils/FileUpload'
import Axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input;

const Continents = [
    { key: 1, value: "Africa" },
    { key: 2, value: "Europe" },
    { key: 3, value: "Asia" },
    { key: 4, value: "North America" },
    { key: 5, value: "South America" },
    { key: 6, value: "Australia" },
    { key: 7, value: "Antarctica" }
]

function UploadProductPage(props) {

    const [TitleValue, setTitleValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [PriceValue, setPriceValue] = useState(0)
    const [ContinentValue, setContinentValue] = useState(1)

    const [Images, setImages] = useState([])


    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }

    const onContinentsSelectChange = (event) => {
        setContinentValue(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }
    const onSubmit = (event) => {
        event.preventDefault();


        if (!TitleValue || !DescriptionValue || !PriceValue ||
            !ContinentValue || !Images) {
            return alert('fill all the fields first!')
        }

        const variables = {
            writer: props.user.userData._id,
            title: TitleValue,
            description: DescriptionValue,
            price: PriceValue,
            images: Images,
            continents: ContinentValue,
        }

        Axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Product Successfully Uploaded')
                    props.history.push('/')
                } else {
                    alert('Failed to upload Product')
                }
            })

    }

    return (
        <div style={{ background: 'linear-gradient(115deg, rgb(112 180 187) 10%, rgb(31 70 144) 90%)',padding: '2rem 0'}}>
        <div >
            {/* <div style={{ }}>
               
            </div> */}


            <Form onSubmit={onSubmit} style={{ border: '20px double #FFE5B4',borderRadius: '100px 20px',padding:'40px',background:'#E8AA42',maxWidth: '600px', margin: '2rem auto' ,textAlign: 'center', marginBottom: '2rem' }} >
            <Title level={2}  style={{fontFamily: 'fangsong'}} > Upload Travel Product</Title>
                {/* DropZone */}
                <FileUpload refreshFunction={updateImages} />

                <br />
                <br />
                <label style={{    fontSize: '4vmin',
    fontFamily: 'fangsong', fontWeight: 'bold ', color:'#231955'}} >Title</label>
                <Input
                    onChange={onTitleChange}
                    value={TitleValue}
                    style={{padding:'1rem'}}
                />
                <br />
                <br />
                <label style={{fontSize: '4vmin',
    fontFamily: 'fangsong', fontWeight: 'bold ', color:'#231955'}}>Description</label>
                <TextArea
                    onChange={onDescriptionChange}
                    value={DescriptionValue}
                />
                <br />
                <br />
                <label style={{fontSize: '4vmin',
    fontFamily: 'fangsong', fontWeight: 'bold ', color:'#231955'}}>Price($)</label>
                <Input
                    onChange={onPriceChange}
                    value={PriceValue}
                    type="number"
                />
                <br /><br />
                <select onChange={onContinentsSelectChange} value={ContinentValue} style={{width: '100%' ,padding: '5px'}} >
                    {Continents.map(item => (
                        <option key={item.key} value={item.key}>{item.value} </option>
                    ))}
                </select>
                <br />
                <br />

                <Button
                    onClick={onSubmit}
                    style={{ background: "#231955" , color : "white"}}
                >
                    Submit
                </Button>

            </Form>

        </div>
        </div>
    )
}

export default UploadProductPage
