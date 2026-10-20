const Education: React.FC = () => {

  return (
    <div className="work-experience mt-[30px]">
      {/* <div className="title font-medium text-[20px]">
        💼 Education
      </div> */}

      <div className="bio-details flex-row">
        <div className="flex row mb-[5px]">
          <div className="bio-item-time min-w-[110px]">2023 - Now:</div>
          <div className="bio-item-description">
            PhD in Computational Linguistics, Saarland University, Germany.
            Dissertation: <span className="italic">Adapting Text Generation to Individual Users</span>.
          </div>
        </div>

        <div className="flex row mb-[5px]">
          <div className="bio-item-time min-w-[110px]">2020 - 2022:</div>
          <div className="bio-item-description">
            MSc by Research in Computer Science &amp; Engineering, University of Moratuwa, Katubedda, Sri Lanka.
            Thesis: <span className="italic">Pre-training and fine-tuning multilingual seq-to-seq models for domain-specific low-resource NMT</span>.
          </div>
        </div>

          <div className="flex row mb-[5px]">
          <div className="bio-item-time min-w-[110px]">2014 - 2018:</div>
          <div className="bio-item-description">
          Bachelor of Computer Science (Hons), University of Ruhuna, Matara, Sri Lanka.
          Thesis: <span className="italic">Text Editing with Dynamic Prediction and Spell Checking Using Machine Learning for Sri Lankan Languages</span>.
          </div>
        </div>

      </div>
    </div>

  )
}

export default Education