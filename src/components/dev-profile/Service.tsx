const Service: React.FC = () => {

  return (
    <div className="service mt-[30px]">
      <div className="bio-details flex-row">
        <div className="flex row mb-[5px]">
          <div className="bio-item-time min-w-[110px] font-medium">Reviewing:</div>
          <div className="bio-item-description">
            Information Processing &amp; Management (journal); ACL Rolling Review (ARR); WMT 2026; LREC.
          </div>
        </div>

        <div className="flex row mb-[5px]">
          <div className="bio-item-time min-w-[110px] font-medium">Teaching:</div>
          <div className="bio-item-description">
            Instructor / TA, University of Moratuwa (2020–2022): Object-Oriented Programming &amp; Software Development,
            Graph Theory for Computing, Research &amp; Report Writing, Bioinformatics. Visiting Evaluator, BIT final-year
            projects (2020–2021).
          </div>
        </div>

        <div className="flex row mb-[5px]">
          <div className="bio-item-time min-w-[110px] font-medium">Supervision:</div>
          <div className="bio-item-description">
            <ul className="list-disc list-inside">
              <li>
                William LaCroix (Master&apos;s thesis: <span className="italic">Precise, Grade-Specific Text Simplification via
                Weighted Adapter Merging for Second Language Acquisition</span>; co-supervised with Prof. Alexander Koller
                and Dr. Ji-Ung Lee).
              </li>
              <li>
                Nuwanga Herath and Thisal Tennakoon (Bachelor&apos;s thesis: <span className="italic">Pivot-based Transfer
                Learning on Pre-trained Sequence-to-Sequence Models for Low-Resource Neural Machine Translation</span>;
                co-supervised with Dr. Surangika Ranathunga).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
