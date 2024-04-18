import React, { useState } from 'react';
import { SketchPicker } from 'react-color'
import '../App.css';

function Canvas() {
  const [bgColor, setBgColor] = useState('#0369A1'); // Default background color
  const [showPicker, setShowPicker] = useState(false);
  const [colorHistory, setColorHistory] = useState([]);
  const canvasRef = React.useRef(null);

  // Function to handle color change
  const handleColorChange = (color) => {
    const newColor = color.hex;
    setBgColor(newColor);
    // Add the new color to the history
    if (!colorHistory.includes(newColor)) {
      setColorHistory((prevHistory) => [...prevHistory.slice(-4), newColor]);
    }
  };

  // Function to change the background color when a color from history is clicked
  const selectColorFromHistory = (color) => {
    setBgColor(color);
  };

  // Function to draw on the canvas with the current background color
  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  // Call drawCanvas whenever the background color changes
  React.useEffect(() => {
    drawCanvas();
  }, [bgColor]);

  // Function to toggle color picker visibility
  const toggleColorPicker = () => {
    setShowPicker((prevState) => !prevState);
    // Blur the button to remove focus
    buttonRef.current.blur(); // assuming you have a ref to the button
  };

  return (
    <div >
      <div style={{display:"flex"}}>
        {/* Canvas element */}
        <canvas
          
          ref={canvasRef}
          className='canvas'
          width={1080}
          height={1080}
          style={{
            // width: '400px',
            // height: '400px'
            // transform: 'scale(0.37)', // Adjust scale to fit desired size
            transformOrigin: 'top left', // Keep canvas at top left corner
          }}
        />
        <div>
            <div>
                {/* Button to open/close color picker */}
                <button onClick={toggleColorPicker} className='plus_button'>+</button>
                {/* Color picker */}
                {showPicker && (
                <SketchPicker
                    color={bgColor}
                    onChange={handleColorChange}
                    onClose={toggleColorPicker}
                />
                )}
                {/* List of last 5 picked colors */}
                {colorHistory.length > 0 && (
                    <div className='history_container'>
                        Recent colors:
                        {colorHistory.map((color, index) => (
                        <div
                            className='color_tag'
                            key={index}
                            style={{
                            backgroundColor: color,
                            width: '20px',
                            height: '20px',
                            display: 'inline-block',
                            margin: '5px',
                            cursor: 'pointer',
                            }}
                            onClick={() => selectColorFromHistory(color)}
                        />
                        ))}
                    </div>
                )}
            </div>
       </div>
      </div>
    </div>
  );
}

export default Canvas;
