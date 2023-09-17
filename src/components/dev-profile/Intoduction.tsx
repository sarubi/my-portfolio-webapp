const Introduction: React.FC = () => {
  return (
    <div className="introduction mt-[30px]">
      <div className="title font-medium text-[20px]">👨‍💻 About Me</div>
      <div className="work-details text-justify">
        <div className="indent-0">
          Hello! I&apos;m Sarubi, a PhD student in Computational Linguistics in the
          Department of Language Science and Technology at Saarland University,
          Germany. In my PhD I&apos;m mainly exploring personalised/individualised
          text generation. I&apos;m privileged to supervised by{" "} 
          <a
            className="text-blue-600 hover:underline"
            href="https://www.coli.uni-saarland.de/~koller/"
          >
          Prof. Alexander Koller 
          </a>{" "}
          and {" "}
          <a
            className="text-blue-600 hover:underline"
            href={
              "https://www.uni-saarland.de/lehrstuhl/demberg/members/verademberg.html"
            }
          >
          Prof. Vera Demberg
          </a> 
          . I&apos;m working in the {" "}
          <a
            className="text-blue-600 hover:underline"
            href={
              "https://sfb1102.uni-saarland.de/projects/adapting-text-generation-to-individual-users/"
            }
          >
            A8: Adapting Text Generation to Individual Users 
          </a>  {" "}
          project of the Collaborative Research Center on Information Density
          and Linguistic Encoding (
          <a
            className="text-blue-600 hover:underline"
            href={"https://sfb1102.uni-saarland.de/"}
          >
            SFB 1102
          </a>
          ).
        </div>

        <div className="indent-0">
          In my Masters work with Dr. Surangika Ranathunga and Prof. Sanath
          Jayasena, I mainly work on adapting sequence-to-sequence pre-trained
          models using continual pre-training and multi-stage fine-tuning for
          Low-Resource Language Neural Machine Translation (LRL-NMT). Also
          contributed to developing a state-of-the-art (Neural) Machine
          Translation system for the government sector of Sri Lanka.
        </div>

        <div className="indent-0">
          I&apos;m interested in Control Text Generation, Large Languages Models and
          anything in between Neural Machine Translation and Low-resource
          Languages.
        </div>
      </div>
    </div>
  );
};

export default Introduction;
