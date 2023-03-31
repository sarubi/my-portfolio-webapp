import dynamic from "next/dynamic"
const ModelCanvas = dynamic(
  () => import('./3d-model/ModelCanvas'),
  { ssr: false }
)
const Hero: React.FC = () => {

  return (
    <>
      <ModelCanvas />
    </>
  )
}

export default Hero