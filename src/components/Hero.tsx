import dynamic from "next/dynamic"
const ModelCanvas = dynamic(
  () => import('./3d-model/ModelCanvas'),
  { ssr: false }
)
const RetroComputerScene = dynamic(
  () => import('./3d-model/RetroComputerScene'),
  { ssr: false }
)
const Hero: React.FC = () => {

  return (
    <div className="hero-section h-[320px]">
      <RetroComputerScene />
    </div>
  )
}

export default Hero