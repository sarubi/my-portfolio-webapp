import React from "react";
import news from "@/data/news";
import NewsList from "@/components/dev-profile/NewsList";

const News = () => {
  // Group by the year at the end of each date, e.g. "Oct 2026" -> "2026"
  const yearOf = (date: string) => date.slice(-4);
  const years = Array.from(new Set(news.map((item) => yearOf(item.date))));

  return (
    <>
      <div className="container mx-auto items-center mt-[50px] px-[15px]">
        <div className="title font-medium text-[20px]">
          📰 News
        </div>

        {years.map((year) => (
          <div key={year} className="mt-[20px]">
            <div className="font-medium text-[17px] mb-[5px]">{year}</div>
            <NewsList items={news.filter((item) => yearOf(item.date) === year)} />
          </div>
        ))}
      </div>
    </>
  );
};

export default News;
