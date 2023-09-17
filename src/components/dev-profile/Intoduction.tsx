const Introduction: React.FC = () => {

  return (
    <div className="introduction mt-[30px]">
      <div className="title font-medium text-[20px]">
         👨‍💻 About Me
      </div>
      <div className="work-details text-justify">
        <p className="indent-0">
         Hello! I'm Sarubi, a PhD student in Computational Linguistics in the Department of Language Science and Technology at Saarland University, Germany.
            In my PhD I'm mainly exploring personalised/individualised text generation.
            I'm privileged to supervised by <a className="text-blue-600 hover:underline" href="https://www.coli.uni-saarland.de/~koller/">Prof. Alexander Koller</a> and <a className="text-blue-600 hover:underline" href={"https://www.uni-saarland.de/lehrstuhl/demberg/members/verademberg.html"}>Prof. Vera Demberg</a>.
            I'm working in the <a className="text-blue-600 hover:underline" href={"https://sfb1102.uni-saarland.de/projects/adapting-text-generation-to-individual-users/"}>A8: Adapting Text Generation to Individual Users </a> project  of the Collaborative Research Center on Information Density and Linguistic Encoding (<a className="text-blue-600 hover:underline" href={"https://sfb1102.uni-saarland.de/"} >SFB 1102</a>).

         {/*   a Scientific Associate in Computational Linguistics at Saarland University, Germany, working on Natural Language Generation tasks.*/}
         {/*I aspire to create intelligent systems that bridge the gap between humans and machines, ideally making human life a better place.*/}
         </p>
        {/*<p className="mt-1">*/}
        {/*    I'm working in the <a className="text-blue-600 hover:underline" href={"https://sfb1102.uni-saarland.de/projects/adapting-text-generation-to-individual-users/"}>A8: Adapting Text Generation to Individual Users </a> project  of the Collaborative Research Center on Information Density and Linguistic Encoding (<a className="text-blue-600 hover:underline" href={"https://sfb1102.uni-saarland.de/"} >SFB 1102</a>).*/}
        {/*</p>*/}
          <p className="mt-1">
            In my Masters work with Dr. Surangika Ranathunga and Prof. Sanath Jayasena, I mainly work on adapting sequence-to-sequence pre-trained models using continual pre-training and multi-stage fine-tuning for Low-Resource Language Neural Machine Translation (LRL-NMT).
            Also contributed to developing a state-of-the-art (Neural) Machine Translation system for the government sector of Sri Lanka.
        </p>


        <p className="mt-1">
           I'm interested in Control Text Generation, Large Languages Models and anything in between Neural Machine Translation and Low-resource Languages.
        </p>
      </div>





      {/*<div className="title font-medium text-[20px]">*/}
      {/*   👨‍💻 Research Interests*/}
      {/*</div>*/}
      {/*<div className="work-details text-justify">*/}
      {/*  <p className="indent-0"> Control Text generation </p>*/}
      {/*  <p className="indent-0"> Large Language Models (LLMs) </p>*/}
      {/*  <p className="indent-0"> Text Generation </p>*/}
      {/*  <p className="indent-0"> Neural Machine Translation (NMT) </p>*/}
      {/*  <p className="indent-0"> NLP for Low Resource Languages for example: LRL-NMT </p>*/}
      {/*  <p className="indent-0"> Text Summarization </p>*/}
      {/*  <p className="indent-0"> Text Simplification </p>*/}
      {/*</div>*/}
      {/*<div className="flex justify-center mt-[30px]">*/}
      {/*  <button className="bg-[#319795] dark:bg-[#81E6D9] py-2 px-5 text-white dark:text-black font-medium rounded-[10px]">*/}
      {/*    My portfolio*/}
      {/*  </button>*/}
      {/*</div>*/}

    </div>
  )
}

export default Introduction