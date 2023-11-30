import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAuth from "../../../../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../../Hooks/useAxiosPublic";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Apply = () => {
  const { user, loading } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    // console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const apply = {
        name: data.name,
        email: data.email,
        age: data.age,
        week: data.week,
        time: data.time,
        other: data.other,
        checkbox: data.checkbox,
        image: res.data.data.display_url,
      };
      console.log(apply);
      const menuRes = await axiosPublic.post('/apply', apply);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
          reset()
          Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${data.name} is added to the menu`,
              showConfirmButton: false,
              timer: 1500
            });

      }
    }
    // console.log(res.data);
  };
  return (
    <div className="pt-28 pb-9 bg-[#141414]">
      <Helmet>
        <title>Alpha | Apply</title>
      </Helmet>
      <div className="p-6  bg-slate-200 w-4/5 mx-auto ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control  w-full my-6">
            <label className="label">
              <span className="label-text font-bold">Recipe Name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe Name"
              {...register("name")}
              required
              className="input input-bordered w-full max-full "
            />
          </div>
          <div className="flex gap-6">
            {/* email */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text font-bold">Email </span>
              </label>
              {loading ? (
                <span className="loading loading-spinner text-success"></span>
              ) : (
                <input
                  {...register("email")}
                  className="input input-bordered w-full max-full "
                  type="text"
                  value={user.email}
                />
              )}
            </div>
            {/* age */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text font-bold">Age</span>
              </label>
              <input
                type="number"
                placeholder="age"
                {...register("age")}
                required
                className="input input-bordered w-full max-full "
              />
            </div>
          </div>
          <div className="flex gap-6">
            {/* Available Time in a week */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text font-bold">
                  Available Time in a week{" "}
                </span>
              </label>

              <input
                type="text"
                placeholder="Available Time in a week"
                {...register("week")}
                required
                className="input input-bordered w-full max-full "
              />
            </div>
            {/* Available time in a day */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text font-bold">
                  Available time in a day
                </span>
              </label>
              <input
                type="text"
                placeholder=" Available time in a day"
                {...register("time")}
                required
                className="input input-bordered w-full max-full "
              />
            </div>
          </div>
          {/* details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Other info</span>
            </label>
            <textarea
              {...register("other")}
              required
              className="textarea textarea-bordered h-24"
              placeholder="Details info "
            ></textarea>
          </div>

          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-1/2 my-6">
              <label className="label">
                <span className="label-text font-bold">Skill </span>
              </label>
              <div className="flex">
                <p className="flex-1 font-semibold">Communication Skills</p>
                <input
                  {...register("checkbox")}
                  type="checkbox"
                  value="Communication Skills"
                />
              </div>
              <div className="flex">
                <p className="flex-1 font-semibold">Technical Knowledge</p>
                <input
                  {...register("checkbox")}
                  type="checkbox"
                  value="Technical Knowledge"
                />
              </div>
              <div className="flex">
                <p className="flex-1 font-semibold">
                  Empathy and Motivational Skills
                </p>
                <input
                  {...register("checkbox")}
                  type="checkbox"
                  value="Empathy and Motivational Skills"
                />
              </div>
            </div>
            {/*profile Picture */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text font-bold">Profile Picture </span>
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
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default Apply;
