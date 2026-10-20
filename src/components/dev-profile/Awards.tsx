const Awards: React.FC = () => {

  return (
    <div className="awards mt-[30px]">
      <div className="bio-details flex-row">
        <div className="flex row mb-[5px]">
          <div className="bio-item-time min-w-[110px]">2021:</div>
          <div className="bio-item-description">
            Best Paper Award, MERCon 2021 (Big Data / ML / Cloud Computing track).
          </div>
        </div>

        <div className="flex row mb-[5px]">
          <div className="bio-item-time min-w-[110px]">2019:</div>
          <div className="bio-item-description">
            Outstanding Excellence Award, WSO2 (2019 performance).
          </div>
        </div>

        <div className="flex row mb-[5px]">
          <div className="bio-item-time min-w-[110px]">2018:</div>
          <div className="bio-item-description">
            2nd Place, Undergraduate Research Symposium, University of Ruhuna.
          </div>
        </div>

        <div className="flex row mb-[5px]">
          <div className="bio-item-time min-w-[110px]">2017:</div>
          <div className="bio-item-description">
            Merit Award, University of Ruhuna Invention &amp; Innovation Exhibition.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Awards
