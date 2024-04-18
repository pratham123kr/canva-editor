import { useState } from 'react'
import Canvas from './Components/Canvas'
import Design from './Components/Design'
import Mask from './Components/Mask';
import './App.css';
import Stroke_pattern from './Components/Stroke_pattern';
import Caption_text from './Components/Caption_text';
import CTA_text from './Components/CTA_text';
import Form_back from './Components/Form_back';

function App() {

  return (
    <div className='App'>
      <Form_back/>
      <CTA_text/>
      <Caption_text/>
      <Stroke_pattern/>
      <Mask/>
      <Design/>
      <Canvas/>
    </div>
  )
}

export default App
