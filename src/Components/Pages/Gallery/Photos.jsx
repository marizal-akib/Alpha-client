import { useInfiniteQuery } from "@tanstack/react-query";

const getImages = async([pageParam = 0])=>{
    const res = await fetch(`/public/Gallery.json?limit=16&offset${pageParam}`);
    const data = await res.json();

    return {...data, prevOffset: pageParam }
}

const Photos = () => {
    const {data , fetchNextPage , hasNextPage} = useInfiniteQuery({

        queryKey: ["images"],
        queryFn: getImages,
        getNextPageParam: (lastPage) => {
            if (lastPage.prevOffset + 16 > lastPage.imagesCount){
                return false;
            } 
            return lastPage.prevOffset +16
        }

    })

    console.log( data);
    const images = data?.pages.reduce((img,page) =>{
        console.log(page);
        return [...img ,...page.images]
    })
    console.log(images);
    return (
        <div>
            
        </div>
    );
};

export default Photos;