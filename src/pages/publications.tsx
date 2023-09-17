import React from "react";
const Publications = () => {
  return (
    <>
      <div className="container mx-auto items-center mt-[50px] px-[15px]">
        <div className="title font-medium text-[20px] font-serif">
          Publications
        </div>
        <ul className="list-disc list-inside">
          <li className="font-serif text-base indent-10">
            Shravan Nayak, Surangika Ranathunga,{" "} 
            <span className="font-serif text-base font-bold">
              Sarubi Thillainathan
            </span>
            , Rikki Hung, Anthony Rinaldi, Yining Wang, Jonah Mackey, Andrew Ho,
            En-Shiun Annie Lee. 2023. <a className="font-serif text-base text-blue-600" href="https://pml4dc.github.io/iclr2023/pdf/PML4DC_ICLR2023_7.pdf"> Leveraging Auxiliary Domain Parallel Data
            in Intermediate Task Fine-tuning for Low-resource Translation</a>.  In <span className="font-serif text-base italic">
            Practical Machine Learning for Developing Countries (PML4DC)
            workshop, ICLR 2023. </span>
          </li>
          <li className="font-serif indent-10">
            En-Shiun Lee,{" "}    
            <span className="font-serif text-base font-bold">
              Sarubi Thillainathan
            </span>
            , Shravan Nayak, Surangika Ranathunga, David Adelani, Ruisi Su, and
            Arya McCarthy. 2022. <a className="font-serif text-base text-blue-600 hover:underline" href="https://aclanthology.org/2022.findings-acl.6/"> Pre-Trained Multilingual Sequence-to-Sequence
            Models: A Hope for Low-Resource Language Translation?</a>. In <span className="font-serif text-base italic"> Findings
            of the Association for Computational Linguistics: ACL 2022, </span> pages
            58–67, Dublin, Ireland. Association for Computational Linguistics.
          </li>
          <li className="font-serif indent-10">
            <span className="font-serif text-base font-bold">
              S. Thillainathan
            </span> 
            , S. Ranathunga and S. Jayasena. 2021. <a className="font-serif text-base text-blue-600" href="https://ieeexplore.ieee.org/abstract/document/9525720"> Fine-Tuning Self-Supervised
            Multilingual Sequence-To-Sequence Models for Extremely Low-Resource
            NMT</a>. In <span className="font-serif text-base italic"> 2021 Moratuwa Engineering Research Conference (MERCon), </span>
            Moratuwa, Sri Lanka, pp. 432-437, doi:
            10.1109/MERCon52712.2021.9525720.
          </li>
          <li className="font-serif indent-10">
            <span className="font-serif text-base font-bold">Sarubi T.</span>,
            Lorensuhewa S.A.S. and Kalyani M.A.L. 2018. Use of Dynamic
            Text Pre­diction for Tamil Text Editing. In <span className="font-serif text-base italic"> Proceedings of 5th
            Ruhuna International Science and Technology Conference (RISTCON
            2018).</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Publications;
