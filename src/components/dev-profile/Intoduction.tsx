const link = "text-blue-600 hover:underline";
const subheading = "font-medium text-[17px] mt-[20px] mb-[5px]";

const Introduction: React.FC = () => {
  return (
    <div className="introduction mt-[30px]">
      <div className="title font-medium text-[20px]">👩‍💻 About Me</div>
      <div className="work-details text-justify">
        <p className="mb-[10px]">
          Hello! I&apos;m Sarubi, a PhD candidate in Computational Linguistics at Saarland University, supervised
          by{" "}
          <a className={link} href="https://www.coli.uni-saarland.de/~koller/" target="_blank" rel="noreferrer">
            Prof. Alexander Koller
          </a>{" "}
          and{" "}
          <a className={link} href="https://www.uni-saarland.de/lehrstuhl/demberg/members/verademberg.html" target="_blank" rel="noreferrer">
            Prof. Vera Demberg
          </a>
          . My work is part of the project{" "}
          <a className={link} href="https://sfb1102.uni-saarland.de/projects/adapting-text-generation-to-individual-users/" target="_blank" rel="noreferrer">
            A8: Adapting Text Generation to Individual Users
          </a>{" "}
          in the Collaborative Research Center{" "}
          <a className={link} href="https://sfb1102.uni-saarland.de/" target="_blank" rel="noreferrer">
            SFB 1102
          </a>
          .
        </p>

        <div className={subheading}>Research Focus</div>
        <p className="mb-[10px]">
          Current large language models optimize for a generic, average user, overlooking individual differences in how
          people process and express language. My PhD addresses this by personalizing text generation to the
          individual user—both how they comprehend text and how they write.
        </p>
        <p className="mb-[10px]">
          Rather than relying on one-size-fits-all proxies like readability scores, I model users directly: analyzing
          how linguistic and structural text complexity interacts with a reader&apos;s cognitive profile to dynamically
          tailor text to their comprehension capacity. At the same time, I study how to personalize generation for
          writers—using controllable generation, reinforcement learning, and model merging / adapter composition to
          capture an individual&apos;s unique voice and stylistic nuances rather than flattening their writing into
          generic model outputs.
        </p>

        <div className={subheading}>Selected Research Highlights</div>
        <ul className="mb-[10px] space-y-[12px] pl-[30px]">
          <li>
            <div className="font-medium">
              ✍️{" "}
              <a className={link} href="https://arxiv.org/abs/2603.23069" target="_blank" rel="noreferrer">
                AuthorMix
              </a>{" "}
              (EMNLP 2026, Oral)
            </div>
            <div className="italic">
              What if your writing assistant preserved your authentic voice rather than generic LLM prose?
            </div>
            <div>
              AuthorMix adapts a model to an individual&apos;s writing style from just a handful of examples in under an
              hour. By leveraging model merging and style-adapter composition guided by reinforcement learning, it
              outperforms strong proprietary baselines (including GPT-5.1) at jointly optimizing stylistic fidelity and
              semantic preservation.
            </div>
          </li>
          <li>
            <div className="font-medium">
              📖{" "}
              <a className={link} href="https://www.uni-saarland.de/fileadmin/upload/fakultaet-p/amlap/Abstracts/submission_207.pdf" target="_blank" rel="noreferrer">
                Individual Differences in Readability
              </a>{" "}
              (AMLaP 2026, ongoing)
            </div>
            <div className="italic">
              What makes a text difficult to process: syntactic depth, lexical frequency, or their interaction with
              reader cognitive profiles?
            </div>
            <div>
              We disentangle structural and lexical complexity to identify the exact levers personalized text
              adaptation systems must manipulate to match each reader&apos;s linguistic processing capacity.
            </div>
          </li>
          <li>
            <div className="font-medium">
              🎯{" "}
              <a className={link} href="https://sfb1102.uni-saarland.de/sfbunisb/uploads/2025/03/Thillainathan2025Controllable.pdf" target="_blank" rel="noreferrer">
                Fine-Grained Controllable Adaptation
              </a>{" "}
              (AAAI 2025 Workshop on AI4ED)
            </div>
            <div className="italic">
              Moving beyond a single, blunt &ldquo;make it simpler&rdquo; slider toward multi-attribute control.
            </div>
            <div>
              We demonstrate that LLMs can achieve fine-grained, independent control over distinct complexity axes
              (e.g., syntactic tree depth vs. vocabulary rarity) via structured in-context learning—eliminating the
              need for fine-tuning while providing the exact knobs required for personalized generation.
            </div>
          </li>
        </ul>

        <div className={subheading}>Background &amp; Multilingual NLP</div>
        <p className="mb-[10px]">
          Before diving into personalization, my background was rooted in multilingual NLP. During my Master&apos;s (by
          research) at the University of Moratuwa with{" "}
          <a className={link} href="https://www.massey.ac.nz/massey/expertise/profile.cfm?stref=319722" target="_blank" rel="noreferrer">
            Dr. Surangika Ranathunga
          </a>{" "}
          and{" "}
          <a className={link} href="https://uom.lk/staff/Jayasena.VSD" target="_blank" rel="noreferrer">
            Prof. Sanath Jayasena
          </a>
          , I worked on
          adapting pre-trained multilingual sequence-to-sequence models for low-resource machine translation (Sinhala,
          Tamil, English). This research won the{" "}
          <a className={link} href="https://ieeexplore.ieee.org/abstract/document/9525720" target="_blank" rel="noreferrer">
            Best Paper Award at MERCon 2021
          </a>{" "}
          and led to publications in{" "}
          <a className={link} href="https://aclanthology.org/2022.findings-acl.6/" target="_blank" rel="noreferrer">
            ACL Findings (2022)
          </a>{" "}
          and{" "}
          <a className={link} href="https://aclanthology.org/2024.findings-naacl.263/" target="_blank" rel="noreferrer">
            NAACL Findings (2024)
          </a>
          , as well as an operational machine translation pipeline deployed for the Sri Lankan government sector.
          Prior to my Master&apos;s, I worked as a software engineer at WSO2.
        </p>

        <div className="indent-0 mt-[15px] bg-[#F5F0E8] dark:bg-[#313134] p-4 rounded-[10px]">
          📫 I am always open to research collaborations, internship discussions, or technical exchanges—feel free
          to{" "}
          <a className={link} href="mailto:sarubi@lst.uni-saarland.de">
            reach out to me
          </a>
          !
        </div>
      </div>
    </div>
  );
};

export default Introduction;
