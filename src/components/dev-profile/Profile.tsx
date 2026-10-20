import Link from 'next/link'
import Image from 'next/image'
import ProfileImage from '../../assets/images/Screenshot 2023-08-06 at 1.52.33 PM.png'

const Profile: React.FC = () => {

  return (
    <div className="profile mt-[30px] flex justify-between items-center gap-[20px]">
      <div className="dev-details">

        <div className="dev-name text-[30px] font-medium">
          👋 Sarubi Thillainathan
        </div>
        <div className="dev-tagline text-[15px]">
          <p className="mb-[8px]">PhD Candidate in Computational Linguistics</p>
          <p>📍 Saarbrücken, Germany</p>
          <p>📧 <a className="text-blue-600 hover:underline" href="mailto:sarubi@lst.uni-saarland.de">sarubi (at) lst.uni-saarland.de</a></p>
          <p>
            🔗 <Link className="text-blue-600 hover:underline" href="/cv">CV</Link>
            {" · "}<a className="text-blue-600 hover:underline" href="https://scholar.google.com/citations?hl=en&user=KszUKukAAAAJ" target="_blank" rel="noreferrer">Google Scholar</a>
            {" · "}<a className="text-blue-600 hover:underline" href="https://github.com/sarubi" target="_blank" rel="noreferrer">GitHub</a>
            {" · "}<a className="text-blue-600 hover:underline" href="https://www.linkedin.com/in/sarubi-thillainathan-141193a2/" target="_blank" rel="noreferrer">LinkedIn</a>
            {" · "}<a className="text-blue-600 hover:underline" href="https://twitter.com/SarubiT" target="_blank" rel="noreferrer">X (Twitter)</a>
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