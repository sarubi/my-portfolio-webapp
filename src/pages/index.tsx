import Hobbies from '@/components/dev-profile/Hobbies'
import Introduction from '@/components/dev-profile/Intoduction'
import Profile from '@/components/dev-profile/Profile'
import SocialLinks from '@/components/dev-profile/SocialLinks'
import Tagline from '@/components/dev-profile/Tagline'
import WorkExperience from '@/components/dev-profile/Education'
import ResearchInterest from '@/components/dev-profile/ResearchInterst'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div className='container mx-auto items-center mt-[50px] px-[15px]'>
      <Hero />
      {/*<Tagline />*/}
      <Profile />
      <Introduction />
      <ResearchInterest />
      {/*<WorkExperience />*/}
      <Hobbies />
      <SocialLinks />
    </div>
  )
}
