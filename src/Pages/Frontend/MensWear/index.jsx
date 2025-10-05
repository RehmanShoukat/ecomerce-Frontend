import React, { useState } from 'react'
import background from '../../../assets/mens/bg.mp4'

// ✅ Import all 9 images from mens folder
import Image1 from '../../../assets/mens/1.webp'
import Image2 from '../../../assets/mens/2.webp'
import Image3 from '../../../assets/mens/3.webp'
import Image4 from '../../../assets/mens/4.webp'
import Image5 from '../../../assets/mens/5.webp'
import Image6 from '../../../assets/mens/6.webp'
import Image7 from '../../../assets/mens/7.webp'
import Image8 from '../../../assets/mens/8.webp'

import { TbShoppingBagPlus } from 'react-icons/tb'

const MensWear = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false)
  const [isItems, setIsItems] = useState(null)

  // ✅ Local products array
  const products = [
    { id: 1, title: "Formal Suit 1", description: "Classic formal suit perfect for office.", price: 2500, image: Image1 },
    { id: 2, title: "Formal Suit 2", description: "Modern slim-fit suit for meetings.", price: 3000, image: Image2 },
    { id: 3, title: "Winter Suit 3", description: "Warm and stylish winter suit.", price: 3500, image: Image3 },
    { id: 4, title: "Casual Suit 4", description: "Relaxed fit suit for casual events.", price: 4000, image: Image4 },
    { id: 5, title: "Party Suit 5", description: "Elegant party suit with black finish.", price: 4500, image: Image5 },
    { id: 6, title: "Office Suit 6", description: "Perfect office wear with modern cut.", price: 5000, image: Image6 },
    { id: 7, title: "Summer Suit 7", description: "Lightweight suit for summer days.", price: 5500, image: Image7 },
    { id: 8, title: "Classic Suit 8", description: "Timeless design for all occasions.", price: 6000, image: Image8 },
  ]

  return (
    <>
      <div className="container text-center my-3 mb-5">
        <div className='w-100 mb-4' style={{ height: "400px", overflow: "hidden" }}>
          <video src={background} autoPlay muted loop className='w-100 h-100' style={{ objectFit: "cover" }}></video>
        </div>
        <h1 className='fw-bold mb-5' style={{ fontFamily: "VisbyCFMedium" }}>SUITS</h1>

        <div className="row">
          {products.map((data) => (
            <div className="col-12 col-md-6 col-lg-4" key={data.id} data-aos="fade-up">
              <div className="card mb-2">
                <div className='position-relative d-flex align-items-center justify-content-center' style={{ height: '550px', overflow: 'hidden' }}>
                  <TbShoppingBagPlus
                    onClick={() => { setIsModalOpen(true); setIsItems(data) }}
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

      {/* <OrderModal setIsModelOpen={setIsModalOpen} isModalOpen={isModalOpen} product={isItems} /> */}
    </>
  )
}

export default MensWear
