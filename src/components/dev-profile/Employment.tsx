const Employment: React.FC = () => {

  return (
    <div className="work-experience mt-[30px]">
      {/* <div className="title font-medium text-[20px]">
        💼 Employment
      </div> */}

      <div className="bio-details flex-row">
        <div className="flex row mb-[5px]">
          <div className="bio-item-time min-w-[110px]">2023 - Now:</div>
          <div className="bio-item-description">
            Doctoral Researcher, Language Science &amp; Technology, Saarland University, Germany.
          </div>
        </div>

        <div className="flex row mb-[5px]">
          <div className="bio-item-time min-w-[110px]">2020 - 2022:</div>
          <div className="bio-item-description">
          Research Assistant at National Languages Processing Centre (NLPC), University of Moratuwa, Sri Lanka.
          </div>
        </div>

        <div className="flex row mb-[5px]">
          <div className="bio-item-time min-w-[110px]">2018 - 2020:</div>
          <div className="bio-item-description">
          Software Engineer / Senior Software Engineer, WSO2, Sri Lanka.
          </div>
        </div>

        <div className="flex row mb-[5px]">
          <div className="bio-item-time min-w-[110px]">2016 - 2017:</div>
          <div className="bio-item-description">
          Research Intern, WSO2, Sri Lanka.
          </div>
        </div>

      </div>
    </div>

  )
}

export default Employment
