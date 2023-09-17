const Employment: React.FC = () => {

  return (
    <div className="work-experience mt-[30px]">
      {/* <div className="title font-medium text-[20px]">
        💼 Employment
      </div> */}

      <div className="bio-details flex-row">
        <div className="flex row mb-[5px]">
          <div className="bio-item-time min-w-[170px]">01/2023 - Now:</div>
          <div className="bio-item-description">
            Scientific Associate at Saarland University.
          </div>
        </div>

        <div className="flex row mb-[5px]">
          <div className="bio-item-time min-w-[170px]">09/2021 - 08/2022:</div>
          <div className="bio-item-description">
          Lecturer (on Contract) at University of Moratuwa, Sri Lanka.
          </div>
        </div>

          <div className="flex row mb-[5px]">
          <div className="bio-item-time min-w-[170px]">04/2020 - 07/2021:</div>
          <div className="bio-item-description">
          Research Assistant at National Languages Processing Centre (NLPC), Department of Computer Science and Engineering, University of Moratuwa, Sri Lanka.
          </div>
        </div>

        <div className="flex row mb-[5px]">
          <div className="bio-item-time min-w-[170px]">10/2019 - 04/2020:</div>
          <div className="bio-item-description">
          Senior Software Engineer, WSO2, Sri Lanka.
          </div>
        </div>

        <div className="flex row mb-[5px]">
          <div className="bio-item-time min-w-[170px]">04/2018 - 09/2019:</div>
          <div className="bio-item-description">
          Software Engineer, WSO2, Sri Lanka.
          </div>
        </div>

        <div className="flex row mb-[5px]">
          <div className="bio-item-time min-w-[170px]">08/2016 - 02/2017:</div>
          <div className="bio-item-description">
          Software Engineer-Research Intern, WSO2, Sri Lanka.
          </div>
        </div>

      </div>
    </div>

  )
}

export default Employment