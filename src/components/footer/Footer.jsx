import React from "react";
import "./FooterStyle.css";
import navIcon2 from "../../assets/img/R.png";
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, SpotLight } from "@react-three/drei";
import { TextureLoader, MeshBasicMaterial, DoubleSide } from 'three';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer_container container">
      <h1 className="footer_title glitch" data-text="My GitHub">My GitHub</h1>


        <div className="footer_social">
          <ul className="footer_list">
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/MichaelGonzalez-bit/Portafolio.git" target="_blank" rel="noopener noreferrer">
                <Canvas>
                  <OrbitControls enableZoom={false} autoRotate />
                  <SpotLight position={[0, -5, 10]} angle={0.3} />
                  <BoxWithTexture />
                </Canvas>
                </a>
              </div>
            </span>
          </ul>
          
        </div>

        
        <span className="footer_copy">&#169;Michael All Rights Reserved</span>
      </div>
    </footer>
  );
};

function BoxWithTexture() {
  const texture = useLoader(TextureLoader, navIcon2);
  
  // Crear un array de materiales para cada cara del cubo
  const materials = [];
  for (let i = 0; i < 6; i++) {
    materials.push(new MeshBasicMaterial({ map: texture, transparent: true, side: DoubleSide }));
  }
  
  return (
    <mesh>
      <boxGeometry args={[3, 3, 3]} />
      {/* Aplicar el array de materiales al cubo */}
      {materials.map((material, index) => (
        <primitive attachArray="material" object={material} key={index} />
      ))}
    </mesh>
  );
}


export default Footer;

