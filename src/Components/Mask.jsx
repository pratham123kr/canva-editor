// Mask.jsx

import React, { useState } from 'react';
import templateData from '../templateData';
import '../App.css';

const Mask = () => {
  const { x, y, width, height } = templateData.image_mask;
  const initialImage = templateData.urls.mask;

  const [image, setImage] = useState(initialImage);

  const handleImageUpload = (event) => {
    const uploadedImage = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;

      img.onload = () => {
        setImage(event.target.result); 
      };
    };

    reader.readAsDataURL(uploadedImage);
  };

  return (
    <div className='mask_container'
         style={{
           left: x+7,
           top: y+5,
           width: width + 'px',
           height: height + 'px',
         }}>
      <img
        src={image}
        alt="Mask"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
      <span className='text_upload_image'>Upload Image</span>
      <input type="file" onChange={handleImageUpload} accept="image/*" className='image_input'/>
    </div>
  );
};

export default Mask;
