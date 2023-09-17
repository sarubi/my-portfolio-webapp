import Image from 'next/image'
import ProfileImage from '../../assets/images/Screenshot 2023-08-06 at 1.52.33 PM.png'
import LinkedinIcon from "../icons/LinkedinIcon"
import LocationIcon from "../icons/Location"
import GoogleScholarIcon from "../icons/GoogleScholarIcon"

const Profile: React.FC = () => {

  return (
    <div className="profile mt-[30px] flex justify-between items-center">
      <div className="dev-details">

        <div className="dev-name text-[30px] font-medium">
          Sarubi Thillainathan
        </div>
        <div className="dev-tagline text-[15px]">
          <p>PhD Student 👨‍💻 </p>
          <p>
          <div className="social-link-item flex items-center">
            <div className="social-link-icon mr-2">
              <LocationIcon width={40} height={40} />
            </div>
            <div className="social-link-name">
            Saarbrücken, Germany
            </div>
          </div>
        
        
         </p>
          <p> 📧 <a className="text-blue-600 hover:underline" href="mailto:stsarut@gmail.com">stsarut@gmail.com</a> </p>
          <p>          <a className="text-blue-600 hover:underline" href="https://scholar.google.com/citations?hl=en&user=KszUKukAAAAJ" target="_blank" rel="noreferrer">
          <div className="social-link-item flex items-center">
            <div className="social-link-icon mr-2">
              <GoogleScholarIcon width={20} height={20} />
            </div>
            <div className="social-link-name">
             Sarubi Thillainathan
            </div>
          </div>
        </a>
</p>

        </div>
      </div>

      <div className="dev-avatar">
        <Image
          className='rounded-full object-cover border-white-500 border-[3px]'
          src={ProfileImage}
          alt="Sarubi Thillainathan"
          width={200}
          height={200} />
      </div>
    </div>
  )
}

export default Profile