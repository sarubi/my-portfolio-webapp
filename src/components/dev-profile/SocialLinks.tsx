import TwitterIcon from "../icons/TwitterIcon"
import InstagramIcon from "../icons/InstagramIcon"
import LinkedinIcon from "../icons/LinkedinIcon"
import GithubIcon from "../icons/GithubIcon"

const SocialLinks: React.FC = () => {

  return (

    <div className="social-links mt-[30px]">
      <div className="title font-medium text-[20px]">
        Find me on social
      </div>

      <div className="social-links-details flex-row">

        <a href="https://twitter.com/theetaz" target="_blank" rel="noreferrer">
          <div className="social-link-item flex items-center">
            <div className="social-link-icon mr-2">
              <TwitterIcon width={20} height={20} />
            </div>
            <div className="social-link-name">
              @theetaz
            </div>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/nipun-theekshana/" target="_blank" rel="noreferrer">
          <div className="social-link-item flex items-center">
            <div className="social-link-icon mr-2">
              <LinkedinIcon width={20} height={20} />
            </div>
            <div className="social-link-name">
              Nipun Theekshana
            </div>
          </div>
        </a>

        <a href="https://www.instagram.com/theetaz/" target="_blank" rel="noreferrer">
          <div className="social-link-item flex items-center">
            <div className="social-link-icon mr-2">
              <InstagramIcon width={20} height={20} />
            </div>
            <div className="social-link-name">
              @theetaz
            </div>
          </div>
        </a>

        <a href="https://github.com/theetaz" target="_blank" rel="noreferrer">
          <div className="social-link-item flex items-center">
            <div className="social-link-icon mr-2">
              <GithubIcon width={20} height={20} />
            </div>
            <div className="social-link-name">
              @theetaz
            </div>
          </div>
        </a>

      </div>
    </div>

  )
}

export default SocialLinks