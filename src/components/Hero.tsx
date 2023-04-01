import dynamic from "next/dynamic"
const ModelCanvas = dynamic(
  () => import('./3d-model/ModelCanvas'),
  { ssr: false }
)
const GameScene = dynamic(
  () => import('./3d-model/GameScene'),
  { ssr: false }
)
const Hero: React.FC = () => {

  return (
    <div className="hero-section h-[320px]">
      <GameScene />
    </div>
  )
}

export default Hero