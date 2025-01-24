import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { Suspense } from 'react';

function Box() {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#e31837" />
    </mesh>
  );
}

function Cylinder() {
  return (
    <mesh>
      <cylinderGeometry args={[1, 1, 2, 32]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
    </mesh>
  );
}

function Sphere() {
  return (
    <mesh>
      <sphereGeometry args={[1.2, 32, 32]} />
      <meshStandardMaterial color="#2b49a3" metalness={0.5} roughness={0.3} />
    </mesh>
  );
}

const models = {
  box: Box,
  cylinder: Cylinder,
  sphere: Sphere,
};

function ProductModel({ modelType = 'box' }) {
  const Model = models[modelType] || Box;

  return (
    <div className="product-model">
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 45 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Model />
          </Stage>
        </Suspense>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}

export default ProductModel; 