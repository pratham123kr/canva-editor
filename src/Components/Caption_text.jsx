import React, { useState } from 'react';
import templateData from '../templateData';
import '../App.css';

const Caption_text = () => {
  const { position, font_size, text_color, max_characters_per_line } = templateData.caption;
  const [caption, setCaption] = useState(templateData.caption.text);

  // Function to format text with maximum characters per line
  const formatText = (text) => {
    const words = text.split(' ');
    let formattedText = '';
    let line = '';
  
    words.forEach((word) => {
      if (line.length + word.length <= max_characters_per_line) {
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
    <div className='caption'>
      <div>
        <label
        className='caption_textarea'
          style={{
            left: position.x + 'px',
            top: position.y + 'px',
            fontSize: font_size + 'px',
            color: text_color,
            border: 'none',
          }}
          readOnly
        >{formatText(caption)}</label>
      </div>
      <div className='inputBox'>
      <span>Ad Content</span>
      <input
        type="text"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        className='caption_input'
      />
      </div>
      
    </div>
  );
};

export default Caption_text;
