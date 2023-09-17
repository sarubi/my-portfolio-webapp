import TwitterIcon from "../icons/TwitterIcon"
import InstagramIcon from "../icons/InstagramIcon"
import LinkedinIcon from "../icons/LinkedinIcon"
import GithubIcon from "../icons/GithubIcon"
import MediumIcon from "../icons/MediumIcon"

const SocialLinks: React.FC = () => {

  return (

    <div className="social-links mt-[30px]">
      <div className="title font-medium text-[20px]">
        Find me on
      </div>

      <div className="social-links-details flex-row">

        <a href="https://www.linkedin.com/in/sarubi-thillainathan-141193a2/" target="_blank" rel="noreferrer">
          <div className="social-link-item flex items-center">
            <div className="social-link-icon mr-2">
              <LinkedinIcon width={20} height={20} />
            </div>
            <div className="social-link-name">
             Sarubi Thillainathan
            </div>
          </div>
        </a>

        <a href="https://github.com/sarubi" target="_blank" rel="noreferrer">
          <div className="social-link-item flex items-center">
            <div className="social-link-icon mr-2">
              <GithubIcon width={20} height={20} />
            </div>
            <div className="social-link-name">
              @sarubi
            </div>
          </div>
        </a>

        <a href="https://twitter.com/SarubiT" target="_blank" rel="noreferrer">
          <div className="social-link-item flex items-center">
            <div className="social-link-icon mr-2">
              <TwitterIcon width={20} height={20} />
            </div>
            <div className="social-link-name">
            @SarubiT
            </div>
          </div>
        </a>


        <a href="https://www.instagram.com/sarubi_t/" target="_blank" rel="noreferrer">
          <div className="social-link-item flex items-center">
            <div className="social-link-icon mr-2">
              <InstagramIcon width={20} height={20} />
            </div>
            <div className="social-link-name">
              @sarubi_t
            </div>
          </div>
        </a>

        <a href="https://medium.com/@stsarut" target="_blank" rel="noreferrer">
          <div className="social-link-item flex items-center">
            <div className="social-link-icon mr-2">
              <MediumIcon width={20} height={20} />
            </div>
            <div className="social-link-name">
              @stsarut
            </div>
          </div>
        </a>

      </div>
    </div>

  )
}

export default SocialLinks