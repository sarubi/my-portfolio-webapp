import Image from 'next/image'
import ProfileImage from '../../assets/images/nipun_theekshana.jpg'

const Profile: React.FC = () => {

  return (
    <div className="profile mt-[30px] flex justify-between items-center">
      <div className="dev-details">

        <div className="dev-name text-[30px] font-medium">
          Nipun Theekshana
        </div>
        <div className="dev-tagline text-[15px]">
          Web3 Architect (CTO / Developer / Anything in between)
        </div>
      </div>

      <div className="dev-avatar">
        <Image
          className='rounded-full object-cover border-white-500 border-[3px]'
          src={ProfileImage}
          alt="Nipun Theekshana"
          width={120}
          height={120} />
      </div>
    </div>
  )
}

export default Profile