const Talks: React.FC = () => {

  return (
    <div className="talks mt-[30px]">
      <div className="bio-details flex-row">
        <div className="flex row mb-[5px]">
          <div className="bio-item-time min-w-[110px]">2022:</div>
          <div className="bio-item-description">
            Tutorial &amp; Workshop: <span className="italic">Pre-Trained Multilingual Sequence-to-Sequence Models for NMT:
            Tips, Tricks and Challenges</span> and <span className="italic">Neural Machine Translation for Low-Resource
            Languages: Fine-tuning Using Multilingual Sequence-to-Sequence Pre-trained Models</span>. Toronto Machine
            Learning Micro-Summit on NLP (TMLS).
          </div>
        </div>

        <div className="flex row mb-[5px]">
          <div className="bio-item-time min-w-[110px]">2022:</div>
          <div className="bio-item-description">
            Presentation: <span className="italic">Pre-Trained Multilingual Sequence-to-Sequence Models: A Hope for
            Low-Resource Language Translation?</span> CoSubmitting Summer (CSS) Workshop at ICLR 2022.
          </div>
        </div>

        <div className="flex row mb-[5px]">
          <div className="bio-item-time min-w-[110px]">2021:</div>
          <div className="bio-item-description">
            Tutorial: <span className="italic">Neural Machine Translation for Low-Resource Languages</span>. ICON 2021:
            18th International Conference on Natural Language Processing.
          </div>
        </div>

        <div className="flex row mb-[5px]">
          <div className="bio-item-time min-w-[110px]">2020:</div>
          <div className="bio-item-description">
            Presentation: <span className="italic">Multilingual Neural Machine Translation for Sinhala–Tamil–English</span>.
            6th Annual Symposium on Natural Language Processing, University of Moratuwa.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Talks
