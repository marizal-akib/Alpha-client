import { useEffect, useState } from "react";
import ArticlesCard from "./ArticlesCard";

const LatestArticles = () => {
  const [articles, setaArticle] = useState();
  useEffect(() => {
    fetch("/Post.json")
      .then((res) => res.json())
      .then((data) => setaArticle(data));
  }, []);
  console.log(articles);
  return (
    <div className="bg-[#141414] p-10">
      <h2 className="text-center text-4xl font-semibold text-white mb-8">
        Latest <span className="text-[#f47520]">Articles</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 gap-8">
        {
            articles?.map(article => <ArticlesCard key={article._id} article={article}></ArticlesCard>)
        }
      </div>
    </div>
  );
};

export default LatestArticles;