import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box">Comments</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        <div className="descriptionbox-nav-box">FAQs</div>
      </div>
      <div className="descriptionbox-description">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quis rerum, esse quidem quia repellendus qui! Dolor, nulla necessitatibus. Obcaecati nisi minus, fugit repellendus ipsum amet perspiciatis quibusdam quae impedit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel inventore temporibus eos neque assumenda sapiente, itaque nihil totam tempore dolorem officiis doloremque aut quibusdam iusto soluta, doloribus quisquam veritatis maxime.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
