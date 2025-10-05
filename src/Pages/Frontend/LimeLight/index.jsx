import React, { useState } from 'react'

// ✅ Import all 10 images
import Img from '../../../assets/limeLight/women.webp'
import Image1 from '../../../assets/limeLight/1.webp'
import Image2 from '../../../assets/limeLight/2.webp'
import Image3 from '../../../assets/limeLight/3.webp'
import Image4 from '../../../assets/limeLight/4.webp'
import Image5 from '../../../assets/limeLight/5.webp'
import Image6 from '../../../assets/limeLight/6.webp'
import Image7 from '../../../assets/limeLight/7.webp'
import Image8 from '../../../assets/limeLight/8.webp'
import Image9 from '../../../assets/limeLight/9.webp'
import Image10 from '../../../assets/limeLight/10.webp'

import { TbShoppingBagPlus } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const LimeLight = () => {
    const [isItems, setIsItems] = useState(null)

    // ✅ Local products array
    const products = [
        { id: 1, title: "Summer Short Pack", description: "A timeless white shirt made with 100% cotton.", price: 2000, image: Image1 },
        { id: 2, title: "Summer Pack", description: "Stylish slim-fit denim shirt with front pockets.", price: 3000, image: Image2 },
        { id: 3, title: "Winter Short Pack", description: "Soft flannel shirt with red and black checks.", price: 4000, image: Image3 },
        { id: 4, title: "Autumn Short Pack", description: "Elegant light-blue shirt tailored for office events.", price: 5000, image: Image4 },
        { id: 5, title: "Spring Short Pack", description: "Vibrant printed shirt perfect for summer outings.", price: 6000, image: Image5 },
        { id: 6, title: "Summer Pack", description: "Modern shirt with mandarin collar and sleek black color.", price: 7000, image: Image6 },
        { id: 7, title: "Spring Pack", description: "Blue and white striped shirt made with breathable fabric.", price: 8000, image: Image7 },
        { id: 8, title: "Summer Pack", description: "Lightweight linen shirt with half sleeves.", price: 9000, image: Image8 },
        { id: 9, title: "Festive Pack", description: "Elegant festive collection for special occasions.", price: 10000, image: Image9 },
        { id: 10, title: "Winter Pack", description: "Cozy winter wear perfect for chilly days.", price: 11000, image: Image10 },
    ]

    return (
        <>
            <div className="container text-center position-relative mb-5">
                <img src={Img} alt="Banner Image" className='img-fluid mt-3 banner-img' />
                <h2 className='text-primary fw-bold mt-5'>LimeLight</h2>
                <p>Summer Collection On 50% Off</p>

                <div className="flex-wrap d-flex align-items-center justify-content-center mt-4 gap-4" >
                    <Link to="/daily" style={{ textDecoration: "none" }} className="text-dark">
                        <div className="col-4 col-md-2 text-center">
                            <div className='d-flex justify-content-center'>
                                <img src={Image2} alt="Daily Wear" className="rounded-circle mb-2" style={{ width: "220px", height: "220px", objectFit: "cover" }} />
                            </div>
                            <h6 className="fw-bold">Daily Wear</h6>
                        </div>
                    </Link>
                    <Link to="/child" style={{ textDecoration: "none" }} className='text-dark'>
                        <div className="col-4 col-md-2 text-center">
                            <div className='d-flex justify-content-center'>
                                <img src={Image6} alt="Child" className="rounded-circle mb-2" style={{ width: "220px", height: "220px", objectFit: "cover" }} />
                            </div>
                            <h6 className="fw-bold">Child</h6>
                        </div>
                    </Link>
                </div>

                <div className="row mt-4">
                    {products.map((data) => (
                        <div className="col-12 col-md-6 col-lg-4 " data-aos="fade-up" key={data.id}>
                            <div className="card mb-2 mt-4">
                                <div className='position-relative d-flex align-items-center justify-content-center' style={{ height: '550px', overflow: 'hidden' }}>
                                    <TbShoppingBagPlus
                                        onClick={() => setIsItems(data)}
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
                                            color: "#000"
                                        }}
                                    />
                                    <img className='img-fluid product-img' src={data.image} alt={data.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div className="card-body align-items-center justify-content-center">
                                    <h3 className='card-title mb-0 fw-bold'>{data.title}</h3>
                                    <p className='text-muted small'>{data.description}</p>
                                    <em className='fw-bold fs-4'>Rs. {data.price}</em>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default LimeLight
