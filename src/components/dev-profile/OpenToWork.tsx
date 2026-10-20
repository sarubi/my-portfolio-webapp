import Link from 'next/link'

const OpenToWork: React.FC = () => {
  return (
    <div className="open-to-work mt-[30px] bg-[#F5F0E8] dark:bg-[#313134] p-4 rounded-[10px] border-l-4 border-[#805ad5]">
      <div className="font-medium text-[17px] mb-[5px]">🎯 On the Job Market</div>
      <p className="mb-[5px]">
        Actively seeking PhD Research Internships (2027), followed by full-time Research Scientist or Postdoctoral
        positions.
      </p>
      <p className="mb-[10px]">
        <span className="font-medium">Focus areas:</span> LLM post-training, personalisation, model merging, and
        multilingual NLP.
      </p>
      <div className="flex flex-wrap items-center gap-[10px]">
        <span>Open to relocation.</span>
        <Link className="bg-[#805ad5] hover:bg-[#6b46c1] text-white text-[14px] font-medium px-3 py-1 rounded-md" href="/cv">
          View CV
        </Link>
        <a className="border border-[#805ad5] text-[#805ad5] dark:text-[#b794f4] hover:bg-[#805ad5] hover:text-white text-[14px] font-medium px-3 py-1 rounded-md" href="mailto:sarubi@lst.uni-saarland.de">
          Email Me
        </a>
      </div>
    </div>
  )
}

export default OpenToWork
