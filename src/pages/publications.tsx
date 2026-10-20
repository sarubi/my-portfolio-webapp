import React from "react";
import { MY_NAMES, Publication, conferencePapers, workshopPapers } from "@/data/publications";

const Authors = ({ authors }: { authors: string[] }) => (
  <>
    {authors.map((author, index) => {
      const separator =
        index === 0 ? "" : index === authors.length - 1 ? (authors.length > 2 ? ", and " : " and ") : ", ";
      return (
        <React.Fragment key={index}>
          {separator}
          {MY_NAMES.includes(author) ? <span className="font-bold">{author}</span> : author}
        </React.Fragment>
      );
    })}
  </>
);

const PublicationItem = ({ pub }: { pub: Publication }) => (
  <div className="py-[10px] border-b last:border-b-0 border-[#d6cbbb] dark:border-[#3a3a3e]">
    <div className="font-medium">
      {pub.url ? (
        <a className="text-blue-600 hover:underline" href={pub.url} target="_blank" rel="noreferrer">
          {pub.title}
        </a>
      ) : (
        pub.title
      )}
    </div>
    <div>
      <Authors authors={pub.authors} />
    </div>
    <div>
      <span className="italic">{pub.venue}</span>
      {pub.details && <> {pub.details}</>}
      {pub.badge && (
        <span className="ml-2 px-2 py-[1px] text-[12px] font-sans font-medium rounded-full bg-[#805ad5] text-white">
          {pub.badge}
        </span>
      )}
      {pub.status && (
        <span className="ml-2 px-2 py-[1px] text-[12px] font-sans font-medium rounded-full border border-[#d69e2e] text-[#b7791f] dark:text-[#fbd38d]">
          {pub.status}
        </span>
      )}
    </div>
  </div>
);

const Publications = () => {
  // Group all papers by year, newest first
  const papers = [...conferencePapers, ...workshopPapers];
  const years = Array.from(new Set(papers.map((pub) => pub.year))).sort((a, b) => Number(b) - Number(a));

  return (
    <>
      <div className="container mx-auto items-center mt-[50px] px-[15px] font-serif">
        <div className="title font-medium text-[20px]">
          Publications
        </div>
        <p className="text-[14px] opacity-70">
          Full list on{" "}
          <a className="text-blue-600 hover:underline" href="https://scholar.google.com/citations?hl=en&user=KszUKukAAAAJ" target="_blank" rel="noreferrer">
            Google Scholar
          </a>
          .
        </p>

        {years.map((year) => (
          <div key={year} className="mt-[20px]">
            <div className="font-medium text-[17px]">{year}</div>
            {papers
              .filter((pub) => pub.year === year)
              .map((pub, index) => (
                <PublicationItem key={index} pub={pub} />
              ))}
          </div>
        ))}

      </div>
    </>
  );
};

export default Publications;
