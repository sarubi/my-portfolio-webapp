import { useProgress, Html } from '@react-three/drei';
import { useEffect, useState } from 'react';
const CanvasLoader: React.FC = () => {
  const { progress } = useProgress();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (progress >= 100) {
      setIsVisible(false);
    }
  }, [progress]);

  return (
    <Html>
      <span className="text-2xl text-gray-500"></span>
      <p>{progress.toFixed(2)}</p>
    </Html>
  )
}

export default CanvasLoader