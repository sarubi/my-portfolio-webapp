import React from "react";
const Publications = () => {
    return ( <>
        <div className='container mx-auto items-center mt-[50px] px-[15px]'>
        <div className="title font-medium text-[20px] font-serif">
            Publications
        </div>        <ul className="list-disc list-inside">
            <li className="font-serif text-base indent-10">Shravan Nayak, Surangika Ranathunga, <a className="font-serif text-base font-bold">Sarubi Thillainathan</a>, Rikki Hung, Anthony Rinaldi, Yining Wang, Jonah Mackey, Andrew Ho, En-Shiun Annie Lee. 2023. 
            Leveraging Auxiliary Domain Parallel Data in Intermediate Task Fine-tuning for Low-resource Translation. In Practical Machine Learning for Developing Countries (PML4DC) workshop, ICLR 2023.</li>
            <li className="font-serif indent-10">En-Shiun Lee, <a className="font-serif text-base font-bold">Sarubi Thillainathan</a>, Shravan Nayak, Surangika Ranathunga, David Adelani, Ruisi Su, and Arya McCarthy. 2022. Pre-Trained Multilingual Sequence-to-Sequence Models: A Hope for Low-Resource Language Translation?. In Findings of the Association for Computational Linguistics: ACL 2022, pages 58–67, Dublin, Ireland. Association for Computational Linguistics.</li>
            <li className="font-serif indent-10"><a className="font-serif text-base font-bold">S. Thillainathan</a>, S. Ranathunga and S. Jayasena, "Fine-Tuning Self-Supervised Multilingual Sequence-To-Sequence Models for Extremely Low-Resource NMT," 2021 Moratuwa Engineering Research Conference (MERCon), Moratuwa, Sri Lanka, 2021, pp. 432-437, doi: 10.1109/MERCon52712.2021.9525720.</li>
            <li className="font-serif indent-10"><a className="font-serif text-base font-bold">Sarubi T.</a>, Lorensuhewa S.A.S. and Kalyani M.A.L. (2018, Feb). Use of Dynamic Text Pre­diction for Tamil Text Editing. In Proceedings of 5th Ruhuna International Science and Technology Conference (RISTCON 2018).</li>
        </ul>
        </div>
    </> );
}
 
export default Publications;