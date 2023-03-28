const Introduction: React.FC = () => {

  return (
    <div className="introduction mt-[30px]">
      <div className="title font-medium text-[20px]">
        👨‍💻 About Me
      </div>
      <div className="work-details text-justify">
        <p className="indent-12">
          Hi, I&aposm Nipun Theekshana, a skilled Web3 Software Architect from Sri Lanka, passionate about creating innovative software solutions for the future of the internet. My expertise covers designing powerful software systems, ensuring security, and developing modern web applications.
        </p>
        <p className="mt-1">
          I&aposm experienced with various programming languages such as Python, Go, JavaScript, TypeScript, PHP, Java, and Kotlin, allowing me to solve complex problems efficiently. My primary focus is on making it easier for people to access and use blockchain data through user-friendly APIs.

          As a fan of frontend web development for Web3, I enjoy working with React, Next.js, and Vercel. For backend development, my preferred languages and frameworks are Nest.js with TypeScript and FastAPI with Python.
        </p>
        <p className="mt-1">
          I have a strong background in developing smart contracts for public blockchains and use the Hardhat development environment to create seamless experiences. In short, I can offer all-in-one solutions for your Web3 project, including creating and optimizing smart contracts, developing web applications with wallet connectivity like MetaMask and Trust Wallet, and deploying everything on top-notch services like AWS.
        </p>
        <p className="mt-1">
          If you&aposre looking for a dedicated and talented developer to bring your Web3 project to life, I&aposm your ideal choice. Let&aposs work together to shape the future of the digital world!
        </p>
      </div>

      <div className="flex justify-center mt-[30px]">
        <button className="bg-[#319795] dark:bg-[#81E6D9] py-2 px-5 text-white dark:text-black font-medium rounded-[10px]">
          My portfolio
        </button>
      </div>

    </div>
  )
}

export default Introduction