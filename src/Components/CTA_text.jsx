import React, { useState } from 'react';
import templateData from '../templateData';
import '../App.css';

const CTA_text = () => {
  const { position, font_size = 30, text_color, background_color, wrap_length = 20 } = templateData.cta;
  const [ctaText, setCTAText] = useState(templateData.cta.text);

  // Function to format text with maximum characters per line
  const formatText = (text) => {
    const words = text.split(' ');
    let formattedText = '';
    let line = '';
  
    words.forEach((word) => {
      if (line.length + word.length <= wrap_length) {
        line += word + ' ';
      } else {
        formattedText += line.trim() + '\n';
        line='';
        line = word + ' ';
      }
    });

    formattedText += line.trim();
    return formattedText;
  };

  return (
    <div className='cta' style={{left: position.x + 'px',top: position.y + 'px'}}>
      <button
        className='cta_button'
        style={{
          fontSize: font_size + 'px',
          color: text_color,
          backgroundColor: background_color
        }}
        onClick={() => console.log("CTA Clicked")} // Example onClick function
      >
        {formatText(ctaText)}
      </button>
      
      <span className='CTA_tag'>CTA</span>
      <input
        type="text"
        value={ctaText}
        onChange={(e) => setCTAText(e.target.value)}
        className='cta_input'
      />

    </div>
  );
};

export default CTA_text;
