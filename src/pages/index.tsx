import Hobbies from '@/components/dev-profile/Hobbies'
import Introduction from '@/components/dev-profile/Intoduction'
import Profile from '@/components/dev-profile/Profile'
import SocialLinks from '@/components/dev-profile/SocialLinks'
import News from '@/components/dev-profile/News'
import ResearchInterest from '@/components/dev-profile/ResearchInterst'
import OpenToWork from '@/components/dev-profile/OpenToWork'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div className='container mx-auto items-center mt-[50px] px-[15px]'>
      <Hero />
      <Profile />
      <OpenToWork />
      <Introduction />
      <ResearchInterest />
      <News />
      <Hobbies />
      <SocialLinks />
    </div>
  )
}
