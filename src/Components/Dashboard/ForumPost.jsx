import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const ForumPost = () => {


    const { user, loading } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const axiosSecure = useAxiosSecure();

  const {  data: trainer = [] } = useQuery({
    queryKey: ["trainer"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classPost/${user.email}`);
      return res.data;
    },
  });
  console.log(trainer);



    const onSubmit = async (data) => {
        const { role } = trainer[0];
        console.log(role);
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
    
        const formattedDate = `${year}-${month}-${day}`;
        console.log(formattedDate);
        const vote = 0;
      
        const imageFile = { image: data.image[0] };
        const res = await axiosSecure.post(image_hosting_api, imageFile, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });
        if (res.data.success) {
          const apply = {
            
            email: user.email,
            vote: vote ,
            userName: user.displayName,
            post: data.other,
            role: role,
            post_date: formattedDate,
            title: data.name,
            category: data.checkbox,
            img:res.data.data.display_url,
          };
          console.log(apply);
          const menuRes = await axiosSecure.post("/newPost", apply);
          console.log(menuRes.data);
          if (menuRes.data.insertedId) {
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `Post added`,
              showConfirmButton: false,
              timer: 3500,
            });
          }
        }
      };

    







    return (
        <div className="pt-28 pb-9 bg-[#141414]">
        <Helmet>
          <title>Alpha | Add post</title>
        </Helmet>
        <div className="p-6  bg-slate-200 w-4/5 mx-auto ">
          <div>
            {loading ? (
              <span className="loading loading-spinner text-success"></span>
            ) : (
              <>
                <h2 className="font-semibold text-lg text-red-500">
                  Trainer Name : - {user.displayName}
                </h2>
                <h2 className="font-bold ">Email : - {user.email}</h2>
              </>
            )}
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* details */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Write your post</span>
              </label>
              <textarea
                {...register("other")}
                required
                className="textarea textarea-bordered h-24"
                placeholder="Details info "
              ></textarea>
            </div>
            <div className="form-control  w-full my-6">
              <label className="label">
                <span className="label-text font-bold">Post Title</span>
              </label>
              <input
                type="text"
                placeholder="Title"
                {...register("name")}
                required
                className="input input-bordered w-full max-full "
              />
            </div>

            <div className="flex gap-6">
              {/* skill */}
              <div className="form-control w-1/2 my-6">
                <label className="label">
                  <span className="label-text font-bold">Category </span>
                </label>
                <div className="flex">
                  <p className="flex-1 font-semibold">Weightlifting</p>
                  <input
                    {...register("checkbox")}
                    type="checkbox"
                    value="Weightlifting"
                  />
                </div>
                <div className="flex">
                  <p className="flex-1 font-semibold">Cardio </p>
                  <input
                    {...register("checkbox")}
                    type="checkbox"
                    value="Cardio "
                  />
                </div>
                <div className="flex">
                  <p className="flex-1 font-semibold">Nutrition and Diet</p>
                  <input
                    {...register("checkbox")}
                    type="checkbox"
                    value="Nutrition and Diet"
                  />
                </div>
                <div className="flex">
                  <p className="flex-1 font-semibold">Yoga and Flexibility</p>
                  <input
                    {...register("checkbox")}
                    type="checkbox"
                    value="Yoga and Flexibility"
                  />
                </div>
                <div className="flex">
                  <p className="flex-1 font-semibold">Recovery</p>
                  <input
                    {...register("checkbox")}
                    type="checkbox"
                    value="Recovery"
                  />
                </div>
  
               
              </div>
              {/*profile Picture */}
              <div className="form-control w-full my-6">
                <label className="label">
                  <span className="label-text font-bold"> Picture </span>
                </label>
                <input
                  {...register("image")}
                  required
                  type="file"
                  className="file-input w-full max-w-xs"
                />
              </div>
            </div>
            <button className="btn border-[#f47520] rounded-none border-2 font-semibold bg-black bg-opacity-50 text-[#f47520]">
              Add Post
            </button>
          </form>
        </div>
      </div>
    );
};

export default ForumPost;