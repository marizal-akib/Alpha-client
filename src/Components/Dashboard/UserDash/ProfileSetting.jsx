import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const ProfileSetting = () => {
  const {  updateUserProfile, user, loading } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      updateUserProfile(data.name, res?.data?.data?.display_url)
        .then(() => {
          console.log("Updated");
          const userInfo = {
            name: data.name,
            email: user.email,

            profilePic: res.data?.data?.display_url,
          };
          axiosPublic.patch("/users", userInfo).then((res) => {
            if (res.data.modifiedCount) {
              console.log("user database is updated");

              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Profile has been updated",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="pt-28 pb-9 bg-[#141414]">
      <Helmet>
        <title>Alpha | Update Profile</title>
      </Helmet>
      <div className="p-6  bg-slate-200 w-4/5 mx-auto ">
        <div>
          {loading ? (
            <span className="loading loading-spinner text-success"></span>
          ) : (
            <>
              <h2 className="font-semibold text-lg text-red-500">
                User Name : - {user.displayName}
              </h2>
              <h2 className="font-bold ">Email : - {user.email}</h2>
            </>
          )}
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name")}
              type="name"
              defaultValue={`${user.displayName}`}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Profile Picture</span>
            </label>
            <input
              {...register("image")}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Update" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSetting;
