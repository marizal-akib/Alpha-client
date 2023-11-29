import { useInfiniteQuery } from "@tanstack/react-query";

const getImages = async ({ pageParam = 0 }) => {
  const res = await fetch(
    `http://localhost:5000/photos?size=16&page=${pageParam}`
  );
  const data = await res.json();

  return { ...data };
};

const Photos = () => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["images"],
    queryFn: getImages,
    getNextPageParam: (lastPage) => {
      if (lastPage.prevPage + 16 > lastPage.imagesCount) {
        return false;
      }
      return lastPage.prevPage + 16;
    },
  });

  console.log( data);
  const images = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.images]
})
  return <div></div>;
};

export default Photos;
