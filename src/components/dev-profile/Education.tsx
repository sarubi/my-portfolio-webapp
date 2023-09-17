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
            PhD Student at Saarland University.
          </div>
        </div>

        <div className="flex row mb-[5px]">
          <div className="bio-item-time min-w-[110px]">2020 - 2022:</div>
          <div className="bio-item-description">
            Master of Science - Major Component of Research at University of Moratuwa, Katubedda, Sri Lanka.
          </div>
        </div>

          <div className="flex row mb-[5px]">
          <div className="bio-item-time min-w-[110px]">2014 - 2018:</div>
          <div className="bio-item-description">
          Bachelor of Computer Science (Honors) at University of Ruhuna, Matara, Sri Lanka.
          </div>
        </div>

      </div>
    </div>

  )
}

export default Education