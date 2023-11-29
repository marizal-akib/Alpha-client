import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";

const Forums = () => {
  const axiosPublic = useAxiosPublic();

  const [currentPage, setCurrentPage] = useState(0);
  const {
    data: posts = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/posts?size=6&page=${currentPage}`);
      return res.data;
    },
  });

  const { data: allPosts = [] } = useQuery({
    queryKey: ["allPost"],
    queryFn: async () => {
      const res = await axiosPublic.get("/posts");
      return res.data;
    },
  });
  const count = allPosts.length;
  // console.log(posts);
  const numberOfPages = Math.ceil(count / 6);
  const pages = [...Array(numberOfPages).keys()];

  console.log(pages);

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <>
      <Helmet>
        <title>Alpha | Forums</title>
      </Helmet>
      <div>
        <div
          className=" text-center  p-10"
          style={{
            backgroundRepeat: "no-repeat",

            backgroundImage:
              "url(https://i.ibb.co/zQLWhCK/Untitled-design-3.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="text-center text-5xl font-bold shadow-md mt-5 p-12 text-white">
            <h1 className="uppercase relative ">Alpha</h1>
            <h2 className="uppercase relative ">Community</h2>
          </div>
        </div>
        <div className="flex w-screen">
          {/* dashboard side bar */}
          <div className="w-64 min-h-full bg-orange-400">
            {
                !loading && <><h2 className="p-5 text-2xl text-center font-semibold">Total posts:- {count} </h2></>
            }
          </div>
          {/* dashboard content */}
          <div className="flex-1">
            {loading ? (
              <div className=" p-80 ml-64 ">
                <span className=" loading loading-infinity loading-lg"></span>
              </div>
            ) : (
              <>
                
                <div className="space-y-5">
                  {posts.map((post) => (
                    <div key={post._id} className="card w-11/12 mx-auto  bg-base-100 shadow-xl">
                      <div className="card-body">
                        <h2 className="card-title">
                          {post.postTitle}
                          <div className="badge border-none font-bold text-orange-900 text-xs">
                            {post.category}
                          </div>
                        </h2>
                        <p className="font-medium text-sm">
                          {post.description}
                        </p>
                        <p className="font-semibold">
                          Bid Range: {post.minPrice}$ - {post.maxPrice}$
                        </p>

                        <div className="card-actions justify-end">
                          <Link
                            to={`/post/${post._id}`}
                            className="btn btn-success text-xs rounded-md font-semibold"
                          >
                            Bid Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center m-10">
                  <button
                    className="btn  bg-slate-400 rounded-r-none"
                    onClick={handlePrev}
                  >
                    Prev
                  </button>
                  {pages.map((page) => (
                    <button
                      onClick={() => setCurrentPage(page)}
                      key={page}
                      className={`btn btn-square  border-none text-base m-1 ${
                        currentPage === page
                          ? "bg-orange-500 underline"
                          : "bg-transparent"
                      } `}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    className="btn  bg-slate-400 rounded-l-none"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Forums;
