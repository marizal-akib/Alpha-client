import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";

const getImages = async ({ pageParam = 0 }) => {
  const res = await fetch(
    `https://alpha-server-side.vercel.app/photos?size=16&page=${pageParam}`
  );
  const data = await res.json();

  return { ...data, prevOffset:pageParam };
};

const Photos = () => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["images"],
    queryFn: getImages,
    getNextPageParam: (lastPage) => {
      if (lastPage.prevOffset + 16 > lastPage.imagesCount) {
        return null;
      }
      return lastPage.prevOffset + 16;
    },
  });
console.log(data);
const images = data?.pages.reduce((acc, page) => {
  // console.log(page.images);
  return [...acc, ...page[0].images]
})

console.log(images);





// const photos= 
  return <div>
    <InfiniteScroll dataLength={images? images?.length : 0}
    next={() => fetchNextPage()}
    hasMore={hasNextPage}
    loader={<span className="loading loading-spinner text-success"></span>}>
      <div className="w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10"></div>
      {
        // images &&
        // images.map( image => <div key={image._id}><img src={image._img} alt="" /></div>
        // )  
        
      }

    </InfiniteScroll>
  </div>;
};

export default Photos;
