const ResearchInterest: React.FC = () => {

  return (
    <div className="research-interest mt-[30px]">
      <div className="title font-medium text-[20px]">
        👨‍🎓 Research Interests
      </div>

      <ul className="list-disc list-inside indent-10">
            <li>Personalised or Individualised Text Generation</li>
            <li>Control Text Generation</li>
            <li>Large Language Models (LLMs)</li>
            <li>Readability</li>
            <li>Neural Machine Translation (NMT)</li>
            <li>NLP for Low Resource Languages for example: LRL-NMT </li>
            <li>Text Summarization</li>
            <li>Text Simplification</li>
        </ul>

      {/* <div className="work-details text-justify">
        <p className="indent-0"> Personalised or individualised text generation </p>
        <p className="indent-0"> Control Text Generation </p>
        <p className="indent-0"> Large Language Models (LLMs) </p>
        <p className="indent-0"> Readability </p>
        <p className="indent-0"> Neural Machine Translation (NMT) </p>
        <p className="indent-0"> NLP for Low Resource Languages for example: LRL-NMT </p>
        <p className="indent-0"> Text Summarization </p>
        <p className="indent-0"> Text Simplification </p>
      </div> */}
    </div>
  )
}

export default ResearchInterest