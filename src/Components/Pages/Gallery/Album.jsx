import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const Album = () => {
    const axiosPublic = useAxiosPublic();
    const { data: photos = [] } = useQuery({
      queryKey: ["photos"],
      queryFn: async () => {
        const res = await axiosPublic.get("/photos");
        return res.data;
      },
    });
    console.log(photos);
    return (
        <div className="grid grid-cols-3 ">
          
            {
                photos.map((photo, i) =>   <img key={i} src={photo.img} alt="" />)
            }im
        </div>
    );
};

export default Album;