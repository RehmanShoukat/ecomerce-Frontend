import React, { useState } from 'react'
import bgVideo from "../../../assets/allproducts/background.mp4"
import OrderModal from '../../../components/OrderModel'
import { TbShoppingBagPlus } from 'react-icons/tb'

// ✅ Import all 10 images
import product1 from '../../../assets/allproducts/1.webp'
import product2 from '../../../assets/allproducts/2.webp'
import product3 from '../../../assets/allproducts/3.webp'
import product4 from '../../../assets/allproducts/4.webp'
import product5 from '../../../assets/allproducts/5.webp'
import product6 from '../../../assets/allproducts/6.webp'
import product7 from '../../../assets/allproducts/7.webp'
import product8 from '../../../assets/allproducts/8.webp'
import product9 from '../../../assets/allproducts/9.webp'
import product10 from '../../../assets/allproducts/10.webp'

const Allproducts = () => {
    const [isItems, setIsItems] = useState(null)
    // const [isModalOpen, setIsModelOpen] = useState(false)

    // ✅ Local products array with incremental prices
    const products = [
        { id: 1, title: "Product 1", description: "This is product 1 description", price: 2000, image: product1 },
        { id: 2, title: "Product 2", description: "This is product 2 description", price: 3000, image: product2 },
        { id: 3, title: "Product 3", description: "This is product 3 description", price: 4000, image: product3 },
        { id: 4, title: "Product 4", description: "This is product 4 description", price: 5000, image: product4 },
        { id: 5, title: "Product 5", description: "This is product 5 description", price: 6000, image: product5 },
        { id: 6, title: "Product 6", description: "This is product 6 description", price: 7000, image: product6 },
        { id: 7, title: "Product 7", description: "This is product 7 description", price: 8000, image: product7 },
        { id: 8, title: "Product 8", description: "This is product 8 description", price: 9000, image: product8 },
        { id: 9, title: "Product 9", description: "This is product 9 description", price: 10000, image: product9 },
        { id: 10, title: "Product 10", description: "This is product 10 description", price: 11000, image: product10 },
    ]

    return (
        <>
            <div className="container text-center mb-5">
                <div className='mb-4 w-100 ' style={{ height: "400px", overflow: "hidden" }}>
                    <video src={bgVideo} autoPlay muted loop className="w-100 h-100" style={{ objectFit: "cover" }}></video>
                </div>
                <div>
                    <h1 className='fw-bold mb-4'>GLAM PRET</h1>
                </div>

                <div className="row">
                    {products.map((data) => (
                        <div className="col-12 col-md-6 col-lg-4 " key={data.id} data-aos="fade-up">
                            <div className="card mb-2">
                                <div
                                    className='position-relative d-flex align-items-center justify-content-center'
                                    style={{ height: "550px", overflow: "hidden" }}
                                >
                                    <TbShoppingBagPlus
                                        onClick={() => {
                                            setIsModalOpen(true);
                                            setIsItems(data);
                                        }}
                                        style={{
                                            position: "absolute",
                                            bottom: "20px",
                                            right: "20px",
                                            zIndex: 1,
                                            background: "#fff",
                                            borderRadius: "100%",
                                            boxShadow: "0 0 10px 0 #00000059",
                                            padding: "8px",
                                            cursor: "pointer",
                                            fontSize: "3rem",
                                            color: "#000",
                                        }}
                                    />
                                    <img
                                        className='img-fluid product-img'
                                        src={data.image}
                                        alt={data.title}
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                </div>

                                <div className="card-body align-item-center justify-content-center">
                                    <h3 className='card-title mb-0 fw-bold'>{data.title}</h3>
                                    <p className='text-muted small'>{data.description}</p>
                                    <em className='fw-bold fs-4'>Rs. {data.price}</em>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* <OrderModal isModalOpen={isModalOpen} setIsModelOpen={setIsModalOpen} product={isItems} /> */}
        </>
    )
}

export default Allproducts
