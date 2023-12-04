import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddNewClass = () => {
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
    const { _id } = trainer[0];
    console.log(_id);
  
    const imageFile = { image: data.image[0] };
    const res = await axiosSecure.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const apply = {
        className: data.name,
        email: user.email,
        trainerName: user.displayName,
        classDescription: data.other,
        trainerId: _id,
        startTime: data.start,
        endTime: data.end,
        location: data.location,
        scheduleDays: data.checkbox,
        img: res.data.data.display_url,
      };
      console.log(apply);
      const menuRes = await axiosSecure.post("/class", apply);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Class added`,
          showConfirmButton: false,
          timer: 3500,
        });
      }
    }
  };
  return (
    <div className="pt-28 pb-9 bg-[#141414]">
      <Helmet>
        <title>Alpha | Add New Class</title>
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
          <div className="form-control  w-full my-6">
            <label className="label">
              <span className="label-text font-bold">Class Name</span>
            </label>
            <input
              type="text"
              placeholder="Class Name"
              {...register("name")}
              required
              className="input input-bordered w-full max-full "
            />
          </div>
          <div className="flex gap-6">
            {/* email */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text font-bold">Location </span>
              </label>

              <input
                {...register("location")}
                className="input input-bordered w-full max-full "
                type="text"
              />
            </div>
          </div>
          <div className="flex gap-6">
            {/* Available Time in a week */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text font-bold">Start Time</span>
              </label>

              <input
                type="time"
                placeholder="Available Time in a week"
                {...register("start")}
                required
                className="input input-bordered w-full max-full "
              />
            </div>
            {/* Available time in a day */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text font-bold">End Time</span>
              </label>
              <input
                type="time"
                placeholder=" Available time in a day"
                {...register("end")}
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
            {/* skill */}
            <div className="form-control w-1/2 my-6">
              <label className="label">
                <span className="label-text font-bold">Schedule Days </span>
              </label>
              <div className="flex">
                <p className="flex-1 font-semibold">Friday</p>
                <input
                  {...register("checkbox")}
                  type="checkbox"
                  value="Friday"
                />
              </div>
              <div className="flex">
                <p className="flex-1 font-semibold">Saturday</p>
                <input
                  {...register("checkbox")}
                  type="checkbox"
                  value="Saturday"
                />
              </div>
              <div className="flex">
                <p className="flex-1 font-semibold">Sunday</p>
                <input
                  {...register("checkbox")}
                  type="checkbox"
                  value="Sunday"
                />
              </div>
              <div className="flex">
                <p className="flex-1 font-semibold">Monday</p>
                <input
                  {...register("checkbox")}
                  type="checkbox"
                  value="Monday"
                />
              </div>
              <div className="flex">
                <p className="flex-1 font-semibold">Tuesday</p>
                <input
                  {...register("checkbox")}
                  type="checkbox"
                  value="Tuesday"
                />
              </div>
              <div className="flex">
                <p className="flex-1 font-semibold">Wednesday</p>
                <input
                  {...register("checkbox")}
                  type="checkbox"
                  value="Wednesday"
                />
              </div>

              <div className="flex">
                <p className="flex-1 font-semibold">Thursday</p>
                <input
                  {...register("checkbox")}
                  type="checkbox"
                  value="Thursday"
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
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewClass;
