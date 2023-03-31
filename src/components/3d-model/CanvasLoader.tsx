import { useProgress } from '@react-three/drei';
import { useEffect, useState } from 'react';
const CanvasLoader: React.FC = () => {
  const { progress } = useProgress();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (progress >= 100) {
      setIsVisible(false);
    }
  }, [progress]);

  return isVisible ? (
    <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>Loading: {progress.toFixed(2)}%</div>
  ) : null;
}

export default CanvasLoader