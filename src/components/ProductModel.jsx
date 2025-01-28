import { memo, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';

const Model = memo(({ modelType }) => {
  const getGeometry = useCallback(() => {
    switch (modelType) {
      case 'box':
        return <boxGeometry args={[2, 2, 2]} />;
      case 'cylinder':
        return <cylinderGeometry args={[1, 1, 2, 16]} />;
      case 'sphere':
        return <sphereGeometry args={[1.2, 16, 16]} />;
      default:
        return <boxGeometry args={[2, 2, 2]} />;
    }
  }, [modelType]);

  return (
    <mesh>
      {getGeometry()}
      <meshStandardMaterial color="#CF171F" />
    </mesh>
  );
});

function ProductModel({ modelType = 'box' }) {
  return (
    <div className="product-model">
      <Canvas
        shadows={false}
        dpr={[1, 2]}
        camera={{ fov: 45 }}
        performance={{ min: 0.5 }}
      >
        <Stage environment="city" intensity={0.6}>
          <Model modelType={modelType} />
        </Stage>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping={false}
        />
      </Canvas>
    </div>
  );
}

export default memo(ProductModel); 