'use client'
import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model/page'

export default function Home() {
  const [mesh, setMesh] = useState('#f3f34');
  const [stripes, setStripes] = useState('#ffffff');
  const [soul, setSoul] = useState('white');

  return (
    <div className="App">
      <div className="wrapper">
        <div className="card">
          <h1 className=' z-10 text-6xl text-slate-300 font-serif relative top-96  flex items-center justify-center'>Shoes</h1>
          <div className="product-canvas h-screen">
            <Canvas className=' z-0'>
              <ambientLight />
              <spotLight intensity={0.9} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
              <Model customColors={{ mesh, stripes, soul }} />
              <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
            </Canvas>
          </div>
          {/* <h2>Color chooser</h2>
          <div className='colors'>
            <div>
              <input type="color" id="mesh" name="mesh" value={mesh} onChange={(e) => setMesh(e.target.value)} />
              <label htmlFor="mesh">Main</label>
            </div>

            <div>
              <input type="color" id="stripes" name="stripes" value={stripes} onChange={(e) => setStripes(e.target.value)} />
              <label htmlFor="stripes">Stripes</label>
            </div>
            <div>
              <input type="color" id="soul" name="soul" value={soul} onChange={(e) => setSoul(e.target.value)} />
              <label htmlFor="soul">Soul</label>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
