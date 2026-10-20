const ResearchInterest: React.FC = () => {

  return (
    <div className="research-interest mt-[30px]">
      <div className="title font-medium text-[20px]">
        👩‍🎓 Research Interests
      </div>

      <ul className="list-disc list-outside pl-[50px] space-y-[4px]">
        <li>
          <span className="font-medium">Personalised &amp; Controllable Generation:</span> Reader-adaptive text, style preservation, fine-grained control
        </li>
        <li>
          <span className="font-medium">Efficient Adaptation &amp; Post-Training:</span> Model merging, adapter composition, parameter-efficient fine-tuning (PEFT), reinforcement learning
        </li>
        <li>
          <span className="font-medium">Readability &amp; Cognitive Modeling:</span> Text complexity, cognitive load, syntactic vs. lexical processing
        </li>
        <li>
          <span className="font-medium">Multilingual NLP:</span> Low-resource machine translation, multilingual LLMs, cross-lingual transfer
        </li>
        <li>
          <span className="font-medium">Evaluation:</span> Automatic metrics and human evaluation of generated text
        </li>
      </ul>
    </div>
  )
}

export default ResearchInterest
