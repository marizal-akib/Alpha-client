import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";

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
      const res = await axiosPublic.get(`/posts?page=${currentPage}&size=6`);
      return res.data;
    },
  });
console.log(currentPage);
  const { data: allPosts = [] } = useQuery({
    queryKey: ["allPost"],
    queryFn: async () => {
      const res = await axiosPublic.get("/posts");
      return res.data;
    },
  });
  const count = allPosts.length;
  console.log(posts);
  const numberOfPages = Math.ceil(count / 6);
  const pages = [...Array(numberOfPages).keys()];

  console.log(pages);

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      refetch()
    }
  };
  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
      refetch()
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
          
          <div className="w-64  min-h-full bg-orange-400">
            {
                !loading && <><h2 className="p-5 text-2xl text-center font-semibold">Total posts:- {count} </h2></>
            }
          </div>
         
          <div className="p-5 flex-1 bg-[#141414]">
            {loading ? (
              <div className=" p-60 ml-64 ">
                <span className=" loading loading-infinity loading-lg"></span>
              </div>
            ) : (
              <>
                
                <div className="space-y-5  ">
                  {posts.map((post) => (
                  
                    <PostCard key={post._id} post={post} refetch={refetch} ></PostCard>
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
                      className={`btn btn-square text-white border-none text-base m-1 ${
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
